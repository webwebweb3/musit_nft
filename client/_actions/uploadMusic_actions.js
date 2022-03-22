import { IPFS_MUSIC_REQUEST, S3_ALBUMCOVER_REQUEST } from './types';

export const s3AlbumCoverRequestAction = data => ({
  type: S3_ALBUMCOVER_REQUEST,
  data,
});

export const IPFSMusicRequestAction = data => ({
  type: IPFS_MUSIC_REQUEST,
  data,
});
