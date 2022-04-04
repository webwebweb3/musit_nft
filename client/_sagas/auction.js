import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { auctionAbi, auctionCreatorContract, web3 } from '../contracts';
import {
  AUCTION_CREATE_REQUEST,
  AUCTION_CREATE_SUCCESS,
  AUCTION_CREATE_FAILURE,
  AUCTION_ALL_REQUEST,
  AUCTION_ALL_SUCCESS,
  AUCTION_ALL_FAILURE,
  AUCTION_REQUEST,
  AUCTION_SUCCESS,
  AUCTION_FAILURE,
  AUCTION_INFO_REQUEST,
  AUCTION_INFO_SUCCESS,
  AUCTION_INFO_FAILURE,
  AUCTION_CANCEL_REQUEST,
  AUCTION_CANCEL_SUCCESS,
  AUCTION_CANCEL_FAILURE,
  AUCTION_BID_REQUEST,
  AUCTION_BID_SUCCESS,
  AUCTION_BID_FAILURE,
  AUCTION_MYBID_REQUEST,
  AUCTION_MYBID_SUCCESS,
  AUCTION_MYBID_FAILURE,
} from '../_request/types';

async function createauctionAPI(data) {
  let { startingBid, endTimestamp, tokenID, account } = data;

  await auctionCreatorContract.methods
    .createAuction(startingBid, endTimestamp, tokenID)
    .send({ from: account });

  return;
}

function* createauction(action) {
  try {
    yield call(createauctionAPI, action.data);

    yield put({
      type: AUCTION_CREATE_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: AUCTION_CREATE_FAILURE,
      error: 'err',
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

    yield put({
      type: AUCTION_ALL_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: AUCTION_ALL_FAILURE,
      error: 'err',
    });
  }
}

async function auctionAPI(data) {
  let auctionContract = await new web3.eth.Contract(auctionAbi, data);

  return auctionContract;
}

function* auction(action) {
  try {
    let result = yield call(auctionAPI, action.data);

    yield put({
      type: AUCTION_SUCCESS,
    });
    yield put({
      type: AUCTION_INFO_REQUEST,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: AUCTION_FAILURE,
      error: 'err',
    });
  }
}

async function auctionInfoAPI(data) {
  let time = await data.methods.endAt().call();
  let highestBindingBidWei = await data.methods.highestBindingBid().call();
  let highestBidder = await data.methods.highestBidder().call();
  let owner = await data.methods.owner().call();
  let auctionState = await data.methods.auctionState().call();
  let highestBindingBid = highestBindingBidWei / 1000000000000000000;

  let infoData = {
    time,
    highestBindingBid,
    highestBidder,
    owner,
    auctionState,
  };

  return infoData;
}

function* auctionInfo(action) {
  try {
    let result = yield call(auctionInfoAPI, action.data);

    yield put({
      type: AUCTION_INFO_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: AUCTION_INFO_FAILURE,
      error: 'err',
    });
  }
}

async function auctioncancelAPI(data) {
  let auctionContract = await new web3.eth.Contract(auctionAbi, data.product);
  await auctionContract.methods.cancelAuction().send({ from: data.metamask });

  return;
}

function* auctioncancel(action) {
  try {
    console.log(action.data);
    yield call(auctioncancelAPI, action.data);

    yield put({
      type: AUCTION_CANCEL_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: AUCTION_CANCEL_FAILURE,
      error: 'err',
    });
  }
}

async function auctionbidAPI(data) {
  let auctionContract = await new web3.eth.Contract(auctionAbi, data.product);
  await auctionContract.methods.placeBid().send({
    from: data.metamask,
    value: web3.utils.toWei(`${data.bid}`, 'ether'),
  });

  return;
}

function* auctionbid(action) {
  try {
    yield call(auctionbidAPI, action.data);

    yield put({
      type: AUCTION_BID_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: AUCTION_BID_FAILURE,
      error: 'err',
    });
  }
}

async function auctionMyBidAPI(data) {
  let auctionContract = await new web3.eth.Contract(auctionAbi, data.product);
  let request = await auctionContract.methods.bids(data.metamask).call();
  let myBindingBid = request / 1000000000000000000;

  return myBindingBid;
}

function* auctionmybid(action) {
  try {
    let result = yield call(auctionMyBidAPI, action.data);

    yield put({
      type: AUCTION_MYBID_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: AUCTION_MYBID_FAILURE,
      error: 'err',
    });
  }
}

function* watchCreateAuction() {
  yield takeLatest(AUCTION_CREATE_REQUEST, createauction);
}

function* watchAllAuctions() {
  yield takeLatest(AUCTION_ALL_REQUEST, allauctions);
}

function* watchAuction() {
  yield takeLatest(AUCTION_REQUEST, auction);
}

function* watchAuctionInfo() {
  yield takeLatest(AUCTION_INFO_REQUEST, auctionInfo);
}

function* watchAuctionCancel() {
  yield takeLatest(AUCTION_CANCEL_REQUEST, auctioncancel);
}

function* watchAuctionBid() {
  yield takeLatest(AUCTION_BID_REQUEST, auctionbid);
}

function* watchAuctionMyBid() {
  yield takeLatest(AUCTION_MYBID_REQUEST, auctionmybid);
}

export default function* userSaga() {
  yield all([
    fork(watchCreateAuction),
    fork(watchAllAuctions),
    fork(watchAuction),
    fork(watchAuctionInfo),
    fork(watchAuctionCancel),
    fork(watchAuctionBid),
    fork(watchAuctionMyBid),
  ]);
}
