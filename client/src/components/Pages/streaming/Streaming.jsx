// import React from 'react';
// import MusicCard from './musicCard/MusicCard';

// const Streaming = () => {
//   // let navigate = useNavigate();
//   return (
//     <>
//       <MusicCard
//         musicTitle={'title'}
//         albumCover={'https://mui.com/static/images/cards/live-from-space.jpg'}
//         artistName={'artist1'}
//       />
//       <MusicCard
//         musicTitle={'title'}
//         albumCover={'https://mui.com/static/images/cards/live-from-space.jpg'}
//         artistName={'artist3'}
//       />
//     </>
//   );
// };

// export default Streaming;

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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export default function TemporaryDrawer() {
  let navigate = useNavigate();
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
        <ListItem
          button
          key={'Home'}
          onClick={() => navigate('/')}
          sx={{ color: 'white', fontSize: '100px' }}
        >
          <ListItemIcon>
            <img
              width="65px"
              height="65px"
              src="/images/logoW.png"
              alt="logo"
              style={{ marginRight: '10px' }}
            />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        <Divider />

        {[
          { text: 'Search', move: 'search' },
          { text: 'My Library', move: 'mypage' },
          { text: 'My Favorite', move: 'myfavorite' },
        ].map((text, index) => (
          <ListItem
            button
            key={text.text}
            onClick={() => navigate(`/${text.move}`)}
            sx={{ color: 'white', fontSize: '100px' }}
          >
            <ListItemText primary={text.text} />
          </ListItem>
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
            sx={{ color: 'white', marginLeft: '-60px', marginTop: '-40px' }}
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
