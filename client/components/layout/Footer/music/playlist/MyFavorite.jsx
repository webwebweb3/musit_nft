import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const MyFavorite = () => {
  const [open, setOpen] = useState(false);
  const { userData } = useSelector(state => state.user);
  const [userInfo, setUserInfo] = useState([]);

  const handleClick = () => {
    setOpen(!open);
    setUserInfo(userData.user);
  };

  return (
    <>
      <List
        sx={{ width: '100%', bgcolor: '#e9d5da' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon style={{ marginRight: '10px' }}>
            <Image src="/likemusic.png" width="60px" height="60px" />
          </ListItemIcon>
          <ListItemText
            sx={{ fontWeight: 'bold' }}
            primary="좋아요 표시한 음악"
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {userInfo &&
              userInfo.map(music => (
                <div
                  style={{
                    display: 'flex',
                    marginLeft: '30px',
                    marginBottom: '10px',
                  }}
                >
                  <Image
                    width="50px"
                    height="50px"
                    src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${music.albumCover}`}
                    alt="logo"
                    layout="fixed"
                  />
                  <span style={{ margin: 'auto 20px' }}>{music.title}</span>
                </div>
              ))}
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default MyFavorite;
