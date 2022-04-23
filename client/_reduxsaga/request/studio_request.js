import {
  STUDIO_UPLOAD_BACKGROUND_REQUEST,
  STUDIO_UPLOAD_PROFILE_REQUEST,
  STUDIO_GET_MYMUSICS_REQUEST,
  STUDIO_GET_USERIMAGES_REQUEST,
  STUDIO_SUBSCRIBE_REQUEST,
  STUDIO_ISSUBSCRIBING_REQUEST,
} from '$reduxsaga/request/types';

export const studioUploadBackground = data => ({
  type: STUDIO_UPLOAD_BACKGROUND_REQUEST,
  data,
});
export const studioUploadProfile = data => ({
  type: STUDIO_UPLOAD_PROFILE_REQUEST,
  data,
});
export const studioGetMyMusics = data => ({
  type: STUDIO_GET_MYMUSICS_REQUEST,
  data,
});
export const studioGetUserImages = data => ({
  type: STUDIO_GET_USERIMAGES_REQUEST,
  data,
});
export const studioIsSubscribing = data => ({
  type: STUDIO_ISSUBSCRIBING_REQUEST,
  data,
});
export const studioSubscribe = data => ({
  type: STUDIO_SUBSCRIBE_REQUEST,
  data,
});
