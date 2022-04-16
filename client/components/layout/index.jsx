import React from 'react';
import { Box } from '@mui/material';
import Navbar from '$components/layout/Navbar';
import Web3provider from '$providers/hooks';

const MainLayout = ({ children }) => {
  return (
    <Web3provider>
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
            marginLeft: '0px',
            marginTop: '100px',
            marginRight: '0px',
          }}
        >
          {children}
        </Box>
      </Box>
    </Web3provider>
  );
};

export default MainLayout;
