import {
  AUCTION_CREATE_REQUEST,
  AUCTION_ALL_REQUEST,
  AUCTION_REQUEST,
} from './types';

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
