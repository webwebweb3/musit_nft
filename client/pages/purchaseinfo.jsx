import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '../_store/configureStore';
import MainLayout from '../components/mainlayout';
import PurchaseInfo from '../components/views/PurchaseInfo';
import { myInfoRequestAction } from '../_request/user_request';

const purchaseinfo = () => {
  return (
    <MainLayout>
      <PurchaseInfo />
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

      ///
      store.dispatch(myInfoRequestAction());
      ///

      store.dispatch(END);
      await store.sagaTask.toPromise();
    },
);

export default purchaseinfo;
