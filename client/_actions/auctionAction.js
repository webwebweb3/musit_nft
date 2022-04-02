import { CreateAuction_REQUEST, AllAuctions_REQUEST } from './types';

export const createAuctionAction = data => ({
  type: CreateAuction_REQUEST,
  data,
});

export const allAuctionsAction = () => ({
  type: AllAuctions_REQUEST,
});
