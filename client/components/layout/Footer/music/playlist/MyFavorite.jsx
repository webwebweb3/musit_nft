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

const MyFavorite = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
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
            좋아요 음악 불러오기
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default MyFavorite;
