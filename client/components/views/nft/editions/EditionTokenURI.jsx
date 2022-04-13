import { Box } from '@material-ui/core';
import Router, { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { mintMusicTokenContract, saleMusicTokenContract } from '$contracts';
import EditionChart from './editionChart/EditionChart';
import EditionDescription from './editionDescription/EditionDescription';
import EditionImages from './editionImage/EditionImages';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import EditionPurchase from './editionPurchase/EditionPurchase';
import { style } from './style';

const EditionTokenURI = () => {
  const [musicData, setMusicData] = useState();
  const [musicOwner, setMusicOwner] = useState();
  const [musicPrice, setMusicPrice] = useState();
  const router = useRouter();
  const getMusicTokenData = async () => {
    try {
      const tokenURI = await mintMusicTokenContract.methods
        .tokenURI(router.query.editionIPFSUrl)
        .call();

      const ownerOf = await mintMusicTokenContract.methods
        .ownerOf(router.query.editionIPFSUrl)
        .call();

      const tokenPrice = await saleMusicTokenContract.methods
        .getMusicTokenPrice(router.query.editionIPFSUrl)
        .call();

      const ipfsData = await fetch(`https://ipfs.infura.io/ipfs/${tokenURI}`);
      const data = await ipfsData.json();
      console.log(data);
      setMusicOwner(ownerOf);
      setMusicPrice(tokenPrice);
      setMusicData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!musicData) getMusicTokenData();
  }, [musicData, musicOwner]);

  return (
    <>
      {musicData && (
        <Box sx={style.editionContainer}>
          <Box
            sx={style.editionBackContainer}
            onClick={() => Router.replace('/nft/marketplace')}
          >
            <ArrowBackIcon sx={{ fontSize: '20px', marginRight: '10px' }} />
            뒤로
          </Box>
          <Box sx={style.editionTopContents}>
            <Box sx={style.editionTopLeftContainer}>
              <EditionImages
                image={musicData.properties.S3AlbumCover}
                music={musicData.properties.IPFSUrl}
              />
            </Box>
            <Box sx={style.editionTopRightContainer}>
              <EditionDescription
                owner={musicOwner}
                musicData={musicData}
                musicPrice={musicPrice}
              />
              <Box sx={style.editionChartTitle}>이전 판매 기록</Box>
              <Box sx={style.editionTopRightChart}>
                <EditionChart tokenId={router.query.editionIPFSUrl} />
              </Box>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      )}
    </>
  );
};

export default EditionTokenURI;
