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
  Paper,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import HeadsetIcon from '@mui/icons-material/Headset';
import TokenIcon from '@mui/icons-material/Token';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../_actions/user_actions';

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
  const dispatch = useDispatch();
  const [genre, setGenre] = useState('');
  const [nationality, setNationality] = useState('');
  const [account, setAccount] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // 메타 마스크 회원가입
  const handleMetaMaskOpen = () => {
    if (account) {
      handleRegisterOpen();
      return;
    }
    getAccount();
    setLoading(true);
  };

  // 나머지 정보 회원가입
  const handleRegisterOpen = () => {
    setLoading(false);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const handleLoadingClose = () => setLoading(false);

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

  const onSubmitForm = e => {
    e.preventDefault();
    let dataToSubmit = {
      metamask: account,
      genre,
      nationality,
    };

    dispatch(registerUser(dataToSubmit)).then(response => {
      if (response.payload.success) {
        window.location.replace('/');
      } else {
        alert(response.payload.err);
      }
    });
    setGenre('');
    setNationality('');
  };

  const onChangeGenre = e => {
    setGenre(e.target.value);
  };

  const onChangeNationality = e => {
    setNationality(e.target.value);
  };

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
          <img width="70px" height="70px" src="/images/logo.png" alt="logo" />
          <Tabs textColor="inherit" value={false}>
            <Tab
              icon={<HeadsetIcon />}
              iconPosition="start"
              label="STREAMING"
            />
            <Tab icon={<TokenIcon />} iconPosition="start" label="NFT" />
          </Tabs>
          {nationality === '' ? (
            <>
              <Button
                sx={{ marginLeft: 'auto' }}
                variant="contained"
                onClick={getAccount}
              >
                Login
              </Button>
              <Button variant="contained" onClick={handleMetaMaskOpen}>
                Register
              </Button>
            </>
          ) : (
            <Button sx={{ marginLeft: 'auto' }} variant="contained">
              로그인 완료
            </Button>
          )}

          <Modal
            open={loading}
            onClose={handleLoadingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Paper sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                메타마스크 로그인 해주세요.
              </Typography>
            </Paper>
          </Modal>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Paper sx={style}>
              <form onSubmit={onSubmitForm}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  장르
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="장르"
                  variant="outlined"
                  value={genre}
                  onChange={onChangeGenre}
                />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  국가
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="국가"
                  variant="outlined"
                  value={nationality}
                  onChange={onChangeNationality}
                />
                <Button type="submit" variant="text" color="secondary">
                  가입하기
                </Button>
              </form>
            </Paper>
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
