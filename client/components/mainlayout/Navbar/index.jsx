import React, { useCallback, useEffect, useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import HeadsetIcon from '@mui/icons-material/Headset';
import TokenIcon from '@mui/icons-material/Token';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import RegisterModal from './Register/RegisterModal';
import ProfileButton from './myMenu';
import { metaMaskRequestAction } from '../../../_request/metamask_request';
import MetamaskButton from './Register/button/metamaskButton';

const Navbar = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);
  const metamask = useSelector(state => state.metamask);
  const [open, setOpen] = useState(false);
  const [metamaskLogin, setMetamaskLogin] = useState(false);

  useEffect(() => {
    // 메타마스크 로그인 상태
    if (metamask.metamaskLoading && metamask.metamaskData == null) {
      setMetamaskLogin(true);
    }

    // 메타마스크 비로그인 상태
    if (metamask.metamaskData !== null && metamask.metamaskDone) {
      setMetamaskLogin(false);
      setOpen(true);
    }
  }, [metamask]);

  // 메타 마스크 회원가입 모달창
  const handleMetaMaskOpen = useCallback(() => {
    try {
      dispatch(metaMaskRequestAction());
      return;
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  return (
    <>
      <AppBar
        sx={{
          padding: '10px 20px ',
          background: 'transparent',
          height: '100px',
        }}
        elevation={0}
      >
        <Toolbar sx={{ paddingRight: '20px' }}>
          <Link href="/">
            <img
              width="80px"
              height="80px"
              src="/logoW.png"
              alt="logo"
              style={{ cursor: 'pointer', marginRight: '30px' }}
            />
          </Link>

          <Tabs textColor="inherit" value={false}>
            <Link href="/streaming">
              <Tab
                icon={<HeadsetIcon />}
                iconPosition="start"
                label="STREAMING"
                sx={{ fontSize: '18px', marginRight: '10px' }}
              />
            </Link>
            <Link href="/nft">
              <Tab
                icon={<TokenIcon />}
                iconPosition="start"
                label="NFT"
                sx={{ fontSize: '18px' }}
              />
            </Link>
          </Tabs>
          {userData ? (
            <div style={{ marginLeft: 'auto', paddingRight: '20px' }}>
              <ProfileButton />
            </div>
          ) : (
            <MetamaskButton
              metamaskLogin={metamaskLogin}
              setMetamaskLogin={setMetamaskLogin}
              metaopenfunc={handleMetaMaskOpen}
            />
          )}
        </Toolbar>
        <RegisterModal
          id={metamask.metamaskData}
          setOpen={setOpen}
          open={open}
        />
      </AppBar>
    </>
  );
};

export default Navbar;
