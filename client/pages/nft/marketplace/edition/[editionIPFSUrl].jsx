import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../../../../_store/configureStore';
import { myInfoRequestAction } from '../../../../_actions/user_actions';
import EditionIPFSUrl from '../../../../components/views/nft/editions/editionIPFSUrl';
import MainLayout from '../../../../components/mainlayout';

const EditionIPFSUrlPage = () => {
  return (
    <MainLayout value="nft">
      <EditionIPFSUrl />
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

export default EditionIPFSUrlPage;
