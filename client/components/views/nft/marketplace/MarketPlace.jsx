import { Box } from '@mui/material';
import React from 'react';
import MarketPlaceContents from './contents/MarketPlaceContents';
import LeftSideBar from './leftSideBar/LeftSideBar';
import { style } from './style';

const MarketPlace = () => {
  return (
    <>
      <Box sx={style.marketplaceHeader}>
        <h1 style={{ margin: '0 0 0 40px' }}>MarketPlace</h1>
      </Box>
      <Box sx={style.marketplaceContainer}>
        <Box sx={style.marketplaceLeftSideBar}>
          <LeftSideBar />
        </Box>
        <Box sx={style.marketplaceWrapper}>
          <MarketPlaceContents />
        </Box>
      </Box>
    </>
  );
};

export default MarketPlace;
