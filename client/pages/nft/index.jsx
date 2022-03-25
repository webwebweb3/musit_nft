import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '../../_store/configureStore';
import NFTLayout from '../../components/nftLayout/StreamingLayout';
import { myInfoRequestAction } from '../../_actions/user_actions';
import NFT from '../../components/views/nft/NFT';

const NFTHome = () => {
  return (
    <NFTLayout>
      <NFT />
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

export default NFTHome;
