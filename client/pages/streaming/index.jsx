import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper from '../../_store/configureStore';
import Streaming from '../../components/views/streaming/Streaming';
import { myInfoRequestAction } from '../../_actions/user_actions';
import StreamingLayout from '../../components/streamingLayout/StreamingLayout';

const StreamingHome = () => {
  return (
    <StreamingLayout>
      <Streaming />
    </StreamingLayout>
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

export default StreamingHome;
