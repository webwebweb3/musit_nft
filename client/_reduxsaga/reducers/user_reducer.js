import produce from '$util/produce';
import {
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  USER_IMAGES_REQUEST,
  USER_IMAGES_SUCCESS,
  USER_IMAGES_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  MY_INFO_REQUEST,
  MY_INFO_SUCCESS,
  MY_INFO_FAILURE,
} from '$reduxsaga/request/types';

export const initialState = {
  logInUserLoading: false,
  logInUserDone: false,
  logInUserError: null,
  logOutUserLoading: false,
  logOutUserDone: false,
  logOutUserError: null,
  registerUserLoading: false,
  registerUserDone: false,
  registerUserError: null,
  editImagesLoading: false,
  editImagesDone: false,
  editImagesError: null,
  myInfoLoading: false,
  myInfoDone: false,
  myInfoError: null,
  userData: null,
  imagePath: null,
};

const UserReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
        draft.logInUserLoading = true;
        draft.logInUserError = null;
        draft.logInUserDone = false;
        draft.logOutUserLoading = false;
        draft.logOutUserError = null;
        draft.logOutUserDone = false;
        draft.registerUserLoading = false;
        draft.registerUserError = null;
        draft.registerUserDone = false;
        break;
      case LOGIN_USER_SUCCESS:
        draft.logInUserLoading = false;
        draft.userData = action.data;
        draft.logInUserDone = true;
        break;
      case LOGIN_USER_FAILURE:
        draft.logInUserLoading = false;
        draft.logInUserError = action.error;
        break;
      case LOGOUT_USER_REQUEST:
        draft.logOutUserLoading = true;
        draft.logOutUserError = null;
        draft.logOutUserDone = false;
        draft.logInUserLoading = false;
        draft.logInUserError = null;
        draft.logInUserDone = false;
        draft.registerUserLoading = false;
        draft.registerUserError = null;
        draft.registerUserDone = false;
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
        draft.logInUserLoading = false;
        draft.logInUserError = null;
        draft.logInUserDone = false;
        draft.logOutUserLoading = false;
        draft.logOutUserError = null;
        draft.logOutUserDone = false;
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
      case EDIT_USER_REQUEST:
        draft.editUserLoading = true;
        draft.editUserError = null;
        draft.editUserDone = false;
        break;
      case EDIT_USER_SUCCESS:
        draft.editUserLoading = false;
        draft.editUserDone = true;
        draft.userData = action.data;
        draft.imagePath = null;
        break;
      case EDIT_USER_FAILURE:
        draft.editUserLoading = false;
        draft.editUserError = action.error;
        break;
      case USER_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case USER_IMAGES_SUCCESS:
        draft.imagePath = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      case USER_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      case MY_INFO_REQUEST:
        draft.myInfoLoading = true;
        draft.myInfoError = null;
        draft.myInfoDone = false;
        break;
      case MY_INFO_SUCCESS:
        draft.myInfoLoading = false;
        draft.userData = action.data;
        draft.myInfoDone = true;
        break;
      case MY_INFO_FAILURE:
        draft.myInfoLoading = false;
        draft.myInfoError = action.error;
        break;
      default:
        return state;
    }
  });

export default UserReducer;
