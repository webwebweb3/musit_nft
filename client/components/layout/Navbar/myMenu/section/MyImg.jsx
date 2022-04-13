import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

const MyImg = () => {
  const { userData } = useSelector(state => state.user);

  return (
    <>
      {userData.img ? (
        <Avatar src={userData.img} alt={'Avatar'} />
      ) : (
        <Avatar
          src={`https://avatars.dicebear.com/api/gridy/${userData.metamask}.svg`}
        />
      )}
    </>
  );
};

export default MyImg;
