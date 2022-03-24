import React, { useCallback, useEffect, useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { Headset, Search } from '@mui/icons-material';

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import RegisterModal from './Register/RegisterModal';
import ProfileButton from './myMenu';
import { metaMaskRequestAction } from '../../../_actions/metamask_actions';
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
      <AppBar sx={{ background: 'transparent' }} elevation={0}>
        <Toolbar>
          <Link href="/">
            <img
              width="65px"
              height="65px"
              src="/logoW.png"
              alt="logo"
              style={{ cursor: 'pointer' }}
            />
          </Link>

          <Tabs textColor="inherit" value={false}>
            <Link href="/streaming">
              <Tab icon={<Headset />} iconPosition="start" label="Home" />
            </Link>
            <Link href="/streaming/search">
              <Tab icon={<Search />} iconPosition="start" label="Search" />
            </Link>
          </Tabs>
          {userData ? (
            <div style={{ marginLeft: 'auto' }}>
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
