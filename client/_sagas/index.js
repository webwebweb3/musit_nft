import { all, fork } from 'redux-saga/effects';
import Axios from 'axios';

import userRegisterSaga from './userRegister';
import metamaskSaga from './metamask';

Axios.defaults.baseURL = 'http://localhost:8000/api';
Axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userRegisterSaga), fork(metamaskSaga)]); // all 에 배열을 넣고 배열의 함수들을 한번에 전부 실행
}

/* redux-saga/effects */
// all 은 위에
// fork 는 비동기 함수 호출
// call 은 동기 함수 호출
// take("액션"); 은 해당 액션이 실행될 때까지 대기
// put 은 리덕스의 dispatch 와 비슷함
