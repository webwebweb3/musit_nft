import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';

const MainLayout = ({ children, value }) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        width: '100%',
      }}
    >
      {/* sidebar */}
      <Navbar value={value} />

      {/* MyPage content */}
      <Box
        style={{
          marginLeft: '0',
          marginTop: '100px',
          marginRight: '0',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
