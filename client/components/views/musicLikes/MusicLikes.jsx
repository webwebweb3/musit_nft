import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  musicDisLikeRequest,
  musicLikeRequest,
} from '$reduxsaga/request/music_request';

const MusicLikes = () => {
  const [isFavorite, setIsFavorite] = useState();
  const music = useSelector(state => state.music);
  const dispatch = useDispatch();
  const onClickDisLike = () => {
    dispatch(musicDisLikeRequest());
  };
  const onClickLike = () => {
    dispatch(musicLikeRequest());
  };
  useEffect(() => {}, [music && music.isLike]);
  useEffect(() => {
    if (music) {
      setIsFavorite(music.isLike);
    }
  }, [music && music.isLike]);
  return (
    <div>
      <IconButton aria-label="favoriteButton">
        {isFavorite ? (
          <FavoriteIcon sx={{ color: 'white' }} onClick={onClickDisLike} />
        ) : (
          <FavoriteBorderIcon sx={{ color: 'white' }} onClick={onClickLike} />
        )}
      </IconButton>
    </div>
  );
};

export default MusicLikes;
