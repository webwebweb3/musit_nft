import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_USER_REQUEST,
  METAMASK_FAILURE,
  METAMASK_LOGIN_FAILURE,
  METAMASK_LOGIN_REQUEST,
  METAMASK_LOGIN_SUCCESS,
  METAMASK_REQUEST,
  METAMASK_SUCCESS,
} from '../request/types';

function metamaskAPI() {
  let request = window.ethereum.request({
    method: 'eth_requestAccounts',
  });

  return request;
}

function* metamask() {
  try {
    const result = yield call(metamaskAPI);

    yield put({
      type: METAMASK_SUCCESS,
      data: result[0],
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: METAMASK_FAILURE,
      error: err.response.data,
    });
  }
}

function metamaskloginAPI() {
  let request = window.ethereum.request({
    method: 'eth_requestAccounts',
  });

  return request;
}

function* metamasklogin() {
  try {
    const result = yield call(metamaskloginAPI);

    yield put({
      type: METAMASK_LOGIN_SUCCESS,
      data: result[0],
    });
    yield put({
      type: LOGIN_USER_REQUEST,
      data: result[0],
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: METAMASK_LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchMetamask() {
  yield takeLatest(METAMASK_REQUEST, metamask);
}

function* watchMetamaskLogin() {
  yield takeLatest(METAMASK_LOGIN_REQUEST, metamasklogin);
}

export default function* userSaga() {
  yield all([fork(watchMetamask), fork(watchMetamaskLogin)]);
}
