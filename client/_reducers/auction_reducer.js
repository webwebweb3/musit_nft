import produce from '../util/produce';
import {
  CreateAuction_REQUEST,
  CreateAuction_SUCCESS,
  CreateAuction_FAILURE,
  AllAuctions_REQUEST,
  AllAuctions_SUCCESS,
  AllAuctions_FAILURE,
} from '../_actions/types';

export const initialState = {
  createAuctionLoading: false,
  createAuctionDone: false,
  createAuctionError: null,
  allAuctionLoading: false,
  allAuctionDone: false,
  allAuctionError: null,
  AuctionData: null,
};

const MetamaskReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CreateAuction_REQUEST:
        draft.createAuctionLoading = true;
        draft.createAuctionError = null;
        draft.createAuctionDone = false;
        draft.createAuctionData = null;
        break;
      case CreateAuction_SUCCESS:
        draft.createAuctionLoading = false;
        draft.createAuctionDone = true;
        break;
      case CreateAuction_FAILURE:
        draft.createAuctionLoading = false;
        draft.createAuctionError = action.error;
        break;

      case AllAuctions_REQUEST:
        draft.allAuctionLoading = true;
        draft.allAuctionError = null;
        draft.allAuctionDone = false;
        draft.AuctionData = null;
        break;
      case AllAuctions_SUCCESS:
        draft.allAuctionLoading = false;
        draft.AuctionData = action.data;
        draft.allAuctionDone = true;
        break;
      case AllAuctions_FAILURE:
        draft.allAuctionLoading = false;
        draft.allAuctionError = action.error;
        break;
      default:
        return state;
    }
  });

export default MetamaskReducer;
