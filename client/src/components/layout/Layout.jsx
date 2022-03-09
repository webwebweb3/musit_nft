import { Button } from '@mui/material';
import { AppBar, Box, Divider, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [account, setAccount] = useState('');

  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        window.localStorage.setItem('address', accounts[0]);
        setAccount(accounts[0]);
      } else {
        alert('Install Metamask!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (account === '') return;
    const addr = window.localStorage.getItem('address');
    if (addr !== null) {
      setAccount(addr);
    }
  }, [account]);

  return (
    <Box sx={{ display: 'inline-block', width: '100%' }}>
      {/* header */}
      <AppBar enableColorOnDark display="block" color="inherit" elevation={0}>
        <Toolbar style={{ padding: 0, marginTop: '-5px' }}>
          <Box style={{ marginTop: '10px' }}>
            {account === '' ? (
              <Button onClick={getAccount}>LOGIN</Button>
            ) : (
              <Button>로그인완료</Button>
            )}
          </Box>
        </Toolbar>
        <Divider sx={{ mt: 0.25, mb: 0.25, marginTop: '-7px' }} />
      </AppBar>

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
