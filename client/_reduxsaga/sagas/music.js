import Axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  MUSICS_LIKE_REQUEST,
  MUSICS_LIKE_SUCCESS,
  MUSICS_LIKE_FAILURE,
  MUSICS_DISLIKE_REQUEST,
  MUSICS_DISLIKE_SUCCESS,
  MUSICS_DISLIKE_FAILURE,
  MUSICS_ISLIKE_REQUEST,
  MUSICS_ISLIKE_SUCCESS,
  MUSICS_ISLIKE_FAILURE,
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

function* yieldMusicLike(action) {
  try {
    const eventData = yield call(musicLike, action.data);
    console.log('이벤트~', eventData);

    yield put({
      type: MUSICS_LIKE_SUCCESS,
      data: true,
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
      data: false,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MUSICS_DISLIKE_FAILURE,
      error: err.response.data,
    });
  }
}

async function isLike(data) {
  console.log('islike', data);
  return Axios.get('/music', {
    params: {
      paramsData: data,
    },
  });
}

function* yieldIsLike(action) {
  try {
    const eventData = yield call(isLike, action.data);
    console.log('겟이벤트~', eventData.data.exist);
    yield put({
      type: MUSICS_ISLIKE_SUCCESS,
      data: eventData.data.exist,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MUSICS_ISLIKE_FAILURE,
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
function* watchIsLike() {
  yield takeLatest(MUSICS_ISLIKE_REQUEST, yieldIsLike);
}

export default function* music() {
  yield all([fork(watchLikeMusic), fork(watchIsLike), fork(watchDisLikeMusic)]);
}
