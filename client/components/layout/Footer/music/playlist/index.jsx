import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';
import React from 'react';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import MyFavorite from '$components/layout/Footer/music/playlist/MyFavorite';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PlayList = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      className="MyPlayListContainer"
      open={open}
      keepMounted
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogActions>
        <DialogTitle className="MyPlayTitle">{'나의 재생 목록'}</DialogTitle>
        <Button className="MyPlayList" onClick={handleClose}>
          <CloseIcon />
        </Button>
      </DialogActions>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <MyFavorite />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default PlayList;
