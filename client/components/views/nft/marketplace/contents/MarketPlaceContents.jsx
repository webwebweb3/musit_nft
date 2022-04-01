import { Box, Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { style } from './style.js';
import { saleMusicTokenContract } from '../../../../../contracts';
import { useEffect } from 'react';
import MarketPlaceNFTCard from '../../../cards/MarketPlaceNFTCard.jsx';
import { useSelector } from 'react-redux';
import Router from 'next/router';

const MarketPlaceContents = () => {
  const [saleMusicTokens, setSaleMusicTokens] = useState([]);
  const { userData } = useSelector(state => state.user);
  if (userData === null) {
    alert('로그인 해주세요');
    Router.push('/');
  }
  const account = userData.metamask;

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

  return (
    <Box sx={style.ContentsContainer}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 3, sm: 8, md: 12 }}
        style={{ width: '1050px' }}
      >
        {saleMusicTokens &&
          saleMusicTokens.map((v, i) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={i}>
                <MarketPlaceNFTCard
                  account={account}
                  musicTokenIds={v.musicTokenId}
                  musicTokenDatas={v.musicTokenData}
                  musicTokenPrices={v.musicTokenPrice}
                />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default MarketPlaceContents;
