import { Avatar, MenuItem } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MyPageButton = () => {
  const { userData } = useSelector(state => state.user);
  let navigate = useNavigate();
  const userImg = userData.img;

  return (
    <MenuItem onClick={() => navigate('/mypage')}>
      {userImg ? (
        <>
          <Avatar src={userData.img} alt={'Avatar'} />
          {userData.name ? <>{userData.name}</> : <>USER</>}
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
