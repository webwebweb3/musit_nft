import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const MyFavorite = () => {
  const { userData } = useSelector(state => state.user);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    setUserInfo(userData.user);
  }, [userData]);

  return (
    <>
      <h1 style={{ color: '#fff', marginLeft: '20px' }}>나의 재생 목록</h1>
      <Box style={{ margin: '40px 0' }} component="div" disablePadding>
        {userInfo &&
          userInfo.map(music => (
            <div
              style={{
                display: 'flex',
                marginLeft: '30px',
                marginBottom: '10px',
                color: '#fff',
              }}
            >
              <Image
                width="50px"
                height="50px"
                src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${music.albumCover}`}
                alt="logo"
                layout="fixed"
              />
              <span style={{ margin: 'auto 20px' }}>{music.title}</span>
            </div>
          ))}
      </Box>
    </>
  );
};

export default MyFavorite;
