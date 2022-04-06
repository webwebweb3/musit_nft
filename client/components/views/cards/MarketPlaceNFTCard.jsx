import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material/';
import Link from 'next/link';
import { web3 } from '../../../contracts';
import { useState } from 'react';

const NFTCards = ({ musicTokenIds, musicTokenPrices, musicTokenDatas }) => {
  const [hover, setHover] = useState();

  const musicTokenInputData = musicTokenDatas.properties.dataToSubmit;
  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const theme = useTheme();

  return (
    <Link href={`/nft/marketplace/edition/${musicTokenIds}`}>
      <Card
        sx={{
          display: 'inline-block',
          width: '300px',

          backgroundColor: '#2c3352',
          color: 'white',
          borderRadius: '1rem',
        }}
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
        style={hover ? { opacity: '0.8', cursor: 'pointer' } : { opacity: '1' }}
      >
        <CardMedia
          component="img"
          sx={
            hover
              ? {
                  width: '320px',
                  height: '300px',
                  marginLeft: '-10px',
                }
              : {
                  width: '300px',
                  height: '300px',
                }
          }
          image={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${musicTokenDatas.properties.S3AlbumCover}`}
          alt={`${musicTokenInputData.title} album Cover`}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {musicTokenInputData.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              style={{ color: '#768fb5' }}
            >
              {musicTokenInputData.artist}
            </Typography>
            <Box
              style={{ fontWeight: '600', color: '#18c99b' }}
            >{`$${web3.utils.fromWei(musicTokenPrices)} ETH`}</Box>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
};

export default NFTCards;
