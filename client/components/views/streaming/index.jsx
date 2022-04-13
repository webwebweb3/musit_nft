import { Box } from '@mui/material';
import React from 'react';
import { style } from './style';
import StreamingSideBar from './streamingSideBar/SteamingSideBar';
import LatestMusic from './latestMusic/LatestMusic';
import { useSelector } from 'react-redux';
import Player from '../../Player';
import { Global } from './Streaming';
import { useState } from 'react';

const Streaming = () => {
  const { userData } = useSelector(state => state.user);
  const [visible, setVisible] = useState('none');

  return (
    <>
      <Global />
      <div className="sContainer">
        <Box sx={style.streamingContainer}>
          <Box sx={style.streamingSideBarContainer}>
            <StreamingSideBar />
          </Box>
          <Box sx={style.streamingWrapper}>
            <LatestMusic userData={userData} func={setVisible} />
          </Box>
          <Box sx={{ flexDirection: '' }}></Box>
        </Box>
        <Player isVisible={visible} />
      </div>
    </>
  );
};

export default Streaming;