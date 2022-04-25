// import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const StudioMusicCard = ({ musics, albumCovers, datas }) => {
  // const [hover, setHover] = useState();
  // console.log('카드', musics, albumCovers, datas);

  // const handleMouseIn = () => {
  //   setHover(true);
  // };

  // const handleMouseOut = () => {
  //   setHover(false);
  // };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <Link href="/streaming/home">
        <Card
          sx={{
            display: 'inline-block',
            width: '300px',
            backgroundColor: '#2c3352',
            color: 'white',
            borderRadius: '1rem',
            cursor: 'pointer',
          }}
          // onMouseOver={handleMouseIn}
          // onMouseOut={handleMouseOut}
          // style={
          //   hover ? { opacity: '0.8', cursor: 'pointer' } : { opacity: '1' }
          // }
        >
          {/* TODO: hover animation!!! */}
          <div>
            <Image
              src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${albumCovers}`}
              alt={`${datas.title} album Cover`}
              layout="fixed"
              width={'300px'}
              height={'300px'}
            />
          </div>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {datas.title}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                style={{ color: '#768fb5' }}
              >
                {datas.artist}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Link>
    </div>
  );
};

export default StudioMusicCard;

// const SaleButton = styled(Button)(() => ({
//   color: '#fff',
//   backgroundColor: '#274eff',
//   '&:hover': {
//     backgroundColor: '#1b36b2',
//   },
// }));
