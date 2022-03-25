import React, { Fragment, useState } from 'react';
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import { LibraryMusic, QueueMusic } from '@mui/icons-material';
import LogoutButton from './LogoutButton';
import MyPageButton from './MyPageButton';
import { useSelector } from 'react-redux';

const ProfileButton = () => {
  const { userData } = useSelector(state => state.user);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            {userData.img ? (
              <Avatar src={userData.img} alt={'Avatar'} />
            ) : (
              <Avatar
                src={`https://avatars.dicebear.com/api/gridy/${userData.metamask}.svg`}
              />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MyPageButton />
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <LibraryMusic fontSize="small" />
          </ListItemIcon>
          My NFT
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <QueueMusic fontSize="small" />
          </ListItemIcon>
          Listening History
        </MenuItem>
        <LogoutButton />
      </Menu>
    </Fragment>
  );
};

export default ProfileButton;
