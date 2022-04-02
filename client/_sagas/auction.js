import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { auctionCreatorContract } from '../contracts';
import {
  CreateAuction_REQUEST,
  CreateAuction_SUCCESS,
  CreateAuction_FAILURE,
  AllAuctions_REQUEST,
  AllAuctions_SUCCESS,
  AllAuctions_FAILURE,
} from '../_actions/types';

async function createauctionAPI(data) {
  let { startingBid, endAt, tokenID, account } = data;

  await auctionCreatorContract.methods
    .createAuction(startingBid, endAt, tokenID)
    .send({ from: account });

  return;
}

function* createauction(action) {
  try {
    yield call(createauctionAPI, action.data);

    yield put({
      type: CreateAuction_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CreateAuction_FAILURE,
      error: err,
    });
  }
}

async function allauctionsAPI() {
  let request = await auctionCreatorContract.methods.allAuctions().call();

  return request;
}

function* allauctions() {
  try {
    const result = yield call(allauctionsAPI);
    console.log(result);

    yield put({
      type: AllAuctions_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: AllAuctions_FAILURE,
      error: err,
    });
  }
}

function* watchCreateAuction() {
  yield takeLatest(CreateAuction_REQUEST, createauction);
}

function* watchAllAuctions() {
  yield takeLatest(AllAuctions_REQUEST, allauctions);
}

export default function* userSaga() {
  yield all([fork(watchCreateAuction), fork(watchAllAuctions)]);
}
