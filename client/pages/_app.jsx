import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import wrapper from '../_reduxsaga/store/configureStore';
import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  body {
    background-color: #0d0f1a;
    margin:0;
  }
`;

const App = ({ Component }) => (
  <>
    <Global />
    <Head>
      <meta charSet="utf-8" />
      <title>WebWebWeb3</title>
    </Head>
    <Component />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export function reportWebVitals(metric) {
  // console.log(metric);
}

export default wrapper.withRedux(App);
