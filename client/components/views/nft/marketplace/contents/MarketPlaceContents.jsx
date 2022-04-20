import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import { style } from './style.js';
import { saleMusicTokenContract } from '$contracts';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MarketPlaceNFTCard from '../../../cards/MarketPlaceNFTCard.jsx';
import Router from 'next/router';
import NFTCards from '../../../cards/NFTCards.jsx';
import PageList from '$components/layout/page/index.jsx';

const MarketPlaceContents = () => {
  const [saleMusicTokens, setSaleMusicTokens] = useState();
  // const { userData } = useSelector(state => state.user);
  // if (userData === null) {
  //   alert('로그인 해주세요');
  //   Router.push('/');
  // }
  // const account = userData.metamask;

  const getOnSaleMusicTokens = async () => {
    try {
      const onSaleMusicTokenArray = await saleMusicTokenContract.methods
        .getOnSaleMusicTokens()
        .call();

      console.log('onsale', onSaleMusicTokenArray);

      const tempMusicTokenArray = [];
      for (let i = 0; i < onSaleMusicTokenArray.length; i++) {
        const ipfsData = await fetch(
          `https://ipfs.infura.io/ipfs/${onSaleMusicTokenArray[i].musicTokenURI}`,
        );
        const data = await ipfsData.json();
        tempMusicTokenArray.push({
          musicTokenId: onSaleMusicTokenArray[i].musicTokenId,
          musicTokenData: data,
          musicTokenPrice: onSaleMusicTokenArray[i].musicTokenPrice,
          musicTokenURI: onSaleMusicTokenArray[i].musicTokenURI,
        });
      }
      console.log('temp', tempMusicTokenArray);
      setSaleMusicTokens(tempMusicTokenArray);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!saleMusicTokens) getOnSaleMusicTokens();
    console.log('sale', saleMusicTokens);
  }, [saleMusicTokens]);

  return (
    <Box sx={style.ContentsContainer}>
      <PageList items={saleMusicTokens} type="market" />
    </Box>
  );
};

export default MarketPlaceContents;
