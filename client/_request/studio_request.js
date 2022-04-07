import {
  STUDIO_UPLOAD_BACKGROUND_REQUEST,
  STUDIO_UPLOAD_PROFILE_REQUEST,
  STUDIO_GET_MYMUSICS_REQUEST,
} from './types';

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
