import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material/';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Link from 'next/link';

const MusicCard = ({ musicTitle, albumCover, artistName }) => {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'inline-block' }}>
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
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '200px' }}
        image={albumCover}
        alt={`${musicTitle} album Cover`}
      />
    </Card>
  );
};

export default MusicCard;
