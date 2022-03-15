import React, { useCallback } from 'react';
import { ListItemIcon, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { Logout } from '@mui/icons-material';
import { logoutUser } from '../../../../../_actions/user_actions';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onClickLogout = useCallback(() => {
    try {
      dispatch(logoutUser()).then(response => {
        if (!response.request.loginSuccess) {
          window.location.replace('/');
        } else {
          alert(response.request.err);
        }
      });
    } catch (error) {
      console.error(error);
    }
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
