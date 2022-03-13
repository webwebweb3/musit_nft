import { Box } from '@mui/material';
import React from 'react';
import Sidebar from '../layout/Sidebar';

const MyPage = () => {
  return (
    <Box
      sx={{
        marginTop: '200px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Sidebar />
      <Box></Box>
    </Box>
  );
};

export default MyPage;
