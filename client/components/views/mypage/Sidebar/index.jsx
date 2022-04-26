import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TokenIcon from '@mui/icons-material/Token';
import Person from '@mui/icons-material/Person';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ userData }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box
        sx={{
          height: '100%',
          width: '300px',
          maxWidth: 360,
          color: 'white',
        }}
      >
        <List>
          <ListItem disablePadding>
            <Link href="/mypage">
              <ListItemButton>
                <ListItemIcon sx={{ color: '#fff' }}>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider sx={{ bgcolor: '#fff' }} />
        <nav aria-label="사이드바">
          <List>
            <ListItem disablePadding>
              <Link href="/mypage/infoedit">
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#fff' }}>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary={`${t('UserInfoEdit')}`} />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link href="/mypage/mynft">
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#fff' }}>
                    <TokenIcon />
                  </ListItemIcon>
                  <ListItemText primary="My NFT" />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#fff' }}>
                  <AudiotrackIcon />
                </ListItemIcon>
                <ListItemText primary={`${t('LikedTracks')}`} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#fff' }}>
                  <SpatialTrackingIcon />
                </ListItemIcon>
                <ListItemText primary={`${t('LikedArtists')}`} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#fff' }}>
                  <LibraryMusicIcon />
                </ListItemIcon>
                <ListItemText primary={`${t('MyPlaylists')}`} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#fff' }}>
                  <CardMembershipIcon />
                </ListItemIcon>
                <ListItemText primary={`${t('SubscriptionInfo')}`} />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </>
  );
};
export default Sidebar;
