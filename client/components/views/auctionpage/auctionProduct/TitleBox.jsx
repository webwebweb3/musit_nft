import React from 'react';
import { Box } from '@mui/material';

const TitleBox = () => {
  return (
    <>
      <Box
        sx={{
          display: 'inline-block',
          width: '100%',
          fontSize: '40px',
          fontWeight: 'bold',
        }}
      >
        Title
      </Box>
    </>
  );
};

export default TitleBox;
