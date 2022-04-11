import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { Gavel, Storefront, Token, Headset } from '@mui/icons-material';

import { metaMaskRequestAction } from '$reduxsaga/request/metamask_request';
import RegisterModal from './Register/RegisterModal';
import ProfileButton from './myMenu';
import MetamaskButton from './Register/button/metamaskButton';

const Navbar = ({ value }) => {
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
    }
  }, [metamask]);

  // 메타 마스크 회원가입 모달창
  const handleMetaMaskOpen = useCallback(() => {
    try {
      dispatch(metaMaskRequestAction({ text: 'register' }));
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
            {value === 'nft' ? (
              <Link href="/streaming">
                <Tab
                  icon={<Headset />}
                  iconPosition="start"
                  label=""
                  sx={{ fontSize: '0', marginRight: '-20px' }}
                />
              </Link>
            ) : (
              <Link href="/streaming">
                <Tab
                  icon={<Headset />}
                  iconPosition="start"
                  label="STREAMING"
                  sx={{ fontSize: '18px', marginRight: '10px' }}
                />
              </Link>
            )}
            <Link href="/nft">
              <Tab
                icon={<Token />}
                iconPosition="start"
                label="NFT"
                sx={{ fontSize: '18px' }}
              />
            </Link>
            {value === 'nft' && (
              <>
                <Link href="/nft/marketplace">
                  <Tab
                    icon={<Storefront />}
                    iconPosition="start"
                    label="MarketPlace"
                    sx={{ fontSize: '18px' }}
                  />
                </Link>
                <Link href="/auction">
                  <Tab
                    icon={<Gavel />}
                    iconPosition="start"
                    label="Auction"
                    sx={{ fontSize: '18px' }}
                  />
                </Link>
              </>
            )}
          </Tabs>
          {userData ? (
            <>
              <div style={{ marginLeft: 'auto' }}>
                <ProfileButton value="notice" />
              </div>
              <div style={{ paddingRight: '20px' }}>
                <ProfileButton value="mypage" />
              </div>
            </>
          ) : (
            <MetamaskButton
              metamaskLogin={metamaskLogin}
              setMetamaskLogin={setMetamaskLogin}
              setOpen={setOpen}
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

Navbar.prototype = {
  value: PropTypes.string.isRequired,
};

export default Navbar;
