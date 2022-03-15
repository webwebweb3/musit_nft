import { Box, Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const MyPage = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Sidebar />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box
            sx={{
              marginLeft: '100px',
            }}
          >
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MyPage;
