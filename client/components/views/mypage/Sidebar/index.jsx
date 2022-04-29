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
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = ({ userData }) => {
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
                  <ListItemText primary={`회원 정보 수정`} />
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
                <ListItemText primary={`좋아하는 노래`} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <Link href="/mypage/myartist">
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#fff' }}>
                    <SpatialTrackingIcon />
                  </ListItemIcon>
                  <ListItemText primary={`좋아하는 아티스트`} />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link href="/mypage/myplaylists">
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#fff' }}>
                    <LibraryMusicIcon />
                  </ListItemIcon>
                  <ListItemText primary={`나의 재생목록`} />
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <Link href="/mypage/mysubinfo">
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#fff' }}>
                    <CardMembershipIcon />
                  </ListItemIcon>
                  <ListItemText primary={`이용권 정보 조회`} />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </nav>
      </Box>
    </>
  );
};
export default Sidebar;
