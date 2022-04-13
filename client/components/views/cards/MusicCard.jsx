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

const StyledCard = styled(Card)`
  ${({}) => `
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  `}
`;

const MusicCard = ({ musicTitle, albumCover, artistName, func }) => {
  const onClickPlay = () => {
    func('');
  };

  const theme = useTheme();

  return (
    <Card sx={{ display: 'inline-block' }} onClick={onClickPlay}>
      <StyledCard>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {musicTitle}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              style={{ cursor: 'pointer' }}
            >
              <Link href={`/studio/${artistName}`}>{artistName}</Link>
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: '200px', height: '200px' }}
          image={albumCover}
          alt={`${musicTitle} album Cover`}
        />
      </StyledCard>
    </Card>
  );
};

export default MusicCard;
