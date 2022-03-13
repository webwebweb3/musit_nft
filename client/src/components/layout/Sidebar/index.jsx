import * as React from 'react';
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
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import IconButton from '@mui/material/IconButton';
import StyledAvatar from './StyledAvatar';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Sidebar = () => {
  return (
    <>
      <Box
        sx={{
          height: '100%',
          width: '300px',
          maxWidth: 360,
          bgcolor: '#fff',
          alignItems: 'flex-end',
        }}
      >
        <nav aria-label="사이드바">
          <Divider sx={{ mt: 0.25, mb: 0.25, marginTop: '-7px' }} />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="회원 정보 수정" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TokenIcon />
                </ListItemIcon>
                <ListItemText primary="My NFT" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AutoAwesomeIcon />
                </ListItemIcon>
                <ListItemText primary="내 스튜디오" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AudiotrackIcon />
                </ListItemIcon>
                <ListItemText primary="좋아하는 노래" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SpatialTrackingIcon />
                </ListItemIcon>
                <ListItemText primary="좋아하는 아티스트" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LibraryMusicIcon />
                </ListItemIcon>
                <ListItemText primary="나의 재생목록" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CardMembershipIcon />
                </ListItemIcon>
                <ListItemText primary="이용권 정보 조회" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="회원 메타마스크 정보">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <StyledAvatar />
                <ListItemText primary="아티스트/ 유저" />
                <IconButton contained sx={{ color: 'lightGray' }}>
                  <ExitToAppIcon />
                </IconButton>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </>
  );
};
export default Sidebar;
