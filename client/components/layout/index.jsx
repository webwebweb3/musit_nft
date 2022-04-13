import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Web3provider from '$providers/hooks';

const MainLayout = ({ children, value }) => {
  return (
    <Web3provider>
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
