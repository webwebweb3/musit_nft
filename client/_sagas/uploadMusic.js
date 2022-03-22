import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, S3 } from '@aws-sdk/client-s3';
// import { create } from 'ipfs-http-client';

import {
  IPFS_MUSIC_FAILURE,
  IPFS_MUSIC_REQUEST,
  IPFS_MUSIC_SUCCESS,
  S3_ALBUMCOVER_FAILURE,
  S3_ALBUMCOVER_REQUEST,
  S3_ALBUMCOVER_SUCCESS,
} from '../_actions/types';

function uploadS3AlbumCover(file) {
  const myFile = file;
  const fileName = `${Date.now()}_${myFile.name}`;

  console.log('1 saga', fileName);
  console.log('2 saga', myFile);

  const target = {
    Bucket: 'webwebweb3',
    Key: `upload/${fileName}`,
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
  } catch (e) {
    console.error(e);
  }
}

function* uploadS3(action) {
  try {
    console.log('a saga data', action.data);
    yield call(uploadS3AlbumCover, action.data);
    yield put({
      type: S3_ALBUMCOVER_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: S3_ALBUMCOVER_FAILURE,
      error: err.response.data,
    });
  }
}

async function uploadIPFSMusic(file) {
  //   const client = create('https://ipfs.infura.io:5001/api/v0');
  console.log(file);
  const url = await file.client.add(file.file);
  console.log(url);
  return url.path;
}

function* uploadIPFS(action) {
  try {
    const IPFSurl = yield call(uploadIPFSMusic, action.data);
    yield put({
      type: IPFS_MUSIC_SUCCESS,
      data: IPFSurl,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: IPFS_MUSIC_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchS3Upload() {
  yield takeLatest(S3_ALBUMCOVER_REQUEST, uploadS3);
}

function* watchIPFSUpload() {
  yield takeLatest(IPFS_MUSIC_REQUEST, uploadIPFS);
}

export default function* uploadMusic() {
  yield all([fork(watchS3Upload), fork(watchIPFSUpload)]);
}
