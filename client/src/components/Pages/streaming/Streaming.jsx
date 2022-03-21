// import React from 'react';
// import MusicCard from './musicCard/MusicCard';

// const Streaming = () => {
//   // let navigate = useNavigate();
//   return (
//     <>
//       <MusicCard
//         musicTitle={'title'}
//         albumCover={'https://mui.com/static/images/cards/live-from-space.jpg'}
//         artistName={'artist1'}
//       />
//       <MusicCard
//         musicTitle={'title'}
//         albumCover={'https://mui.com/static/images/cards/live-from-space.jpg'}
//         artistName={'artist3'}
//       />
//     </>
//   );
// };

// export default Streaming;

import { Box } from '@mui/material';
import React, { useState } from 'react';
import { style } from './style';
import StreamingSideBar from './streamingSideBar/SteamingSideBar';
import LatestMusic from './latestMusic/LatestMusic';

const Streaming = () => {
  return (
    <Box sx={style.streamingContainer}>
      <Box sx={style.streamingSideBarContainer}>
        <StreamingSideBar />
      </Box>
      <Box sx={style.streamingWrapper}>
        <LatestMusic />
      </Box>
      <Box sx={{ flexDirection: '' }}></Box>
    </Box>
  );
};

export default Streaming;
