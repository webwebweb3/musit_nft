import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ListItemIcon, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { Logout } from '@mui/icons-material';

import { logoutRequestAction } from '../../../../_reduxsaga/request/user_request';

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
