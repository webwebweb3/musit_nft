import {
  AUCTION_CREATE_REQUEST,
  AUCTION_ALL_REQUEST,
  AUCTION_REQUEST,
  AUCTION_CANCEL_REQUEST,
  AUCTION_BID_REQUEST,
  AUCTION_MYBID_REQUEST,
  AUCTION_FINALIZE_REQUEST,
  AUCTION_APPROVE_REQUEST,
} from '$reduxsaga/request/types';

export const createAuctionAction = data => ({
  type: AUCTION_CREATE_REQUEST,
  data,
});

export const allAuctionsAction = () => ({
  type: AUCTION_ALL_REQUEST,
});

export const auctionAction = data => ({
  type: AUCTION_REQUEST,
  data,
});

export const auctionApproveAction = data => ({
  type: AUCTION_APPROVE_REQUEST,
  data,
});

export const auctionCancelAction = data => ({
  type: AUCTION_CANCEL_REQUEST,
  data,
});

export const auctionBidAction = data => ({
  type: AUCTION_BID_REQUEST,
  data,
});

export const auctionMyBidAction = data => ({
  type: AUCTION_MYBID_REQUEST,
  data,
});

export const auctionFinalizeAction = data => ({
  type: AUCTION_FINALIZE_REQUEST,
  data,
});
