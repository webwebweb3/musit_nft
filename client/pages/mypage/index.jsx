import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '../../_store/configureStore';
import MainLayout from '../../components/mainlayout';
import MyPageLayout from '../../components/views/mypage/layout';
import DashBoard from '../../components/views/mypage/DashBoard';
import { myInfoRequestAction } from '../../_actions/user_actions';

const DashBoardPage = () => {
  return (
    <MainLayout>
      <MyPageLayout>
        <DashBoard />
      </MyPageLayout>
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

export default DashBoardPage;
