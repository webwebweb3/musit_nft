import React from 'react';
import Link from 'next/link';
import { LibraryMusic, QueueMusic } from '@mui/icons-material';
import { Divider, ListItemIcon, MenuItem } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import LogoutButton from './LogoutButton';
import MyPageButton from './MyPageButton';
import { useSelector } from 'react-redux';

const MyMenuItem = () => {
  const { userData } = useSelector(state => state.user);

  return (
    <div style={{ width: '180px' }}>
      <MyPageButton />
      <Divider />
      <Link href="/studio/[artistName]" as={`/studio/${userData?.name}`}>
        <MenuItem>
          <ListItemIcon>
            <AutoAwesomeIcon fontSize="small" />
          </ListItemIcon>
          Studio
        </MenuItem>
      </Link>
      <Link href="/mypage/mynft">
        <MenuItem>
          <ListItemIcon>
            <LibraryMusic fontSize="small" />
          </ListItemIcon>
          My NFT
        </MenuItem>
      </Link>
      <LogoutButton />
    </div>
  );
};

export default MyMenuItem;
