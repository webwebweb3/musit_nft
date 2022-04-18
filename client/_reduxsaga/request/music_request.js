import {
  MUSICS_LIKE_REQUEST,
  MUSICS_DISLIKE_REQUEST,
  MUSICS_ISLIKE_REQUEST,
} from '$reduxsaga/request/types';

export const musicLikeRequest = data => ({
  type: MUSICS_LIKE_REQUEST,
  data,
});
export const musicDisLikeRequest = data => ({
  type: MUSICS_DISLIKE_REQUEST,
  data,
});
export const musicIsLikeRequest = data => ({
  type: MUSICS_ISLIKE_REQUEST,
  data,
});
