import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  musicDisLikeRequest,
  musicLikeRequest,
} from '$reduxsaga/request/music_request';
import { useRouter } from 'next/router';

const MusicLikes = () => {
  const [isFavorite, setIsFavorite] = useState();
  const router = useRouter();
  const editionNum = router.query.editionIPFSUrl;
  const { userData } = useSelector(state => state.user);
  const music = useSelector(state => state.music);
  const userMetamask = userData.metamask;
  const dispatch = useDispatch();
  const onClickDisLike = () => {
    dispatch(musicDisLikeRequest({ editionNum, userMetamask }));
  };
  const onClickLike = () => {
    dispatch(musicLikeRequest({ editionNum, userMetamask }));
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
