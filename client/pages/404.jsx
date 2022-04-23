import React from 'react';

import MainLayout from '$components/layout';

const Custom404 = () => {
  return (
    <>
      <MainLayout>
        <h1 style={{ color: '#fff' }}>404 NOT FOUND!</h1>
        <center style={{ color: '#fff' }}>
          The page your are looking for doesn't exists.
        </center>
      </MainLayout>
    </>
  );
};

export default Custom404;
