import React, { useCallback, useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import HeadsetIcon from '@mui/icons-material/Headset';
import TokenIcon from '@mui/icons-material/Token';
import { useDispatch, useSelector } from 'react-redux';
import RegisterModal from './Register/RegisterModal';
import { loginRequestAction } from '../../../_actions/user_actions';
import NavButton from './Register/button/NavButton';
import ProfileButton from './myMenu';
import { metaMaskUser } from '../../../_actions/metamask_actions';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.login);
  const [open, setOpen] = useState(false);

  let navigate = useNavigate();

  // 메타 마스크 회원가입 모달창
  const handleMetaMaskOpen = useCallback(() => {
    try {
      dispatch(metaMaskUser()).then(response => {
        if (response.userMetamask) {
          setOpen(true);
          return;
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  const onClickLogin = useCallback(() => {
    try {
      dispatch(metaMaskUser()).then(response => {
        if (response.userMetamask) {
          dispatch(loginRequestAction(response.userMetamask));
        } else {
          alert('Install Metamask!');
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  return (
    <>
      <AppBar sx={{ background: 'linear-gradient(90deg, #000, #000)' }}>
        <Toolbar>
          <img
            width="65px"
            height="65px"
            src="/images/logoW.png"
            alt="logo"
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />
          <Tabs textColor="inherit" value={false}>
            <Tab
              icon={<HeadsetIcon />}
              iconPosition="start"
              label="STREAMING"
              onClick={() => navigate('/streaming')}
            />
            <Tab icon={<TokenIcon />} iconPosition="start" label="NFT" />
          </Tabs>
          {userData ? (
            <div style={{ marginLeft: 'auto' }}>
              <ProfileButton />
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
        <RegisterModal setOpen={setOpen} open={open} />
      </AppBar>
    </>
  );
};

export default Navbar;
