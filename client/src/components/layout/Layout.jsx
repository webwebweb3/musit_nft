import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Divider,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Modal,
  Typography,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import HeadsetIcon from '@mui/icons-material/Headset';
import TokenIcon from '@mui/icons-material/Token';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Layout = () => {
  const [account, setAccount] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        // enableColorOnDark
        // display="block"
        // color="inherit"
        // elevation={0}
        sx={{ background: '#000' }}
      >
        <Toolbar>
          <img src="/images/logo.png" alt="logo" height="50px" />
          <Tabs textColor="inherit">
            <Tab
              icon={<HeadsetIcon />}
              iconPosition="start"
              label="STREAMING"
            />
            <Tab icon={<TokenIcon />} iconPosition="start" label="NFT" />
          </Tabs>
          <Button sx={{ marginLeft: 'auto' }} variant="contained">
            Login
          </Button>
          <Button variant="contained" onClick={handleOpen}>
            Register
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                장르
              </Typography>
              <TextField id="outlined-basic" label="장르" variant="outlined" />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                국가
              </Typography>
              <TextField id="outlined-basic" label="국가" variant="outlined" />
            </Box>
          </Modal>
          <Divider sx={{ mt: 0.25, mb: 0.25, marginTop: '-7px' }} />
        </Toolbar>
      </AppBar>

      {/* main content */}
      <Box
        style={{
          marginLeft: '20px',
          marginTop: '100px',
        }}
      >
        <Outlet account={account} />
      </Box>
    </Box>
  );
};

export default Layout;
