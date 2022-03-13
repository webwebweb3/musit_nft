import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { metaMaskUser } from '../../_actions/metamask_actions';
import Navbar from './Navbar';

const Layout = () => {
  const dispatch = useDispatch();
  const metamask = useSelector(state => state.metamask);

  useEffect(() => {
    if (metamask.userMetamask) {
      return;
    }
    dispatch(metaMaskUser()).then(response => {
      console.log(response);
    });
  }, [dispatch, metamask]);

  return (
    <Box
      sx={{
        display: 'inline-block',
        width: '100%',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      {/* header */}
      <Navbar />

      {/* main content */}
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
