import React from 'react';
import StyledAvatar from '../mypage/Sidebar/StyledAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import CardMedia from '@mui/material/CardMedia';

const MyFavoriteTracks = () => {
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
      <Divider textAlign="left">Hear the tracks you’ve liked:</Divider>
      <div className="artwork"></div>
    </>
  );
};

export default MyFavoriteTracks;
