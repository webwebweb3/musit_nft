import React, { useEffect, useState, useCallback } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { mintMusicTokenContract } from '$contracts';

const AuctionCard = ({ highestBindingBid, tokenID }) => {
  const [hover, setHover] = useState();
  const [auctionData, setAuctionData] = useState({
    description: null,
    properties: null,
    title: null,
    type: null,
  });

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const content = useCallback(async () => {
    const tokenURI = await mintMusicTokenContract.methods
      .tokenURI(tokenID)
      .call();

    const ipfsData = await fetch(`https://ipfs.infura.io/ipfs/${tokenURI}`);
    const data = await ipfsData.json();

    setAuctionData(data);
  }, [tokenID]);

  useEffect(() => {
    if (tokenID) {
      content();
    }
  }, [tokenID]);

  return (
    <>
      {auctionData.description && (
        <Card
          className="cardContract"
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
        >
          {/* TODO: hover animation!!! */}
          <div style={hover ? { marginLeft: '-10px' } : {}}>
            <Image
              src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${auctionData.properties.S3AlbumCover}`}
              alt={`${auctionData.properties.dataToSubmit.title} album Cover`}
              layout="fixed"
              width={hover ? '320px' : '300px'}
              height="300px"
            />
          </div>

          <Box className="cardBottom">
            <CardContent className="cardContent">
              <Typography component="div" variant="h5">
                {auctionData.properties.dataToSubmit.title}
              </Typography>
              <Typography
                className="cardTitle"
                variant="subtitle1"
                component="div"
              >
                {auctionData.properties.dataToSubmit.artist}
              </Typography>
              <Box className="cardETH">{`현재 최고가 : ${highestBindingBid} ETH`}</Box>
            </CardContent>
          </Box>
        </Card>
      )}
    </>
  );
};

export default AuctionCard;
