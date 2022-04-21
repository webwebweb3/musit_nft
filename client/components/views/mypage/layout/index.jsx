import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import Sidebar from '../Sidebar';

const MyPageLayout = ({ children }) => {
  const { userData } = useSelector(state => state.user);

  useEffect(() => {
    if (!userData) {
      Router.push('/');
    }
  }, [userData]);

  return (
    <div style={{ marginTop: '120px', display: 'flex' }}>
      <Box
        sx={{
          margin: '0 auto',
          minWidth: '1200px',
          maxWidth: '1200px',
        }}
      >
        <Box
          sx={{
            display: 'inline-block',
            verticalAlign: 'top',
            margin: '0 auto',
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
            marginLeft: '80px',
            marginRight: '70px',
            verticalAlign: 'top',
            minWidth: '700px',
            maxWidth: '700px',
            width: '700px',
          }}
        >
          {children}
        </Box>
      </Box>
    </div>
  );
};

export default MyPageLayout;
