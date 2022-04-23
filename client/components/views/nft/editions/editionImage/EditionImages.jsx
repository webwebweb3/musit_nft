import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import ReactAudioPlayer from 'react-audio-player';

import { Box } from '@mui/material';
import MusicLikes from '$components/views/musicLikes/MusicLikes';
import { useRouter } from 'next/router';

export default function EditionImages({ image, music }) {
  const router = useRouter();
  const editionNum = router.query.editionIPFSUrl;

  return (
    <Box sx={{ margin: '20px auto' }}>
      <Card
        sx={{
          maxWidth: 450,
          backgroundColor: 'transparent',
        }}
        elevation={20}
      >
        <CardHeader
          action={
            <MusicLikes editionNum={editionNum} />
            // <IconButton aria-label="favoriteButton">
            //   {isFavorite ? (
            //     <FavoriteIcon sx={{ color: 'white' }} />
            //   ) : (
            //     <FavoriteBorderIcon sx={{ color: 'white' }} />
            //   )}
            // </IconButton>
          }
          sx={{ padding: '10px' }}
        />
        {/* <Divider sx={{ background: 'white', margin: '0 0 10px 0' }} /> */}
        <CardMedia
          component="img"
          height="100%"
          image={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${image}`}
          alt="image"
        />
        {/* <Divider sx={{ background: 'white', margin: '10px 0' }} /> */}
        <CardContent style={{ padding: '0 0 10px 0' }}>
          <ReactAudioPlayer
            src={`https://ipfs.infura.io/ipfs/${music}`}
            controls
            style={{ width: '100%' }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
