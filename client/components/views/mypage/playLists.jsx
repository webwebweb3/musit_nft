import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import StyledAvatar from '../mypage/Sidebar/StyledAvatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';

const PlayLists = () => {
  const [filter, setFilter] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setFilter(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
      <Divider textAlign="left">Play Lists</Divider>
      <Box>
        <div>
          <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
            Filter
          </Button>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="filter">Filter</InputLabel>
            <Select
              labelId="filter"
              id="filter"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={filter}
              label="filter"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Liked</MenuItem>
              <MenuItem value={20}>Created</MenuItem>
              <MenuItem value={30}>All</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="likedList">
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              component="img"
              height="200"
              image=""
              alt="플레이리스트 커버"
            />
            <CardContent>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <Typography>가수이름 - 앨범제목</Typography>
            </CardContent>
          </Card>
        </div>
      </Box>
    </>
  );
};

export default PlayLists;
