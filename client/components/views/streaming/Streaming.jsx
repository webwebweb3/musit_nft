import { Box } from '@mui/material';
import React, { useState } from 'react';
import { style } from './style';
import StreamingSideBar from './streamingSideBar/SteamingSideBar';
import LatestMusic from './latestMusic/LatestMusic';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
// const LatestMusic = dynamic(() => import('./latestMusic/LatestMusic'), {
//   ssr: false,
// });

const Streaming = () => {
  const { userData } = useSelector(state => state.user);
  return (
    <Box sx={style.streamingContainer}>
      <Box sx={style.streamingSideBarContainer}>
        <StreamingSideBar />
      </Box>
      <Box sx={style.streamingWrapper}>
        <LatestMusic userData={userData} />
      </Box>
      <Box sx={{ flexDirection: '' }}></Box>
    </Box>
  );
};

export default Streaming;
