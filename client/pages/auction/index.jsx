import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '../../_store/configureStore';
import MainLayout from '../../components/mainlayout';
import { myInfoRequestAction } from '../../_actions/user_actions';
import { Grid } from '@mui/material';

const ActionHome = () => {
  return (
    <MainLayout>
      <Grid container spacing={2}>
        <Grid item xs={6} md={12} sx={{ color: '#fff' }}>
          Main
        </Grid>
      </Grid>
    </MainLayout>
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

export default ActionHome;
