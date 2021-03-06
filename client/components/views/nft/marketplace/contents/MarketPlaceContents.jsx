import { Box } from '@mui/material';
import React, { useState } from 'react';
import { style } from './style.js';
import { saleMusicTokenContract } from '$contracts';
import { useEffect } from 'react';
import PageList from '$components/layout/page/index.jsx';
import { useRouter } from 'next/router';

const MarketPlaceContents = () => {
  const [saleMusicTokens, setSaleMusicTokens] = useState();
  const router = useRouter();
  let { artist, genre, title } = router.query;

  const getOnSaleMusicTokens = async () => {
    try {
      const onSaleMusicTokenArray = await saleMusicTokenContract.methods
        .getOnSaleMusicTokens()
        .call();

      let tempMusicTokenArray = [];
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

      if (artist) {
        let searchTokenArray = tempMusicTokenArray.filter(
          tempMusicToken =>
            tempMusicToken.musicTokenData.properties.dataToSubmit.artist ===
            artist,
        );

        tempMusicTokenArray = searchTokenArray;
      } else if (title) {
        let searchTitleTokenArray = tempMusicTokenArray.filter(
          tempMusicToken =>
            tempMusicToken.musicTokenData.properties.dataToSubmit.title ===
            title,
        );

        tempMusicTokenArray = searchTitleTokenArray;
      } else if (genre) {
        let genreArray = tempMusicTokenArray.filter(
          tempMusicToken =>
            tempMusicToken.musicTokenData.properties.dataToSubmit.genre ===
            genre,
        );

        tempMusicTokenArray = genreArray;
      }

      setSaleMusicTokens(tempMusicTokenArray);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOnSaleMusicTokens();
  }, [artist, title, genre]);

  return (
    <Box sx={style.ContentsContainer}>
      <PageList items={saleMusicTokens} type="market" />
    </Box>
  );
};

export default MarketPlaceContents;
