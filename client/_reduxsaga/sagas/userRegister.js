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
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  USER_IMAGES_REQUEST,
  USER_IMAGES_SUCCESS,
  USER_IMAGES_FAILURE,
  MY_INFO_SUCCESS,
  MY_INFO_FAILURE,
  MY_INFO_REQUEST,
} from '$reduxsaga/request/types';

function logInAPI(data) {
  let loginData = {
    metamask: data,
    password: '1', // 임시 - 수정 예정
  };

  return Axios.post('/login', loginData);
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

function* register({ data }) {
  try {
    yield call(registerAPI, data);
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
  return Axios.post('/useredit/img', data);
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

function userEditAPI(data) {
  return Axios.post('/useredit', data);
}

function* userEdit(action) {
  try {
    const result = yield call(userEditAPI, action.data);

    yield put({
      type: EDIT_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: EDIT_USER_FAILURE,
      error: err.response.data,
    });
  }
}

function myInfoAPI() {
  return Axios.get('/user');
}

function* myInfo() {
  try {
    const result = yield call(myInfoAPI);

    yield put({
      type: MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MY_INFO_FAILURE,
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

function* watchUserEdit() {
  yield takeLatest(EDIT_USER_REQUEST, userEdit);
}

function* watchMyInfo() {
  yield takeLatest(MY_INFO_REQUEST, myInfo);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchRegister),
    fork(watchUserImg),
    fork(watchUserEdit),
    fork(watchMyInfo),
  ]);
}
