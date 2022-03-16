import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MusicCard from './musicCard/MusicCard';

const Streaming = () => {
  let navigate = useNavigate();
  return (
    <>
      <MusicCard
        musicTitle={'title'}
        albumCover={'https://mui.com/static/images/cards/live-from-space.jpg'}
        artistName={'artist2'}
      />
    </>
  );
};

export default Streaming;
