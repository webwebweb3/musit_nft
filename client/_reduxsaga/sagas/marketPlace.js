import Axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { saleMusicTokenContract } from '$contracts';
import {
  MARKETPLACE_CANCEl_FAILURE,
  MARKETPLACE_CANCEl_REQUEST,
  MARKETPLACE_CANCEl_SUCCESS,
  MARKETPLACE_GETOWNER_FAILURE,
  MARKETPLACE_GETOWNER_REQUEST,
  MARKETPLACE_GETOWNER_SUCCESS,
  MARKETPLACE_GET_EVENT_FAILURE,
  MARKETPLACE_GET_EVENT_REQUEST,
  MARKETPLACE_GET_EVENT_SUCCESS,
  MARKETPLACE_PURCHASE_FAILURE,
  MARKETPLACE_PURCHASE_REQUEST,
  MARKETPLACE_PURCHASE_SUCCESS,
} from '$reduxsaga/request/types';

function getNFTOwner(data) {
  return Axios.get('/marketplace', {
    params: {
      userAccount: data,
    },
  });
}

function* getOwner(action) {
  try {
    const owner = yield call(getNFTOwner, action.data);
    yield put({
      type: MARKETPLACE_GETOWNER_SUCCESS,
      data: owner.data.userName,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MARKETPLACE_GETOWNER_FAILURE,
      error: err.response.data,
    });
  }
}

async function cancel(data) {
  await saleMusicTokenContract.methods
    .cancelSaleMusicToken(data.tokenId)
    .send({ from: data.account });
}

function* cancelNFT(action) {
  try {
    yield call(cancel, action.data);
    yield put({
      type: MARKETPLACE_CANCEl_SUCCESS,
      data: 'success',
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MARKETPLACE_CANCEl_FAILURE,
      error: err.response.data,
    });
  }
}

async function purchase(data) {
  return await saleMusicTokenContract.methods
    .purchaseMusicToken(data.tokenId)
    .send({ from: data.account, value: data.musicPrice });
}

function* purchaseNFT(action) {
  try {
    yield call(purchase, action.data);
    yield put({
      type: MARKETPLACE_PURCHASE_SUCCESS,
      data: 'success',
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MARKETPLACE_PURCHASE_FAILURE,
      error: err,
    });
  }
}

async function getEventFunc(data) {
  return await saleMusicTokenContract.getPastEvents('PurchaseChart', {
    filter: { tokenID: data },
    fromBlock: 0,
  });
}

function* getEvent(action) {
  try {
    const eventData = yield call(getEventFunc, action.data);
    console.log('event', eventData);
    yield put({
      type: MARKETPLACE_GET_EVENT_SUCCESS,
      data: eventData,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MARKETPLACE_GET_EVENT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchGetOwnerName() {
  yield takeLatest(MARKETPLACE_GETOWNER_REQUEST, getOwner);
}
function* watchPurchaseNFT() {
  yield takeLatest(MARKETPLACE_PURCHASE_REQUEST, purchaseNFT);
}
function* watchCancelNFT() {
  yield takeLatest(MARKETPLACE_CANCEl_REQUEST, cancelNFT);
}
function* watchGetEvent() {
  yield takeLatest(MARKETPLACE_GET_EVENT_REQUEST, getEvent);
}

export default function* marketplace() {
  yield all([
    fork(watchCancelNFT),
    fork(watchPurchaseNFT),
    fork(watchGetOwnerName),
    fork(watchGetEvent),
  ]);
}
