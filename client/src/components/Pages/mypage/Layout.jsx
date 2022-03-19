import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const MyPage = () => {
  const { userData } = useSelector(state => state.user);
  let navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate('/');
    }
  }, [navigate, userData]);

  return (
    <div style={{ minWidth: '1300px' }}>
      <Box
        sx={{
          display: 'inline-block',
          verticalAlign: 'top',
        }}
      >
        <Sidebar />
      </Box>
      <Box
        sx={{
          display: 'inline-block',
          width: '1px',
          height: '650px',
          backgroundColor: 'gray',
        }}
      />
      <Box
        sx={{
          display: 'inline-block',
          marginLeft: '70px',
          verticalAlign: 'top',
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
};

export default MyPage;
