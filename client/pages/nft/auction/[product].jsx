import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '$reduxsaga/store/configureStore';
import { myInfoRequestAction } from '$reduxsaga/request/user_request';
import AuctionProductPage from '$components/views/auctionpage/auctionProduct';
import MainLayout from '$components/layout';

const AuctionProduct = () => {
  return (
    <>
      <AuctionProductPage />
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

AuctionProduct.Layout = ({ children }) => (
  <MainLayout value="nft">{children}</MainLayout>
);

export default AuctionProduct;
