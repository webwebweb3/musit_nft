import React, { useCallback } from 'react';
import { ListItemIcon, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { Logout } from '@mui/icons-material';
import { logoutRequestAction } from '../../../../_actions/user_actions';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onClickLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, [dispatch]);

  return (
    <MenuItem onClick={onClickLogout}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      <Box component="span">Logout</Box>
    </MenuItem>
  );
};

export default LogoutButton;
