import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '../../_reduxsaga/store/configureStore';
import MainLayout from '../../components/mainlayout';
import MyPageLayout from '../../components/views/mypage/layout';
import MyFavoriteTracks from '../../components/views/mypage/MyFavoriteTracks';
import { myInfoRequestAction } from '../../_reduxsaga/request/user_request';

const MyFavoriteTracksPage = () => {
  return (
    <MainLayout>
      <MyPageLayout>
        <MyFavoriteTracks />
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

export default MyFavoriteTracksPage;
