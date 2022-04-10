import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Avatar, MenuItem } from '@mui/material';

const MyPageButton = () => {
  const { userData } = useSelector(state => state.user);
  const userImg = userData.img;

  return (
    <Link href="/mypage">
      <MenuItem>
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
    </Link>
  );
};

export default MyPageButton;
