import { all, fork } from 'redux-saga/effects';
import Axios from 'axios';

import userRegisterSaga from './userRegister';
import auctionSaga from './auction';
import uploadMusic from './uploadMusic';
import marketPlace from './marketPlace';
import studio from './studio';
import music from './music';

Axios.defaults.baseURL = 'http://13.125.197.70';
Axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userRegisterSaga),
    fork(auctionSaga),
    fork(uploadMusic),
    fork(marketPlace),
    fork(studio),
    fork(music),
  ]);
}
