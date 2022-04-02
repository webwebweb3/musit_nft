import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '../../_store/configureStore';
import NFTLayout from '../../components/nftLayout/NFTLayout';
import { myInfoRequestAction } from '../../_actions/user_actions';
import { Box, Button, Divider, Grid } from '@mui/material';

const Product = () => {
  return (
    <NFTLayout>
      <Grid container spacing={2}>
        <Grid item xs={6} md={5}>
          <img src="/bgimg.jpg" alt="img" width={'550px'} height={'550px'} />
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
            Time left
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
            Description? About Artist? Properties? Details? Like?
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
