import * as React from 'react';
import StyledAvatar from '../mypage/Sidebar/StyledAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
//import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavArtists = () => {
  return (
    <>
      <div>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledAvatar />
              <ListItemText primary="아티스트/ 유저 이름" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <Divider textAlign="left">You Are Following:</Divider>
      <br />
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Stack direction="column" spacing={1}>
          <Avatar alt="Remy Sharp" src="" sx={{ width: 200, height: 200 }} />
          <Typography>
            {' '}
            <FavoriteIcon /> 아티스트 이름
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default FavArtists;
