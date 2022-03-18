import { all, call, fork, put, takeLatest, throttle } from 'redux-saga/effects';
import {
  LOGIN_USER_REQUEST,
  METAMASK_FAILURE,
  METAMASK_LOGIN_FAILURE,
  METAMASK_LOGIN_REQUEST,
  METAMASK_LOGIN_SUCCESS,
  METAMASK_REQUEST,
  METAMASK_SUCCESS,
} from '../_actions/types';

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
    console.log(result[0]);

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
    console.log(err.response.data);
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
  yield throttle(5000, METAMASK_LOGIN_REQUEST, metamasklogin);
}

export default function* userSaga() {
  yield all([fork(watchMetamask), fork(watchMetamaskLogin)]);
}
