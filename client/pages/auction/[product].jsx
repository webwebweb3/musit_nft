import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import Clock from 'react-live-clock';

import wrapper from '../../_store/configureStore';
import NFTLayout from '../../components/nftLayout/NFTLayout';
import { myInfoRequestAction } from '../../_actions/user_actions';
import { Box, Button, Divider, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auctionAction } from '../../_actions/auctionAction';

const Product = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let { product } = router.query;
  const { auctionData } = useSelector(state => state.auction);

  const [test, setTest] = useState('');
  const [Time, setTime] = useState('');
  const [gaptest, setGaptest] = useState(false);

  let onFlag = e => {
    setTime(e);
  };

  let t1 = new Date(test * 1000);
  let t2 = new Date();
  let gap = t1.getTime() - t2.getTime();

  useEffect(() => {
    if (!gaptest && gap < 0) {
      setGaptest(true);
    } else {
      setGaptest(false);
    }
  }, [gap && gap < 0]);

  let day = Math.floor(gap / (1000 * 60 * 60 * 24));
  let hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((gap % (1000 * 60)) / 1000);

  useEffect(() => {
    dispatch(auctionAction(product));
  }, [dispatch, product]);

  useEffect(() => {
    console.log(auctionData);
    if (auctionData) {
      setTest(auctionData.time);
    }
  }, [auctionData]);

  return (
    <NFTLayout>
      <Clock
        style={{ display: 'none' }}
        onChange={onFlag}
        ticking={true}
        timezone={'US/Pacific'}
      />
      <Grid container spacing={2}>
        <Grid item xs={6} md={5}>
          {/* <img src="/bgimg.jpg" alt="img" width={'550px'} height={'550px'} /> */}
        </Grid>
        <Grid item xs={6} md={7} sx={{ color: '#fff' }}>
          <Box
            sx={{
              display: 'inline-block',
              width: '100%',
              fontSize: '40px',
              fontWeight: 'bold',
            }}
          >
            Title
          </Box>
          <Divider
            sx={{
              mt: 0.3,
              mb: 1.25,
              margin: '15px 0 20px 0',
              backgroundColor: 'white',
            }}
          />
          <Box
            sx={{
              display: 'inline-block',
              width: '100%',
              fontSize: '25px',
            }}
          >
            Condition
          </Box>
          <Box
            sx={{
              display: 'inline-block',
              width: '100%',
              fontSize: '25px',
            }}
          >
            <div>
              Sale ends {test && new Date(test * 1000).toLocaleString()}
            </div>
            {gaptest ? (
              <>종료된 경매입니다.</>
            ) : (
              <>
                {day} 일 {hour} 시 {min} 분 {sec} 초
              </>
            )}
          </Box>
          <Box
            sx={{
              display: 'inline-block',
              width: '100%',
              fontSize: '25px',
            }}
          >
            Current price
          </Box>
          <Button
            sx={{
              display: 'inline-block',
              fontSize: '25px',
            }}
          >
            Buy now
          </Button>
          <Box
            sx={{
              display: 'inline-block',
              width: '100%',
              fontSize: '25px',
            }}
          >
            Price History
          </Box>
          <Box
            sx={{
              display: 'inline-block',
              marginTop: '45px',
              width: '100%',
              fontSize: '25px',
            }}
          >
            Description? About Artist? Like?
          </Box>
          <Box
            sx={{
              display: 'inline-block',
              width: '100%',
              fontSize: '25px',
            }}
          >
            + Ratings and Reviews?
          </Box>
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

export default Product;
