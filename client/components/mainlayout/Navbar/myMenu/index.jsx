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

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {value === 'img' && <MyImg />}
            {value === 'notice' && <NoticeIcon />}
          </IconButton>
        </Tooltip>
      </Box>
      <MenuLayout anchorEl={anchorEl} open={open} setAnchorEl={setAnchorEl}>
        {value === 'img' && <MyMenuItem />}
        {value === 'notice' && <MyNotice />}
      </MenuLayout>
    </Fragment>
  );
};

export default ProfileButton;
