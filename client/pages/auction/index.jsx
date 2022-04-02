import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import wrapper from '../../_store/configureStore';
import NFTLayout from '../../components/nftLayout/NFTLayout';
import { myInfoRequestAction } from '../../_request/user_request';
import { allAuctionsAction } from '../../_request/auction_request';
import AuctionMainPage from '../../components/views/auctionpage';

const AuctionHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAuctionsAction());
  }, [dispatch]);

  return (
    <NFTLayout>
      <AuctionMainPage />
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

export default AuctionHome;
