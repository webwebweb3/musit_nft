import { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Divider,
  Toolbar,
  Tabs,
  Tab,
  Button,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import HeadsetIcon from '@mui/icons-material/Headset';
import TokenIcon from '@mui/icons-material/Token';

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
    <Box
      sx={{
        display: 'inline-block',
        width: '100%',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      {/* header */}
      <AppBar
        enableColorOnDark
        display="block"
        color="inherit"
        elevation={0}
        sx={{ background: '#06390' }}
        // enableColorOnDark
        // display="block"
        // color="inherit"
        // elevation={0}
      >
        <Toolbar style={{ padding: 0, marginTop: '-5px' }}>
          <Box style={{ marginTop: '20px' }}>
            {account === '' ? (
              <>
                <Tabs textColor="inherit">
                  <Tab
                    sx={{ marginLeft: '1400px' }}
                    icon={<HeadsetIcon />}
                    iconPosition="start"
                    label="STREAMING"
                  />
                  <Tab icon={<TokenIcon />} iconPosition="start" label="NFT" />
                </Tabs>
                <Button sx={{ marginLeft: 'auto' }} onClick={getAccount}>
                  {' '}
                  variant="contained">Login
                </Button>
                <Button variant="contained">Register</Button>
              </>
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
