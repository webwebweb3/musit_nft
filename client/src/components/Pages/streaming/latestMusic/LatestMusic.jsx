import { Box, Divider } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { mintMusicTokenContract } from '../../../../contracts';
import { style } from './style';

const LatestMusic = () => {
  const [musics, setMusics] = useState(null);

  const getMusic = async () => {
    try {
      const response = await mintMusicTokenContract.methods
        .getLatestMusicToken()
        .call();
      console.log(response);
      setMusics(musics);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMusic();
    if (!musics) {
    }
  }, []);

  return (
    <Box>
      <Box>
        <Box sx={style.title}>최신 등록 음악</Box>
      </Box>
      <Divider sx={{ background: 'white', margin: '10px 0' }} />
      <Box>
        <Box>asdf</Box>
      </Box>
    </Box>
  );
};

export default LatestMusic;
