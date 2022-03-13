import React, { useCallback, useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import HeadsetIcon from '@mui/icons-material/Headset';
import TokenIcon from '@mui/icons-material/Token';
import { useDispatch, useSelector } from 'react-redux';
import RegisterModal from './RegisterModal';
import MetamaskModal from './MetamaskModal';
import { loginUser, logoutUser } from '../../../_actions/user_actions';
import RegisterButton from '../Button';

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
          console.log(response);
          if (response.request.loginSuccess) {
            window.location.replace('/');
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

  const onClickLogout = useCallback(() => {
    try {
      dispatch(logoutUser()).then(response => {
        console.log(response);
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
            <div style={{ marginLeft: 'auto' }}>
              <RegisterButton value="Logout" func={onClickLogout} />
            </div>
          ) : (
            <>
              <div style={{ marginLeft: 'auto' }}>
                <RegisterButton value="Login" func={onClickLogin} />
              </div>
              <RegisterButton value="Register" func={handleMetaMaskOpen} />
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
