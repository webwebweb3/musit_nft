import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import wrapper from '$reduxsaga/store/configureStore';
import Layout from '$components/layout';

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <title>WebWebWeb3</title>
      </Head>
      <ToastContainer pauseOnFocusLoss={false} />
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(App);
