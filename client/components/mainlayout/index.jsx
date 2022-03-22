import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
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
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
