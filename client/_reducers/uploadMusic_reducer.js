import produce from '../util/produce';
import {
  IPFS_MUSIC_FAILURE,
  IPFS_MUSIC_REQUEST,
  IPFS_MUSIC_SUCCESS,
  S3_ALBUMCOVER_FAILURE,
  S3_ALBUMCOVER_REQUEST,
  S3_ALBUMCOVER_SUCCESS,
} from '../_actions/types';

export const initialState = {
  S3UploadLoading: false,
  S3UploadDone: false,
  S3UploadError: null,

  IPFSUploadLoading: false,
  IPFSUploadDone: false,
  IPFSUploadError: null,

  S3Data: null,
  IPFSData: null,
};

const UserReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case S3_ALBUMCOVER_REQUEST:
        draft.S3UploadLoading = true;
        draft.S3UploadError = null;
        draft.S3UploadDone = false;
        break;
      case S3_ALBUMCOVER_SUCCESS:
        draft.S3UploadLoading = false;
        draft.S3Data = action.data;
        draft.S3UploadDone = true;
        break;
      case S3_ALBUMCOVER_FAILURE:
        draft.S3UploadLoading = false;
        draft.S3UploadError = action.error;
        break;

      case IPFS_MUSIC_REQUEST:
        draft.IPFSUploadLoading = true;
        draft.IPFSUploadError = null;
        draft.IPFSUploadDone = false;
        break;
      case IPFS_MUSIC_SUCCESS:
        draft.IPFSUploadLoading = false;
        draft.IPFSData = action.data;
        draft.IPFSUploadDone = true;
        break;
      case IPFS_MUSIC_FAILURE:
        draft.IPFSUploadLoading = false;
        draft.IPFSUploadError = action.error;
        break;
      default:
        break;
    }
  });

export default UserReducer;
