import React, { useCallback, useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import HeadsetIcon from '@mui/icons-material/Headset';
import TokenIcon from '@mui/icons-material/Token';
import { useDispatch, useSelector } from 'react-redux';
import RegisterModal from './Register/RegisterModal';
import MetamaskModal from './Register/MetamaskModal';
import { loginUser, logoutUser } from '../../../_actions/user_actions';
import NavButton from './Register/button/NavButton';

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
      if (metamask.userMetamask) {
        dispatch(loginUser(metamask.userMetamask)).then(response => {
          if (response.request.loginSuccess) {
            window.location.replace('/');
          } else {
            alert(response.request.info.message);
          }
        });
      } else {
        alert('Install Metamask!');
      }
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, metamask]);

  const onClickLogout = useCallback(() => {
    try {
      dispatch(logoutUser()).then(response => {
        if (!response.request.loginSuccess) {
          window.location.replace('/');
        } else {
          alert(response.request.err);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  return (
    <>
      <AppBar sx={{ background: '#000' }}>
        <Toolbar>
          <img width="65px" height="65px" src="/images/logoW.png" alt="logo" />
          <Tabs textColor="inherit" value={false}>
            <Tab
              icon={<HeadsetIcon />}
              iconPosition="start"
              label="STREAMING"
            />
            <Tab icon={<TokenIcon />} iconPosition="start" label="NFT" />
          </Tabs>
          {user.isLoggedIn ? (
            <div style={{ marginLeft: 'auto' }}>
              <NavButton value="Logout" func={onClickLogout} />
            </div>
          ) : (
            <>
              <div style={{ marginLeft: 'auto' }}>
                <NavButton value="Login" func={onClickLogin} />
              </div>
              <NavButton value="Register" func={handleMetaMaskOpen} />
            </>
          )}
        </Toolbar>
        <MetamaskModal loading={loading} setLoading={setLoading} />
        <RegisterModal setOpen={setOpen} open={open} />
      </AppBar>
    </>
  );
};

export default Navbar;
