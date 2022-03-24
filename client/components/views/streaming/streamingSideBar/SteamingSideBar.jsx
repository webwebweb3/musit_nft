import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import Link from 'next/link';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export default function StreamingSideBar() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <Box
      sx={{ width: 250, backgroundColor: 'black', height: '100%' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href="/">
          <ListItem
            button
            key={'Home'}
            sx={{ color: 'white', fontSize: '100px' }}
          >
            <ListItemIcon>
              <img
                width="65px"
                height="65px"
                src="/logoW.png"
                alt="logo"
                style={{ marginRight: '10px' }}
              />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </Link>
        <Divider />

        {[
          { text: 'Search', move: 'search' },
          { text: 'My Library', move: 'mypage' },
          { text: 'My Favorite', move: 'myfavorite' },
        ].map((text, i) => (
          <Link key={text.text} href={`/${text.move}`}>
            <ListItem button sx={{ color: 'white', fontSize: '100px' }}>
              <ListItemText primary={text.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)}>
          <DensityMediumIcon
            fontSize="medium"
            sx={{ color: 'white', marginLeft: '0px', marginTop: '0px' }}
          />
        </Button>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </Box>
  );
}
