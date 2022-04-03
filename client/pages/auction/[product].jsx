import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '../../_store/configureStore';
import NFTLayout from '../../components/nftLayout/NFTLayout';
import { myInfoRequestAction } from '../../_request/user_request';
import AuctionProductPage from '../../components/views/auctionpage/auctionProduct';

const AuctionProduct = () => {
  return (
    <NFTLayout>
      <AuctionProductPage />
    </NFTLayout>
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

export default AuctionProduct;
