import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, S3 } from '@aws-sdk/client-s3';
import Axios from 'axios';
import Router from 'next/router';

import {
  STUDIO_UPLOAD_BACKGROUND_REQUEST,
  STUDIO_UPLOAD_BACKGROUND_SUCCESS,
  STUDIO_UPLOAD_BACKGROUND_FAILURE,
  STUDIO_UPLOAD_PROFILE_REQUEST,
  STUDIO_UPLOAD_PROFILE_SUCCESS,
  STUDIO_UPLOAD_PROFILE_FAILURE,
  STUDIO_GET_MYMUSICS_REQUEST,
  STUDIO_GET_MYMUSICS_SUCCESS,
  STUDIO_GET_MYMUSICS_FAILURE,
  STUDIO_GET_USERIMAGES_REQUEST,
  STUDIO_GET_USERIMAGES_SUCCESS,
  STUDIO_GET_USERIMAGES_FAILURE,
} from '../request/types';

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

    Router.replace(`/studio/${action.data.artistName}`);
  } catch (err) {
    console.error(err);
    yield put({
      type: STUDIO_UPLOAD_BACKGROUND_FAILURE,
      error: err.response.data,
    });
  }
}

async function uploadProfile(data) {
  console.log('uploadProfile');
}

function* yieldUploadProfile(action) {
  try {
    yield call(uploadProfile, action.data);
    yield put({
      type: STUDIO_UPLOAD_PROFILE_SUCCESS,
      data: 'success',
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: STUDIO_UPLOAD_PROFILE_FAILURE,
      error: err.response.data,
    });
  }
}

async function getMyMusics(data) {
  console.log('getmymusics');
}

function* yieldGetMymusics(action) {
  try {
    yield call(getMyMusics, action.data);
    yield put({
      type: STUDIO_GET_MYMUSICS_SUCCESS,
      data: 'success',
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
    console.error(err);
    yield put({
      type: STUDIO_GET_USERIMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchUploadBackground() {
  yield takeLatest(STUDIO_UPLOAD_BACKGROUND_REQUEST, yieldUploadBackground);
}
function* watchUploadProfile() {
  yield takeLatest(STUDIO_UPLOAD_PROFILE_REQUEST, yieldUploadProfile);
}
function* watchGetMyMusics() {
  yield takeLatest(STUDIO_GET_MYMUSICS_REQUEST, yieldGetMymusics);
}
function* watchGetUserImages() {
  yield takeLatest(STUDIO_GET_USERIMAGES_REQUEST, yieldGetUserImages);
}

export default function* studio() {
  yield all([
    fork(watchUploadBackground),
    fork(watchUploadProfile),
    fork(watchGetMyMusics),
    fork(watchGetUserImages),
  ]);
}
