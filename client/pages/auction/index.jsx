import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import { Button, Grid } from '@mui/material';
import Link from 'next/link';

import wrapper from '../../_store/configureStore';
import NFTLayout from '../../components/nftLayout/NFTLayout';
import { myInfoRequestAction } from '../../_actions/user_actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allAuctionsAction } from '../../_actions/auctionAction';

const AuctionHome = () => {
  const auction = useSelector(state => state.auction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAuctionsAction());
  }, [dispatch]);

  return (
    <NFTLayout>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6} sx={{ color: '#fff' }}>
          <Link href="/auction/upload">
            <Button variant="contained" sx={{ bgcolor: 'gray' }}>
              등록하기
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6} md={6} sx={{ color: '#fff' }}>
          {auction.AuctionData &&
            auction.AuctionData.map(auction => (
              <div key={auction}>
                <Link href={`/auction/${auction}`}>{auction}</Link>
              </div>
            ))}
        </Grid>
      </Grid>
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
