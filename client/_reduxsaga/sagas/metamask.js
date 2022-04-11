import detectEthereumProvider from '@metamask/detect-provider';
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

async function metamaskAPI() {
  const provider = await detectEthereumProvider();

  return provider;
}

function* metamask({ text }) {
  try {
    const result = yield call(metamaskAPI);

    yield put({
      type: METAMASK_SUCCESS,
    });
    yield put({
      type: METAMASK_LOGIN_REQUEST,
      provider: result,
      text,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: METAMASK_FAILURE,
      error: '메타마스크를 설치해주세요.',
    });
  }
}

function metamaskloginAPI(provider) {
  let request = provider.request({
    method: 'eth_requestAccounts',
  });

  return request;
}

function* metamasklogin({ provider, text }) {
  try {
    const result = yield call(metamaskloginAPI, provider);

    yield put({
      type: METAMASK_LOGIN_SUCCESS,
      data: result[0],
    });

    switch (text) {
      case 'register':
        break;
      case 'login':
        yield put({
          type: LOGIN_USER_REQUEST,
          data: result[0],
        });
        break;
      default:
        break;
    }
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
