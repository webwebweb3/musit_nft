import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, S3 } from '@aws-sdk/client-s3';

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
} from '../_request/types';

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

function* yieldUploadBackground(action) {
  try {
    const backgroundFilename = yield call(uploadBackground, action.data);
    console.log('ba?', backgroundFilename);
    yield put({
      type: STUDIO_UPLOAD_BACKGROUND_SUCCESS,
      data: backgroundFilename,
    });
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

function* watchUploadBackground() {
  yield takeLatest(STUDIO_UPLOAD_BACKGROUND_REQUEST, yieldUploadBackground);
}
function* watchUploadProfile() {
  yield takeLatest(STUDIO_UPLOAD_PROFILE_REQUEST, yieldUploadProfile);
}
function* watchGetMyMusics() {
  yield takeLatest(STUDIO_GET_MYMUSICS_REQUEST, yieldGetMymusics);
}

export default function* studio() {
  yield all([
    fork(watchUploadBackground),
    fork(watchUploadProfile),
    fork(watchGetMyMusics),
  ]);
}
