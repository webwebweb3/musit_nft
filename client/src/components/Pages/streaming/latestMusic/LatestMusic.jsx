import { Box, Divider } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { style } from './style';

const LatestMusic = () => {
  const [musics, setMusics] = useState(null);

  useEffect(() => {
    if (!musics) {
      axios.get();
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
