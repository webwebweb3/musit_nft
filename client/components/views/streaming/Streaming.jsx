import { Box } from '@mui/material';
import React from 'react';
import { style } from './style';
//import StreamingSideBar from './streamingSideBar/SteamingSideBar';
import LatestMusic from './latestMusic/LatestMusic';
import { useSelector } from 'react-redux';

// import { useState } from 'react';
import FavMusic from './latestMusic/FavMusic';

const Streaming = () => {
  const { userData } = useSelector(state => state.user);

  return (
    <>
      <Box sx={style.streamingContainer}>
        <Box sx={style.streamingWrapper}>
          <LatestMusic userData={userData} />
        </Box>
        <Box sx={style.streamingWrapper}>
          <FavMusic userData={userData} />
        </Box>
        <Box sx={{ flexDirection: '' }}></Box>
      </Box>
    </>
  );
};

export default Streaming;
