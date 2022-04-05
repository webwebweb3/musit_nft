import React, { Fragment, useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';

import MyMenuItem from './MyMenuItem';
import MyImg from './MyImg';
import NoticeIcon from '../myNotice/NoticeIcon';
import MenuLayout from './MenuLayout';
import MyNotice from './MyNotice';

const ProfileButton = ({ value }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [Notice, setNotice] = useState([]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title={value}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {value === 'mypage' && <MyImg />}
            {value === 'notice' && (
              <NoticeIcon Notice={Notice} setNotice={setNotice} />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      {value === 'mypage' && (
        <MenuLayout anchorEl={anchorEl} open={open} setAnchorEl={setAnchorEl}>
          <MyMenuItem />
        </MenuLayout>
      )}
      {value === 'notice' && Notice.length !== 0 && (
        <MenuLayout anchorEl={anchorEl} open={open} setAnchorEl={setAnchorEl}>
          <MyNotice Notice={Notice} />
        </MenuLayout>
      )}
    </Fragment>
  );
};

export default ProfileButton;
