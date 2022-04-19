import { Box } from '@mui/material';
import React from 'react';
import { style } from './style';
//import StreamingSideBar from './streamingSideBar/SteamingSideBar';
import LatestMusic from './latestMusic/LatestMusic';
import { useSelector } from 'react-redux';
import Player from '../../Player';
import { useState } from 'react';
import FavMusic from './latestMusic/FavMusic';

const Streaming = () => {
  const { userData } = useSelector(state => state.user);
  const [visible, setVisible] = useState('none');

  return (
    <>
      <Box sx={style.streamingContainer}>
        <Box sx={style.streamingWrapper}>
          <LatestMusic userData={userData} func={setVisible} />
        </Box>
        <Box sx={style.streamingWrapper}>
          <FavMusic userData={userData} func={setVisible} />
        </Box>
        <Box sx={{ flexDirection: '' }}></Box>
      </Box>

      <Player userData={userData} isVisible={visible} />
    </>
  );
};

export default Streaming;
