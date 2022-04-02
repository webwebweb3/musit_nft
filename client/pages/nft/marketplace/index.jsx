import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '../../../_store/configureStore';
import { myInfoRequestAction } from '../../../_request/user_request';
import MarketPlace from '../../../components/views/nft/marketplace/MarketPlace';
import NFTLayout from '../../../components/nftLayout/NFTLayout';

const MarketPlacePage = () => {
  return (
    <NFTLayout>
      <MarketPlace />
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

export default MarketPlacePage;
