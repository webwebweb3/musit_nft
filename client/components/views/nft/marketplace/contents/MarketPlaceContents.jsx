import { Box } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { style } from './style.js';
import { saleMusicTokenContract } from '../../../../../contracts';
import { useEffect } from 'react';

const MarketPlaceContents = () => {
  const [saleMusicTokens, setSaleMusicTokens] = useState();

  const getOnSaleMusicTokens = async () => {
    try {
      const onSaleMusicTokenArray = await saleMusicTokenContract.methods
        .getOnSaleMusicTokens()
        .call();

      const tempMusicTokenArray = [];
      for (let i = 0; i < onSaleMusicTokenArray.length; i++) {
        const ipfsData = await fetch(
          `https://ipfs.io/ipfs/${onSaleMusicTokenArray[i].musicTokenURI}`,
        );
        const data = await ipfsData.json();
        tempMusicTokenArray.push({
          musicTokenId: onSaleMusicTokenArray[i].musicTokenId,
          musicTokenData: data,
          musicTokenPrice: onSaleMusicTokenArray[i].musicTokenPrice,
        });
      }

      setSaleMusicTokens(tempMusicTokenArray);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!saleMusicTokens) getOnSaleMusicTokens();
    console.log(saleMusicTokens);
  }, [saleMusicTokens]);

  return <Box sx={style.ContentsContainer}>MarketPlaceContents</Box>;
};

export default MarketPlaceContents;
