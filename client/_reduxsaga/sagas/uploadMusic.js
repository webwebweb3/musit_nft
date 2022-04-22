import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, S3 } from '@aws-sdk/client-s3';
import Router, { useRouter } from 'next/router';
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
import { mintMusicTokenContract, web3 } from '$contracts';

function uploadS3AlbumCover(data) {
  console.log('s3data', data);
  if (data.selectedFile === null) {
    alert('앨범 카버를 선택해주세요!');
    Router.reload();
  }
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
}

async function uploadIPFSMusic(data) {
  console.log('ipfsdata', data);

  if (data.selectedIPFSFile === null) {
    alert('음악을 업로드해주세요!');
    Router.reload();
  }
  const url = await data.ipfsredux.client.add(data.ipfsredux.file);

  return url.path;
}

async function uploadToServer(data) {
  console.log('datatoserver', data);
  await axios.post(`/uploadmusic`, data).then(res => {
    if (res.data.uploadSuccess === 'true') {
      // TODO: studio/artistname/uploadmusic 일 시 아래 실행
      // Router.replace(`/studio/${data.data.dataToSubmit.artist}`);
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
}

async function mintNFTMusic(data) {
  // const router = useRouter();

  if (data.data.dataToSubmit.title === '' || null) {
    throw new Error('no title');
  }
  if (data.IPFSurl === '' || null) {
    throw new Error('no IPFS Url');
  }
  if (data.S3AlbumUrl === '' || null) {
    throw new Error('no S3 Album');
  }
  console.log('mint data', data);
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
  console.log('민트 ipfs', mintIPFSurl);
  const accounts = await web3.eth.getAccounts();
  console.log('어카운트', accounts);

  console.log('account', data.data.account);
  const response = await mintMusicTokenContract.methods
    .mintMusicToken(mintIPFSurl.data.path)
    .send({ from: data.data.account });

  console.log('res', response);

  // if (response.status) { 성공시
  //   if (router.asPath.split('/').reverse()[0] === 'uploadmusic') {
  //     Router.replace(`/studio/${data.data.dataToSubmit.artist}`);
  //   }
  // } else {} 실패시
}

function* mintNFT(action) {
  try {
    const S3AlbumUrl = yield call(uploadS3AlbumCover, action.data);
    yield put({
      type: S3_ALBUMCOVER_SUCCESS,
      data: S3AlbumUrl,
    });
    const IPFSurl = yield call(uploadIPFSMusic, action.data);
    console.log('IPFSurl', IPFSurl);
    yield put({
      type: IPFS_MUSIC_SUCCESS,
      data: IPFSurl,
    });
    const newActionData = {
      data: action.data,
      S3AlbumUrl,
      IPFSurl,
    };

    yield call(mintNFTMusic, newActionData);
    yield call(uploadToServer, newActionData);

    yield put({
      type: MINT_MUSIC_NFT_SUCCESS,
      data: 'success',
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: S3_ALBUMCOVER_FAILURE,
      error: err,
    });
    yield put({
      type: IPFS_MUSIC_FAILURE,
      error: err,
    });
    yield put({
      type: MINT_MUSIC_NFT_FAILURE,
      error: err,
    });
  }
}

function* watchMintNFTMusic() {
  yield takeLatest(MINT_MUSIC_NFT_REQUEST, mintNFT);
}

export default function* uploadMusic() {
  yield all([fork(watchMintNFTMusic)]);
}
