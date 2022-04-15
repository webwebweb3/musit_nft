import React from 'react';
import { Box } from '@mui/material';

const TitleBox = ({ text }) => {
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
        {text}
      </Box>
    </>
  );
};

export default TitleBox;
