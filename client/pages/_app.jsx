import '../styles/globals.css';
import React from 'react';
import Head from 'next/head';

import wrapper from '../_reduxsaga/store/configureStore';
import MainLayout from '../components/mainlayout';

const App = ({ Component, pageProps }) => {
  const Layout = Component.Layout ?? MainLayout;

  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <title>WebWebWeb3</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(App);
