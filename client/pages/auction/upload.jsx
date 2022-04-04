import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '../../_store/configureStore';
import { myInfoRequestAction } from '../../_request/user_request';
import AuctionUploadPage from '../../components/views/auctionpage/auctionUpload';
import MainLayout from '../../components/mainlayout';

const AuctionUpload = () => {
  return (
    <MainLayout value="nft">
      <AuctionUploadPage />
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

export default AuctionUpload;
