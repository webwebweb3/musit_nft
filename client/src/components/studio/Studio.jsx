import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { mintMusicTokenContract } from '../../contracts';

const Studio = () => {
  const account = '0x79B9950946fe1099f65A55ff29643eAB52c7003B';

  const onClickMint = async () => {
    try {
      if (!account) {
        window.alert('Please connect account');
        return;
      }
      const response = await mintMusicTokenContract.methods
        .mintMusicToken('abc')
        .send({ from: account });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box
      sx={{
        marginTop: '200px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box>mint test</Box>
      <Button onClick={onClickMint}>Mint</Button>
    </Box>
  );
};

export default Studio;
