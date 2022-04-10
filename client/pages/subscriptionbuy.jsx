import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '../_reduxsaga/store/configureStore';
import MainLayout from '../components/mainlayout';
import SubscriptionBuy from '../components/views/SubscriptionBuy';
import { myInfoRequestAction } from '../_reduxsaga/request/user_request';

const SubscriptionBuyPage = () => {
  return (
    <MainLayout>
      <SubscriptionBuy />
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

export default SubscriptionBuyPage;
