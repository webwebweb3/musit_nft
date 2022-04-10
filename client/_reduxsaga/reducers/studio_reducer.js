import produce from '../../util/produce';
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
} from '../request/types';

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

  getUserImagesLoading: false,
  getUserImagesDone: false,
  getUserImagesError: null,

  studioUserImages: null,
  studioMyMusics: null,
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
      default:
        return state;
    }
  });

export default studioReducer;
