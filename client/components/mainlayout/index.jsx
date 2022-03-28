import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        width: '100%',
      }}
    >
      {/* sidebar */}
      <Navbar />

      {/* MyPage content */}
      <Box
        style={{
          marginTop: '100px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
