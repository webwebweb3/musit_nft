import Axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  MUSICS_LIKE_REQUEST,
  MUSICS_LIKE_SUCCESS,
  MUSICS_LIKE_FAILURE,
  MUSICS_DISLIKE_REQUEST,
  MUSICS_DISLIKE_SUCCESS,
  MUSICS_DISLIKE_FAILURE,
  MY_INFO_SUCCESS,
} from '$reduxsaga/request/types';

// ! data 확인 부탁
// data : {
//   editionNum: tokenId,
//   userMetamask: user metamask
// }
async function musicLike(data) {
  console.log('musiclike', data);
  return await Axios.post('/music', data);
}
function myInfoAPI() {
  return Axios.get('/user');
}

function* yieldMusicLike(action) {
  try {
    const eventData = yield call(musicLike, action.data);
    console.log('이벤트~', eventData);
    yield put({
      type: MUSICS_LIKE_SUCCESS,
      data: eventData.data,
    });
    const result = yield call(myInfoAPI);
    yield put({
      type: MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MUSICS_LIKE_FAILURE,
      error: err.response.data,
    });
  }
}

async function musicDisLike(data) {
  console.log('musiclike', data);
  return await Axios.delete('/music', {
    params: {
      paramsData: data,
    },
  });
}

function* yieldMusicDisLike(action) {
  try {
    const eventData = yield call(musicDisLike, action.data);
    console.log('디스이벤트~', eventData);
    yield put({
      type: MUSICS_DISLIKE_SUCCESS,
      data: eventData.data,
    });
    const result = yield call(myInfoAPI);
    yield put({
      type: MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MUSICS_DISLIKE_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLikeMusic() {
  yield takeLatest(MUSICS_LIKE_REQUEST, yieldMusicLike);
}
function* watchDisLikeMusic() {
  yield takeLatest(MUSICS_DISLIKE_REQUEST, yieldMusicDisLike);
}

export default function* music() {
  yield all([fork(watchLikeMusic), fork(watchDisLikeMusic)]);
}
