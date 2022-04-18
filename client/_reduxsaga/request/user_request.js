import {
  EDIT_USER_REQUEST,
  LOGIN_USER_REQUEST,
  LOGOUT_USER_REQUEST,
  MY_INFO_REQUEST,
  REGISTER_USER_REQUEST,
  USER_IMAGES_REQUEST,
} from '$reduxsaga/request/types';

export const loginRequestAction = data => ({
  type: LOGIN_USER_REQUEST,
  data,
});

export const logoutRequestAction = () => ({
  type: LOGOUT_USER_REQUEST,
});

export const registerRequestAction = dataToSubmit => ({
  type: REGISTER_USER_REQUEST,
  data: dataToSubmit,
});

export const userImgRequestAction = dataToSubmit => ({
  type: USER_IMAGES_REQUEST,
  data: dataToSubmit,
});

export const userEditRequestAction = dataToSubmit => ({
  type: EDIT_USER_REQUEST,
  data: dataToSubmit,
});

export const myInfoRequestAction = () => ({
  type: MY_INFO_REQUEST,
});
