import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import styled from 'styled-components';
import Link from 'next/link';
import MusicLikes from '$components/views/musicLikes/MusicLikes';

const StyledCard = styled(Card)`
  ${({}) => `
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    border-radius: 10px;
  }
  `}
`;

const MusicCard = ({
  musicTitle,
  albumCover,
  artistName,
  func,
  editionNum,
}) => {
  const onClickPlay = () => {
    func('');
  };

  return (
    <Card className="cardBox" onClick={onClickPlay}>
      <StyledCard className="styledCard">
        <MusicLikes editionNum={editionNum} />

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
      </StyledCard>
    </Card>
  );
};

export default MusicCard;
