import produce from '$util/produce';
import {
  STUDIO_UPLOAD_BACKGROUND_REQUEST,
  STUDIO_UPLOAD_BACKGROUND_SUCCESS,
  STUDIO_UPLOAD_BACKGROUND_FAILURE,
  STUDIO_UPLOAD_PROFILE_REQUEST,
  STUDIO_UPLOAD_PROFILE_SUCCESS,
  STUDIO_UPLOAD_PROFILE_FAILURE,
  STUDIO_GET_MYMUSICS_REQUEST,
  STUDIO_GET_MYMUSICS_SUCCESS,
  STUDIO_GET_MYMUSICS_FAILURE,
  STUDIO_GET_USERIMAGES_REQUEST,
  STUDIO_GET_USERIMAGES_SUCCESS,
  STUDIO_GET_USERIMAGES_FAILURE,
  STUDIO_SUBSCRIBE_REQUEST,
  STUDIO_SUBSCRIBE_SUCCESS,
  STUDIO_SUBSCRIBE_FAILURE,
  STUDIO_ISSUBSCRIBING_REQUEST,
  STUDIO_ISSUBSCRIBING_SUCCESS,
  STUDIO_ISSUBSCRIBING_FAILURE,
  STUDIO_CNT_FOLLOWERS_SUCCESS,
} from '$reduxsaga/request/types';

export const initialState = {
  uploadBackgroundLoading: false,
  uploadBackgroundDone: false,
  uploadBackgroundError: null,
  uploadProfileLoading: false,
  uploadProfileDone: false,
  uploadProfileError: null,
  getMyMusicsLoading: false,
  getMyMusicsDone: false,
  getMyMusicsError: null,
  subscribeArtistLoading: false,
  subscribeArtistDone: false,
  subscribeArtistError: null,
  isSubscribingLoading: false,
  isSubscribingDone: false,
  isSubscribingError: null,

  getUserImagesLoading: false,
  getUserImagesDone: false,
  getUserImagesError: null,

  studioUserImages: null,
  studioMyMusics: null,
  isSubscribingArtist: null,
  cntFollowers: null,
};

const studioReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case STUDIO_UPLOAD_BACKGROUND_REQUEST:
        draft.uploadBackgroundLoading = true;
        draft.uploadBackgroundError = null;
        draft.uploadBackgroundDone = false;
        break;
      case STUDIO_UPLOAD_BACKGROUND_SUCCESS:
        draft.uploadBackgroundLoading = false;
        draft.uploadBackgroundDone = true;
        break;
      case STUDIO_UPLOAD_BACKGROUND_FAILURE:
        draft.uploadBackgroundLoading = false;
        draft.uploadBackgroundError = action.error;
        break;
      case STUDIO_UPLOAD_PROFILE_REQUEST:
        draft.uploadProfileLoading = true;
        draft.uploadProfileError = null;
        draft.uploadProfileDone = false;
        break;
      case STUDIO_UPLOAD_PROFILE_SUCCESS:
        draft.uploadProfileLoading = false;
        draft.uploadProfileDone = true;
        break;
      case STUDIO_UPLOAD_PROFILE_FAILURE:
        draft.uploadProfileLoading = false;
        draft.uploadProfileError = action.error;
        break;
      case STUDIO_GET_MYMUSICS_REQUEST:
        draft.getMyMusicsLoading = true;
        draft.getMyMusicsError = null;
        draft.getMyMusicsDone = false;
        break;
      case STUDIO_GET_MYMUSICS_SUCCESS:
        draft.getMyMusicsLoading = false;
        draft.studioMyMusics = action.data;
        draft.getMyMusicsDone = true;
        break;
      case STUDIO_GET_MYMUSICS_FAILURE:
        draft.getMyMusicsLoading = false;
        draft.getMyMusicsError = action.error;
        break;
      case STUDIO_GET_USERIMAGES_REQUEST:
        draft.getUserImagesLoading = true;
        draft.getUserImagesError = null;
        draft.getUserImagesDone = false;
        break;
      case STUDIO_GET_USERIMAGES_SUCCESS:
        draft.getUserImagesLoading = false;
        draft.studioUserImages = action.data;
        draft.getUserImagesDone = true;
        break;
      case STUDIO_GET_USERIMAGES_FAILURE:
        draft.getUserImagesLoading = false;
        draft.getUserImagesError = action.error;
        break;
      case STUDIO_SUBSCRIBE_REQUEST:
        draft.subscribeArtistLoading = true;
        draft.subscribeArtistError = null;
        draft.subscribeArtistDone = false;
        break;
      case STUDIO_SUBSCRIBE_SUCCESS:
        draft.subscribeArtistLoading = false;
        draft.isSubscribingArtist = action.data;
        draft.subscribeArtistDone = true;
        break;
      case STUDIO_SUBSCRIBE_FAILURE:
        draft.subscribeArtistLoading = false;
        draft.subscribeArtistError = action.error;
        break;
      case STUDIO_ISSUBSCRIBING_REQUEST:
        draft.isSubscribingLoading = true;
        draft.isSubscribingError = null;
        draft.isSubscribingDone = false;
        break;
      case STUDIO_ISSUBSCRIBING_SUCCESS:
        draft.isSubscribingLoading = false;
        draft.isSubscribingArtist = action.data;
        draft.isSubscribingDone = true;
        break;
      case STUDIO_CNT_FOLLOWERS_SUCCESS:
        draft.cntFollowers = action.data;
        break;
      case STUDIO_ISSUBSCRIBING_FAILURE:
        draft.isSubscribingLoading = false;
        draft.isSubscribingError = action.error;
        break;
      default:
        return state;
    }
  });

export default studioReducer;
