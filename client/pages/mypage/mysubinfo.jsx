import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '$reduxsaga/store/configureStore';
import MyPageLayout from '$components/views/mypage/layout';
import { myInfoRequestAction } from '$reduxsaga/request/user_request';

import MySubInfo from '$components/views/mypage/mysubinfo/MySubInfo';

const MySubInfoPage = () => {
  return (
    <>
      <MyPageLayout>
        <MySubInfo />
      </MyPageLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({ req }) => {
      const cookie = req ? req.headers.cookie : '';
      axios.defaults.headers.Cookie = '';
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      store.dispatch(myInfoRequestAction());

      store.dispatch(END);
      await store.sagaTask.toPromise();
    },
);

export default MySubInfoPage;
