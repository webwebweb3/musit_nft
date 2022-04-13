import {
  IPFS_MUSIC_REQUEST,
  MINT_MUSIC_NFT_REQUEST,
  S3_ALBUMCOVER_REQUEST,
} from '$reduxsaga/request/types';

export const s3AlbumCoverRequestAction = data => ({
  type: S3_ALBUMCOVER_REQUEST,
  data,
});

export const IPFSMusicRequestAction = data => ({
  type: IPFS_MUSIC_REQUEST,
  data,
});

export const mintMusicNFTRequestAction = data => ({
  type: MINT_MUSIC_NFT_REQUEST,
  data,
});
