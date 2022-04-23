import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import {
  musicDisLikeRequest,
  musicLikeRequest,
} from '$reduxsaga/request/music_request';

const MusicLikes = ({ editionNum }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { userData } = useSelector(state => state.user);
  const music = useSelector(state => state.music);
  const userMetamask = userData?.metamask;
  const dispatch = useDispatch();
  const onClickDisLike = () => {
    dispatch(musicDisLikeRequest({ editionNum, userMetamask }));
  };
  const onClickLike = () => {
    dispatch(musicLikeRequest({ editionNum, userMetamask }));
  };
  const getLike = async () => {
    let data = {
      params: {
        paramsData: { editionNum, userMetamask },
      },
    };

    await Axios.get('/music', data).then(res => {
      if (res.data.exist) {
        setIsFavorite(true);
      }
    });
  };

  useEffect(() => {
    getLike();
  }, []); // 처음 렌더링

  useEffect(() => {
    if (music.isLike) {
      if (music.isLike.editionNum === editionNum) {
        if (music.isLike.likeSuccess) {
          setIsFavorite(true);
        }
        if (music.isLike.delete) {
          setIsFavorite(false);
        }
      }
    }
  }, [music && music.isLike]);
  return (
    <div>
      <IconButton aria-label="favoriteButton">
        {isFavorite ? (
          <FavoriteIcon className="LikeButtonIcon" onClick={onClickDisLike} />
        ) : (
          <FavoriteBorderIcon
            className="LikeButtonIcon"
            onClick={onClickLike}
          />
        )}
      </IconButton>
    </div>
  );
};

export default MusicLikes;
