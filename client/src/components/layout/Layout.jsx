import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { metaMaskUser } from '../../_actions/metamask_actions';
import Navbar from './Navbar';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // 다른 방법 생각중...
    try {
      dispatch(metaMaskUser()).then(response => {
        console.log('ok');
      });
    } catch (error) {
      return;
    }
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'inline-block',
        width: '100%',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      {/* sidebar */}
      <Navbar />

      {/* MyPage content */}
      <Box
        style={{
          marginLeft: '20px',
          marginTop: '100px',
          marginRight: '20px',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
