import { Box } from '@mui/material';
import React from 'react';
import MarketPlaceContents from './contents/MarketPlaceContents';
import LeftSideBar from './leftSideBar/LeftSideBar';
import { style } from './style';

const MarketPlace = () => {
  return (
    <Box sx={style.marketplaceContainer}>
      <Box sx={style.marketplaceLeftSideBar}>
        <LeftSideBar />
      </Box>
      <Box sx={style.marketplaceWrapper}>
        <MarketPlaceContents />
      </Box>
    </Box>
  );
};

export default MarketPlace;
