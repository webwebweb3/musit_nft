import { Box } from '@mui/material';
import React from 'react';
import { style } from './style';

const LeftSideBar = () => {
  return (
    <Box sx={style.marketplaceLeftSideBarContainer}>
      <Box>검색</Box>
      <Box>카테고리</Box>
    </Box>
  );
};

export default LeftSideBar;
