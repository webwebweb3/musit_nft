import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '$reduxsaga/store/configureStore';
import { myInfoRequestAction } from '$reduxsaga/request/user_request';
import MarketPlace from '$components/views/nft/marketplace/MarketPlace';
import MainLayout from '$components/layout';

const MarketPlacePage = () => {
  return (
    <>
      <MarketPlace />
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

MarketPlacePage.Layout = ({ children }) => (
  <MainLayout value="nft">{children}</MainLayout>
);

export default MarketPlacePage;
