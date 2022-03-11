import * as React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
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
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
