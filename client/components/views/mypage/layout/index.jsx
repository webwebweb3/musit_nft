import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import Sidebar from '../Sidebar';

const MyPageLayout = ({ children }) => {
  const { userData } = useSelector(state => state.user);

  useEffect(() => {
    console.log(1111);
    if (!userData) {
      Router.push('/');
    }
  }, [userData]);

  return (
    <div style={{ minWidth: '1300px', display: 'flex' }}>
      <Box
        sx={{
          display: 'inline-block',
          verticalAlign: 'top',
        }}
      >
        <Sidebar userData={userData} />
      </Box>
      <Box
        sx={{
          display: 'inline-block',
          width: '1px',
          height: '650px',
          backgroundColor: 'gray',
        }}
      />
      <Box
        sx={{
          display: 'inline-block',
          marginLeft: '70px',
          marginRight: '70px',
          verticalAlign: 'top',
          minWidth: '1159px',
          maxWidth: '1159px',
          width: '1159px',
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export default MyPageLayout;
