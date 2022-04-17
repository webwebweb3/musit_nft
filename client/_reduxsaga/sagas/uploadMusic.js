import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, S3 } from '@aws-sdk/client-s3';
import Router from 'next/router';
import axios from 'axios';

import {
  IPFS_MUSIC_FAILURE,
  IPFS_MUSIC_SUCCESS,
  MINT_MUSIC_NFT_FAILURE,
  MINT_MUSIC_NFT_REQUEST,
  MINT_MUSIC_NFT_SUCCESS,
  S3_ALBUMCOVER_FAILURE,
  S3_ALBUMCOVER_SUCCESS,
} from '$reduxsaga/request/types';
import { mintMusicTokenContract } from '$contracts';

function uploadS3AlbumCover(data) {
  const myFile = data.selectedFile;
  const fileName = `${Date.now()}_${myFile.name}`;
  console.log('s3F', fileName);

  const target = {
    Bucket: 'webwebweb3',
    Key: `upload/${fileName}`,
    Body: myFile,
  };
  const creds = {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY,
  };
  console.log('?', creds);

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
    return fileName;
  } catch (e) {
    console.error(e);
  }
}

async function uploadIPFSMusic(data) {
  console.log('ipfs data', data.ipfsredux.file);
  const url = await data.ipfsredux.client.add(data.ipfsredux.file);

  return url.path;
}

async function uploadToServer(data) {
  console.log('업로드 데이따', data);
  await axios.post(`/uploadmusic`, data).then(res => {
    if (res.data.uploadSuccess === 'true') {
      Router.replace(`/studio/${data.data.dataToSubmit.artist}`);
    } else if (res.data.uploadSuccess === 'empty') {
      alert(res.data.message);
    } else if (res.data.uploadSuccess === 'emptyIPFS') {
      alert(res.data.message);
    } else if (res.data.uploadSuccess === 'emptyS3AlbumCover') {
      alert(res.data.message);
    } else {
      alert(res.data.message);
    }
  });
}

async function mintNFTMusic(data) {
  try {
    console.log('data', data);
    let jsonData = {
      title: 'musit NFT',
      description: 'This data is for minting a NFT.',
      type: 'object',
      properties: {
        dataToSubmit: data.data.dataToSubmit,
        IPFSUrl: data.IPFSurl,
        S3AlbumCover: data.S3AlbumUrl,
      },
    };

    const mintIPFSurl = await axios.post('/uploadmusic/fs', jsonData);

    // const NFTIPFSurl = await data.data.ipfsredux.client.add(MintData);

    // console.log('nftipfs', NFTIPFSurl);
    // const mintingData = JSON.stringify(jsonData);
    // console.log('mintingdata', mintingData);
    console.log('account', data.data.account);
    const response = await mintMusicTokenContract.methods
      .mintMusicToken(mintIPFSurl.data.path)
      .send({ from: data.data.account });

    console.log('res', response);

    if (response.status) {
    }
  } catch (error) {
    console.error(error);
    alert('error.. reload page please..');
  }
}

function* mintNFT(action) {
  try {
    const S3AlbumUrl = yield call(uploadS3AlbumCover, action.data);
    yield put({
      type: S3_ALBUMCOVER_SUCCESS,
      data: S3AlbumUrl,
    });
    const IPFSurl = yield call(uploadIPFSMusic, action.data);
    yield put({
      type: IPFS_MUSIC_SUCCESS,
      data: IPFSurl,
    });
    const newActionData = {
      data: action.data,
      S3AlbumUrl,
      IPFSurl,
    };
    yield call(uploadToServer, newActionData);

    // yield call(mintNFTMusic, newActionData);

    yield put({
      type: MINT_MUSIC_NFT_SUCCESS,
      data: 'success',
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: S3_ALBUMCOVER_FAILURE,
      error: err.response.data,
    });
    yield put({
      type: IPFS_MUSIC_FAILURE,
      error: err.response.data,
    });
    yield put({
      type: MINT_MUSIC_NFT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchMintNFTMusic() {
  yield takeLatest(MINT_MUSIC_NFT_REQUEST, mintNFT);
}

export default function* uploadMusic() {
  yield all([fork(watchMintNFTMusic)]);
}
