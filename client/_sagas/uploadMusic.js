import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, S3 } from '@aws-sdk/client-s3';
import dynamic from 'next/dynamic';
import { mintMusicTokenContract } from '../contracts';

// const mintMusicTokenContract = dynamic(() => import('../contracts'), {
//   ssr: false,
// });

import {
  IPFS_MUSIC_FAILURE,
  IPFS_MUSIC_REQUEST,
  IPFS_MUSIC_SUCCESS,
  MINT_MUSIC_NFT_FAILURE,
  MINT_MUSIC_NFT_REQUEST,
  MINT_MUSIC_NFT_SUCCESS,
  S3_ALBUMCOVER_FAILURE,
  S3_ALBUMCOVER_REQUEST,
  S3_ALBUMCOVER_SUCCESS,
} from '../_actions/types';
import axios from 'axios';

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

function* uploadS3(action) {
  try {
    console.log('uploadS3', action);
    const S3Url = yield call(uploadS3AlbumCover, action.data);
    yield put({
      type: S3_ALBUMCOVER_SUCCESS,
      data: S3Url,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: S3_ALBUMCOVER_FAILURE,
      error: err.response.data,
    });
  }
}

async function uploadIPFSMusic(data) {
  const url = await data.ipfsredux.client.add(data.ipfsredux.file);
  console.log('IPFS', url);
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

async function mintNFTMusic(data) {
  console.log(data);
  try {
    let jsonData = {
      title: 'musit NFT',
      description: 'This data is for minting a NFT.',
      type: 'object',
      properties: {
        dataToSubmit: data.data,
        IPFSUrl: data.IPFSurl,
        S3AlbumCover: data.S3AlbumUrl,
      },
    };

    const mintingData = JSON.stringify(jsonData);
    console.log(mintingData);

    const response = { status: true };
    await mintMusicTokenContract.methods
      .mintMusicToken(mintingData)
      .send({ from: data.account });

    if (response.status) {
      const uploadToServer = async e => {
        try {
          await axios.post(`/uploadmusic`, data.data).then(res => {
            if (res.data.uploadSuccess === 'true') {
              console.log('good');
            } else if (res.data.uploadSuccess !== 'empty') {
              alert(res.data.message);
            } else if (res.data.uploadSuccess !== 'emptyIPFS') {
              alert(res.data.message);
            } else if (res.data.uploadSuccess !== 'emptyS3AlbumCover') {
              alert(res.data.message);
            } else {
              alert(res.data.message);
            }
          });
        } catch (error) {
          console.error(error);
        }
      };
      uploadToServer();
    }
  } catch (error) {
    console.error(error);
  }
}

function* mintNFT(action) {
  try {
    console.log('action???', action);
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
      data: action.data.dataToSubmit,
      S3AlbumUrl,
      IPFSurl,
      account: action.data.account,
    };

    yield call(mintNFTMusic, newActionData);

    yield put({
      type: MINT_MUSIC_NFT_SUCCESS,
      data: 'success',
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MINT_MUSIC_NFT_FAILURE,
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

function* watchMintNFTMusic() {
  yield takeLatest(MINT_MUSIC_NFT_REQUEST, mintNFT);
}

export default function* uploadMusic() {
  yield all([
    // fork(watchS3Upload),
    // fork(watchIPFSUpload),
    fork(watchMintNFTMusic),
  ]);
}
