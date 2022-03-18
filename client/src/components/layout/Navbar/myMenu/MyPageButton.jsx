import { Avatar, MenuItem } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const MyPageButton = () => {
  const { userData } = useSelector(state => state.login);
  const userImg = userData.img;

  return (
    <MenuItem>
      {userImg ? (
        <>
          <Avatar />
        </>
      ) : (
        <>
          <Avatar
            src={`https://avatars.dicebear.com/api/gridy/${userData.metamask}.svg`}
          />
          {userData.name}
        </>
      )}
    </MenuItem>
  );
};

export default MyPageButton;
