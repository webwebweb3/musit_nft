import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import Axios from 'axios';

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  USER_IMAGES_REQUEST,
  USER_IMAGES_SUCCESS,
  USER_IMAGES_FAILURE,
} from '../_actions/types';

function logInAPI(data) {
  let loginData = {
    metamask: data,
    password: '1', // 임시 - 수정 예정
  };

  const test = Axios.post('/login', loginData);
  return test;
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOGIN_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGIN_USER_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return Axios.post('/logout');
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOGOUT_USER_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGOUT_USER_FAILURE,
      error: err.response.data,
    });
  }
}

function registerAPI(data) {
  return Axios.post('/register', data);
}

function* register(action) {
  try {
    yield call(registerAPI, action.data);
    yield put({
      type: REGISTER_USER_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REGISTER_USER_FAILURE,
      error: err.response.data,
    });
  }
}

function userImgAPI(data) {
  return Axios.post('/userimg', data);
}

function* userImg(action) {
  try {
    const result = yield call(userImgAPI, action.data);

    yield put({
      type: USER_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: USER_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOGIN_USER_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOGOUT_USER_REQUEST, logOut);
}

function* watchRegister() {
  yield takeLatest(REGISTER_USER_REQUEST, register);
}

function* watchUserImg() {
  yield takeLatest(USER_IMAGES_REQUEST, userImg);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchRegister),
    fork(watchUserImg),
  ]);
}
