import React from 'react';
import Link from 'next/link';
import { LibraryMusic, QueueMusic } from '@mui/icons-material';
import { Divider, ListItemIcon, MenuItem } from '@mui/material';

import LogoutButton from './LogoutButton';
import MyPageButton from './MyPageButton';

const MyMenuItem = () => {
  return (
    <>
      <MyPageButton />
      <Divider />
      <Link href="/mypage/mynft">
        <MenuItem>
          <ListItemIcon>
            <LibraryMusic fontSize="small" />
          </ListItemIcon>
          My NFT
        </MenuItem>
      </Link>
      <MenuItem>
        <ListItemIcon>
          <QueueMusic fontSize="small" />
        </ListItemIcon>
        Listening History
      </MenuItem>
      <LogoutButton />
    </>
  );
};

export default MyMenuItem;
