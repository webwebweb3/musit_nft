import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, S3 } from '@aws-sdk/client-s3';
import Axios from 'axios';
import Router from 'next/router';

import {
  STUDIO_UPLOAD_BACKGROUND_REQUEST,
  STUDIO_UPLOAD_BACKGROUND_SUCCESS,
  STUDIO_UPLOAD_BACKGROUND_FAILURE,
  STUDIO_GET_MYMUSICS_REQUEST,
  STUDIO_GET_MYMUSICS_SUCCESS,
  STUDIO_GET_MYMUSICS_FAILURE,
  STUDIO_GET_USERIMAGES_REQUEST,
  STUDIO_GET_USERIMAGES_SUCCESS,
  STUDIO_GET_USERIMAGES_FAILURE,
  STUDIO_SUBSCRIBE_REQUEST,
  STUDIO_SUBSCRIBE_SUCCESS,
  STUDIO_SUBSCRIBE_FAILURE,
  STUDIO_ISSUBSCRIBING_REQUEST,
  STUDIO_ISSUBSCRIBING_SUCCESS,
  STUDIO_ISSUBSCRIBING_FAILURE,
  STUDIO_CNT_FOLLOWERS_SUCCESS,
} from '$reduxsaga/request/types';
import { mintMusicTokenContract } from '$contracts';

async function uploadBackground(data) {
  const myFile = data.selectedFile;
  const fileName = `${data.artistName}_${myFile.name}`;
  console.log('s3F', fileName);

  const target = {
    Bucket: 'webwebweb3',
    Key: `background/${fileName}`,
    Body: myFile,
  };
  const creds = {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY,
  };

  try {
    const parallelUploads3 = new Upload({
      client:
        new S3({ region: 'ap-northeast-2', credentials: creds }) ||
        new S3Client({}),
      partSize: 10485760,
      leavePartsOnError: false,
      params: target,
    });

    parallelUploads3.on('httpUploadProgress', progress => {
      console.log('saga progress', progress);
    });
    parallelUploads3.done();
    return { fileName, uploadFileName: myFile.name };
  } catch (e) {
    console.error(e);
  }
}

function uploadBackgroundToDB(data) {
  Axios.post('/studio', data);
}

function* yieldUploadBackground(action) {
  try {
    const backgroundFileName = yield call(uploadBackground, action.data);
    const uploadBgToDB = {
      backgroundFileName,
      userMetamask: action.data.metamask,
    };
    yield call(uploadBackgroundToDB, uploadBgToDB);

    yield put({
      type: STUDIO_UPLOAD_BACKGROUND_SUCCESS,
      data: backgroundFileName,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: STUDIO_UPLOAD_BACKGROUND_FAILURE,
      error: err.response.data,
    });
  }
}

function getUserMetamask(data) {
  return Axios.get('/studio/getMusics', {
    params: {
      userName: data,
    },
  });
}
async function getMyMusic(data) {
  console.log('getMyMusic 안', data);
  // const mintOwner = await mintMusicTokenContract.getPastEvents('Minter', {
  //   filter: { Minter: data.data.user },
  //   fromBlock: 0,
  // });
  return await mintMusicTokenContract.getPastEvents('Minter', {
    filter: { Minter: data.data.user },
    fromBlock: 0,
  });
}

async function mapMyMusic(data) {
  const tempArray = [];
  for (let i = 0; i < data.length; i++) {
    const ipfsData = await fetch(
      `https://ipfs.infura.io/ipfs/${data[i].returnValues.tokenURI}`,
    );
    const returnData = await ipfsData.json();
    tempArray.push(returnData.properties);
  }

  return tempArray;
}

function* yieldGetMymusics(action) {
  try {
    const userMetamask = yield call(getUserMetamask, action.data);
    console.log('usermetamask', userMetamask);
    const getMyMusics = yield call(getMyMusic, userMetamask);
    console.log('getMyMusics', getMyMusics);

    const mapMyMusics = yield call(mapMyMusic, getMyMusics);
    console.log('mapMyMusics', mapMyMusics);

    yield put({
      type: STUDIO_GET_MYMUSICS_SUCCESS,
      data: mapMyMusics,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: STUDIO_GET_MYMUSICS_FAILURE,
      error: err.response.data,
    });
  }
}

async function getUserImages(data) {
  return Axios.get('/studio', {
    params: {
      userName: data,
    },
  });
}

function* yieldGetUserImages(action) {
  try {
    const userImages = yield call(getUserImages, action.data);
    yield put({
      type: STUDIO_GET_USERIMAGES_SUCCESS,
      data: userImages.data,
    });
  } catch (err) {
    alert(err.response.data);
    yield put({
      type: STUDIO_GET_USERIMAGES_FAILURE,
      error: err.response.data,
    });
    Router.push('/');
  }
}

async function isSubscribing(data) {
  console.log('구독중인지?', data);
  return Axios.get('/studio/isSubscribe', {
    params: {
      paramsData: data,
    },
  });
}

function* yieldIsSubscribing(action) {
  try {
    const isSub = yield call(isSubscribing, action.data);
    console.log('구독중인가?', isSub);
    yield put({
      type: STUDIO_CNT_FOLLOWERS_SUCCESS,
      data: isSub.data.cntFollower,
    });
    yield put({
      type: STUDIO_ISSUBSCRIBING_SUCCESS,
      data: isSub.data,
    });
  } catch (err) {
    yield put({
      type: STUDIO_ISSUBSCRIBING_FAILURE,
      error: err.response.data,
    });
  }
}

async function subscribeArtist(data) {
  if (data.actionData === 'subscribe') {
    console.log('구독 할 것이다', data);
    Axios.post('/studio/subscribe', data);
    const returnData = { isSubscribing: true, artistId: data.artistId };
    return returnData;
  } else if (data.actionData === 'cancelSubscribe') {
    console.log('구독 안 할 것이다', data);
    Axios.delete('/studio/subscribe', {
      params: {
        paramsData: data,
      },
    });
    const returnData = { isSubscribing: false, artistId: data.artistId };
    return returnData;
  }
  console.log('데이타 보자', data);
}

function* yieldSubscribeArtist(action) {
  try {
    const result = yield call(subscribeArtist, action.data);
    console.log('리조뜨이즈에브리띵', result);
    yield put({
      type: STUDIO_SUBSCRIBE_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: STUDIO_SUBSCRIBE_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchUploadBackground() {
  yield takeLatest(STUDIO_UPLOAD_BACKGROUND_REQUEST, yieldUploadBackground);
}

function* watchGetMyMusics() {
  yield takeLatest(STUDIO_GET_MYMUSICS_REQUEST, yieldGetMymusics);
}
function* watchGetUserImages() {
  yield takeLatest(STUDIO_GET_USERIMAGES_REQUEST, yieldGetUserImages);
}
function* watchIsSubscribing() {
  yield takeLatest(STUDIO_ISSUBSCRIBING_REQUEST, yieldIsSubscribing);
}
function* watchSubscribeArtist() {
  yield takeLatest(STUDIO_SUBSCRIBE_REQUEST, yieldSubscribeArtist);
}

export default function* studio() {
  yield all([
    fork(watchUploadBackground),
    fork(watchGetMyMusics),
    fork(watchGetUserImages),
    fork(watchSubscribeArtist),
    fork(watchIsSubscribing),
  ]);
}
