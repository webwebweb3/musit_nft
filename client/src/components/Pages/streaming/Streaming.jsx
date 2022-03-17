import React from 'react';
import MusicCard from './musicCard/MusicCard';

const Streaming = () => {
  // let navigate = useNavigate();
  return (
    <>
      <MusicCard
        musicTitle={'title'}
        albumCover={'https://mui.com/static/images/cards/live-from-space.jpg'}
        artistName={'artist1'}
      />
      <MusicCard
        musicTitle={'title'}
        albumCover={'https://mui.com/static/images/cards/live-from-space.jpg'}
        artistName={'artist3'}
      />
    </>
  );
};

export default Streaming;
