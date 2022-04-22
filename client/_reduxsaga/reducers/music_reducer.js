import produce from '$util/produce';
import {
  MUSICS_LIKE_REQUEST,
  MUSICS_LIKE_SUCCESS,
  MUSICS_LIKE_FAILURE,
  MUSICS_DISLIKE_REQUEST,
  MUSICS_DISLIKE_SUCCESS,
  MUSICS_DISLIKE_FAILURE,
} from '$reduxsaga/request/types';

export const initialState = {
  MusicLikeLoading: false,
  MusicLikeDone: false,
  MusicLikeError: null,

  MusicDisLikeLoading: false,
  MusicDisLikeDone: false,
  MusicDisLikeError: null,

  isLike: null,
};

const MusicReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case MUSICS_LIKE_REQUEST:
        draft.MusicLikeLoading = true;
        draft.MusicLikeError = null;
        draft.MusicLikeDone = false;
        break;
      case MUSICS_LIKE_SUCCESS:
        draft.MusicLikeLoading = false;
        draft.isLike = action.data;
        draft.MusicLikeDone = true;
        break;
      case MUSICS_LIKE_FAILURE:
        draft.MusicLikeLoading = false;
        draft.MusicLikeError = action.error;
        break;

      case MUSICS_DISLIKE_REQUEST:
        draft.MusicDisLikeLoading = true;
        draft.MusicDisLikeError = null;
        draft.MusicDisLikeDone = false;
        break;
      case MUSICS_DISLIKE_SUCCESS:
        draft.MusicDisLikeLoading = false;
        draft.isLike = action.data;
        draft.MusicDisLikeDone = true;
        break;
      case MUSICS_DISLIKE_FAILURE:
        draft.MusicDisLikeLoading = false;
        draft.MusicDisLikeError = action.error;
        break;
      default:
        break;
    }
  });

export default MusicReducer;
