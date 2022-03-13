import React, { useCallback, useEffect, useState } from 'react';
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
  const metamask = useSelector(state => state.metamask);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // 메타 마스크 회원가입 모달창
  const handleMetaMaskOpen = useCallback(() => {
    if (metamask.userMetamask) {
      setLoading(false);
      setOpen(true);
      return;
    }
    setLoading(true);
  }, [metamask]);

  const onClickLogin = useCallback(() => {
    try {
      console.log(metamask.userMetamask);
      if (metamask.userMetamask) {
        dispatch(loginUser(metamask.userMetamask)).then(response => {
          console.log(response);
          if (response.request.loginSuccess) {
            // window.location.replace('/');
          } else {
            alert(response.request.err);
          }
        });
      } else {
        alert('Install Metamask!');
      }
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, metamask]);

  useEffect(() => {
    dispatch(metaMaskUser()).then(response => {
      console.log(response);
    });
  }, [dispatch, user]);

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
          {user.isLoggedIn ? (
            <Button sx={{ marginLeft: 'auto' }} variant="contained">
              로그인 완료
            </Button>
          ) : (
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
          )}

          <Divider sx={{ mt: 0.25, mb: 0.25, marginTop: '-7px' }} />
        </Toolbar>
        <MetamaskModal loading={loading} setLoading={setLoading} />
        <RegisterModal setOpen={setOpen} open={open} />
      </AppBar>
    </>
  );
};

export default Navbar;
