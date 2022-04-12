import React, { Fragment, useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';

import { MenuLayout, MyMenuItem, MyNotice, MyImg } from './section';
import NoticeIcon from '../myNotice/NoticeIcon';

const ProfileButton = ({ value }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // 알림
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
            {Notice && value === 'notice' && (
              <NoticeIcon NoticeArray={Notice} setNotice={setNotice} />
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

ProfileButton.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ProfileButton;
