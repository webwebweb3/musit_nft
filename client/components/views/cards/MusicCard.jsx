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
  const onClickPlay = () => {
    func('');
  };

  return (
    <Card className="cardBox" onClick={onClickPlay}>
      <Slide top>
        <div className="styledCard" style={{ position: 'relative' }}>
          {userData && editionNum && (
            <span
              className="shadowCard"
              style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                zIndex: 999,
              }}
            >
              <MusicLikes editionNum={editionNum} />
            </span>
          )}
          <CardMedia
            className="cardImg"
            component="img"
            image={albumCover}
            alt={`${musicTitle} album Cover`}
          />

          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography className="cardText" component="div" variant="h5">
                {musicTitle}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <Link href={`/studio/${artistName}`}>
                  <span className="cardText cardArtist">{artistName}</span>
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
