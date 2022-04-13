import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, CircularProgress, Tabs } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

import ProfileButton from './myMenu';
import { useWalletInfo } from 'hooks/web3';
import { useWeb3 } from '$providers/hooks/index';
import { NavbarLink, RegisterModal, MetamaskButton } from './contents';
import {
  loginRequestAction,
  logoutRequestAction,
} from '$reduxsaga/request/user_request';

const Navbar = ({ value }) => {
  const { userData } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { network, account } = useWalletInfo();
  const { connect, isLoading, requireInstall } = useWeb3();

  const handleMetaMaskOpen = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {}, [requireInstall, account.data]);

  useEffect(() => {
    if (userData) {
      console.log(userData.metamask !== account.data);
      if (userData.metamask !== account.data) {
        let confirmAction = window.confirm('계정을 전환하시겠습니까?');
        if (confirmAction) {
          dispatch(loginRequestAction(account.data));
        } else {
          dispatch(logoutRequestAction());
        }
      }
    }
    console.log(userData);
    console.log(account);
  }, [account.data]);

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
            <span style={{ marginRight: '30px' }}>
              <Image
                width="80px"
                height="80px"
                src="/logoW.png"
                alt="logo"
                layout="fixed"
              />
            </span>
          </Link>

          <Tabs textColor="inherit" value={false}>
            <NavbarLink value={value} />
          </Tabs>

          {network.hasInitialResponse && !network.isSupported && (
            <div style={{ marginLeft: 'auto', color: 'yellow' }}>
              <div>
                <span style={{ paddingRight: '10px' }}>
                  <ErrorOutline />
                </span>
                {network.target} 로 전환해주세요!
              </div>
            </div>
          )}

          {isLoading ? (
            <div style={{ marginLeft: 'auto' }}>
              <CircularProgress />
            </div>
          ) : requireInstall ? (
            <div style={{ marginLeft: 'auto' }}>
              <Button
                style={{ color: 'yellow' }}
                onClick={() =>
                  window.open('https://metamask.io/download.html', '_blank')
                }
              >
                <div>
                  <span style={{ paddingRight: '10px' }}>
                    <ErrorOutline />
                  </span>
                  메타마스크를 설치해주세요!
                </div>
              </Button>
            </div>
          ) : userData ? (
            <>
              <div style={{ marginLeft: 'auto' }}>
                <ProfileButton value="notice" />
              </div>
              <div style={{ paddingRight: '20px' }}>
                <ProfileButton value="mypage" />
              </div>
            </>
          ) : account.hasInitialResponse ? (
            <>
              <MetamaskButton metaopenfunc={handleMetaMaskOpen} />
            </>
          ) : (
            <div style={{ marginLeft: 'auto', color: 'yellow' }}>
              <div>
                <span style={{ paddingRight: '10px' }}>
                  <ErrorOutline />
                </span>
                메타마스크 로그인 해주세요!
              </div>
            </div>
          )}
        </Toolbar>
        <RegisterModal setOpen={setOpen} open={open} />
      </AppBar>
    </>
  );
};

Navbar.prototype = {
  value: PropTypes.string.isRequired,
};

export default Navbar;
