import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Link from 'next/link';
import MusicLikes from '$components/views/musicLikes/MusicLikes';
import { useSelector } from 'react-redux';
import Slide from 'react-reveal/Slide';

// const StyledCard = styled(Card)`
//   ${({}) => `
//   cursor: pointer;
//   &:hover {
//     transform: scale(1.1);
//     border-radius: 10px;
//   }
//   `}
// `;

const MusicCard = ({
  musicTitle,
  albumCover,
  artistName,
  func,
  editionNum,
}) => {
  const { userData } = useSelector(state => state.user);

  return (
    <Card
      className="cardBox"
      sx={{
        display: 'inline-block',
        backgroundColor: 'transparent',
        margin: '0 10px',
      }}
    >
      <Slide top>
        <div
          className="styledCard"
          style={{ position: 'relative', backgroundColor: 'transparent' }}
        >
          {userData && editionNum && (
            <span
              className="shadowCard"
              style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                cursor: 'pointer',
                boxShadow:
                  'rgba(50, 50, 93, 0.25) 0px 40px 70px -12px inset, rgba(0, 0, 0, 0.3) 0px 20px 38px -18px inset',
              }}
            >
              <MusicLikes editionNum={editionNum} />
            </span>
          )}
          <CardMedia
            className="cardImg"
            sx={{ width: '200px', height: '200px', borderRadius: '10px' }}
            component="img"
            image={albumCover}
            alt={`${musicTitle} album Cover`}
          />

          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography
                className="cardText"
                sx={{ color: 'var(--streaming-font-color)' }}
                component="div"
                variant="h5"
              >
                {musicTitle}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <Link href={`/studio/${artistName}`}>
                  <span
                    className="cardText cardArtist"
                    sx={{
                      color: 'var(--streaming-font-color)',
                      color: 'var(--streaming-font-artist-color)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {artistName}
                  </span>
                </Link>
              </Typography>
            </CardContent>
          </Box>
        </div>
      </Slide>
    </Card>
  );
};

export default MusicCard;
