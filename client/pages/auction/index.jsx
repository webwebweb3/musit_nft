import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import { Button, Grid } from '@mui/material';
import Link from 'next/link';

import wrapper from '../../_store/configureStore';
import NFTLayout from '../../components/nftLayout/NFTLayout';
import { myInfoRequestAction } from '../../_actions/user_actions';

const AuctionHome = () => {
  return (
    <NFTLayout>
      <Grid container spacing={2}>
        <Grid item xs={6} md={12} sx={{ color: '#fff' }}>
          <Link href="/auction/upload">
            <Button variant="contained" sx={{ bgcolor: 'gray' }}>
              등록하기
            </Button>
          </Link>
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
