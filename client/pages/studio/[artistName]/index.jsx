import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '$reduxsaga/store/configureStore';
import { myInfoRequestAction } from '$reduxsaga/request/user_request';
import dynamic from 'next/dynamic';
const Studio = dynamic(() => import('$components/views/studio/Studio'), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Studio />
    </>
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

export default Home;
