import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '../../../_store/configureStore';
import MainLayout from '../../../components/mainlayout';
// import UploadMusic from '../../../components/views/studio/uploadmusic/UploadMusic';
import { myInfoRequestAction } from '../../../_request/user_request';
import dynamic from 'next/dynamic';
const UploadMusic = dynamic(
  () => import('../../../components/views/studio/uploadmusic/UploadMusic'),
  {
    ssr: false,
  },
);

const Home = () => {
  return (
    <MainLayout>
      <UploadMusic />
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

export default Home;
