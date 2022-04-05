import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../../../../_store/configureStore';
import { myInfoRequestAction } from '../../../../_request/user_request';

import EditionTokenURI from '../../../../components/views/nft/editions/EditionTokenURI';
import MainLayout from '../../../../components/mainlayout';

const EditionIPFSUrlPage = () => {
  return (
    <MainLayout value="nft">
      <EditionTokenURI />
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
