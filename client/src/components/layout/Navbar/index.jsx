import React from 'react';
import { useEffect, useState } from 'react';
import { AppBar, Divider, Toolbar, Tabs, Tab, Button } from '@mui/material';
import HeadsetIcon from '@mui/icons-material/Headset';
import TokenIcon from '@mui/icons-material/Token';
import { useDispatch, useSelector } from 'react-redux';
import RegisterModal from './RegisterModal';
import MetamaskModal from './MetamaskModal';
import { metaMaskUser } from '../../../_actions/metamask_actions';
import { loginUser } from '../../../_actions/user_actions';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [nationality, setNationality] = useState('');
  const [account, setAccount] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginAccount, setLoginAccount] = useState('');

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

  const getAccount = async () => {
    try {
      if (window.ethereum) {
        dispatch(metaMaskUser()).then(response => {
          setAccount(response.payload);
        });
      } else {
        alert('Install Metamask!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClickLogin = async () => {
    try {
      if (window.ethereum) {
        // dispatch(metaMaskUser()).then(response => {
        getAccount();
        dispatch(loginUser(account)).then(response => {
          console.log(response);
          if (response.payload.loginSuccess) {
            // window.location.replace('/');
          } else {
            alert(response.payload.err);
          }
        });
        // });
      } else {
        alert('Install Metamask!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoginAccount(user);
    console.log(user);
  }, [user]);

  return (
    <>
      <AppBar sx={{ background: '#000' }}>
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
          {Object.keys(loginAccount).length === 0 ? (
            <>
              <Button
                sx={{ marginLeft: 'auto' }}
                variant="contained"
                onClick={onClickLogin}
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

          <Divider sx={{ mt: 0.25, mb: 0.25, marginTop: '-7px' }} />
        </Toolbar>
        <MetamaskModal loading={loading} setLoading={setLoading} />
        <RegisterModal
          account={account}
          setOpen={setOpen}
          open={open}
          setNationality={setNationality}
          nationality={nationality}
        />
      </AppBar>
    </>
  );
};

export default Navbar;
