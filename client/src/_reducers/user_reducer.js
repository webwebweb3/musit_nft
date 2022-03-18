import produce from '../util/produce';

import {
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  USER_IMAGES_REQUEST,
  USER_IMAGES_SUCCESS,
  USER_IMAGES_FAILURE,
} from '../_actions/types';

export const initialState = {
  logOutUserLoading: false,
  logOutUserDone: false,
  logOutUserError: null,
  registerUserLoading: false,
  registerUserDone: false,
  registerUserError: null,
  userData: null,
};

const UserReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGOUT_USER_REQUEST:
        draft.logOutUserLoading = true;
        draft.logOutUserError = null;
        draft.logOutUserDone = false;
        break;
      case LOGOUT_USER_SUCCESS:
        draft.logOutUserLoading = false;
        draft.logOutUserDone = true;
        draft.userData = null;
        break;
      case LOGOUT_USER_FAILURE:
        draft.logOutUserLoading = false;
        draft.logOutUserError = action.error;
        break;
      case REGISTER_USER_REQUEST:
        draft.registerUserLoading = true;
        draft.registerUserError = null;
        draft.registerUserDone = false;
        break;
      case REGISTER_USER_SUCCESS:
        draft.registerUserLoading = false;
        draft.registerUserDone = true;
        break;
      case REGISTER_USER_FAILURE:
        draft.registerUserLoading = false;
        draft.registerUserError = action.error;
        break;
      case USER_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case USER_IMAGES_SUCCESS:
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      case USER_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      default:
        return state;
    }
  });

export default UserReducer;
