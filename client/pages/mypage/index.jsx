import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '../../_store/configureStore';
import MainLayout from '../../components/mainlayout';
import MyPageLayout from '../../components/views/mypage/layout';
import { myInfoRequestAction } from '../../_actions/user_actions';

const MyPage = () => {
  return (
    <MainLayout>
      <MyPageLayout>Dash</MyPageLayout>
    </MainLayout>
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

export default MyPage;
