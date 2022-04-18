import Axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  MUSICS_LIKE_REQUEST,
  MUSICS_LIKE_SUCCESS,
  MUSICS_LIKE_FAILURE,
  MUSICS_DISLIKE_REQUEST,
  MUSICS_DISLIKE_SUCCESS,
  MUSICS_DISLIKE_FAILURE,
} from '$reduxsaga/request/types';

async function musicLike(data) {
  console.log('musiclike', data);
  await Axios.post('/music', data);
}

function* yieldMusicLike(action) {
  try {
    const eventData = yield call(musicLike, action.data);

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
  console.log('musicdislike', data);
}

function* yieldMusicDisLike(action) {
  try {
    const eventData = yield call(musicDisLike, action.data);

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

function* watchLikeMusic() {
  yield takeLatest(MUSICS_LIKE_REQUEST, yieldMusicLike);
}
function* watchDisLikeMusic() {
  yield takeLatest(MUSICS_DISLIKE_REQUEST, yieldMusicDisLike);
}

export default function* music() {
  yield all([fork(watchLikeMusic), fork(watchDisLikeMusic)]);
}
