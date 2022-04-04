import produce from '../util/produce';
import {
  AUCTION_CREATE_REQUEST,
  AUCTION_CREATE_SUCCESS,
  AUCTION_CREATE_FAILURE,
  AUCTION_ALL_REQUEST,
  AUCTION_ALL_SUCCESS,
  AUCTION_ALL_FAILURE,
  AUCTION_INFO_REQUEST,
  AUCTION_INFO_SUCCESS,
  AUCTION_INFO_FAILURE,
  AUCTION_REQUEST,
  AUCTION_SUCCESS,
  AUCTION_FAILURE,
  AUCTION_CANCEL_REQUEST,
  AUCTION_CANCEL_SUCCESS,
  AUCTION_CANCEL_FAILURE,
  AUCTION_BID_REQUEST,
  AUCTION_BID_SUCCESS,
  AUCTION_BID_FAILURE,
  AUCTION_MYBID_REQUEST,
  AUCTION_MYBID_SUCCESS,
  AUCTION_MYBID_FAILURE,
} from '../_request/types';

export const initialState = {
  createAuctionLoading: false,
  createAuctionDone: false,
  createAuctionError: null,
  allAuctionLoading: false,
  allAuctionDone: false,
  allAuctionError: null,
  infoAuctionLoading: false,
  infoAuctionDone: false,
  infoAuctionError: null,
  auctionLoading: false,
  auctionDone: false,
  auctionError: null,
  cancelAuctionLoading: false,
  cancelAuctionDone: false,
  cancelAuctionError: null,
  bidAuctionLoading: false,
  bidAuctionDone: false,
  bidAuctionError: null,
  myBidAuctionLoading: false,
  myBidAuctionDone: false,
  myBidAuctionError: null,
  myBidData: null,
  allAuctionData: null,
  auctionData: null,
};

const MetamaskReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case AUCTION_CREATE_REQUEST:
        draft.createAuctionLoading = true;
        draft.createAuctionError = null;
        draft.createAuctionDone = false;
        break;
      case AUCTION_CREATE_SUCCESS:
        draft.createAuctionLoading = false;
        draft.createAuctionDone = true;
        break;
      case AUCTION_CREATE_FAILURE:
        draft.createAuctionLoading = false;
        draft.createAuctionError = action.error;
        break;
      case AUCTION_ALL_REQUEST:
        draft.allAuctionLoading = true;
        draft.allAuctionError = null;
        draft.allAuctionDone = false;
        draft.allAuctionData = null;
        break;
      case AUCTION_ALL_SUCCESS:
        draft.allAuctionLoading = false;
        draft.allAuctionData = action.data;
        draft.allAuctionDone = true;
        break;
      case AUCTION_ALL_FAILURE:
        draft.allAuctionLoading = false;
        draft.allAuctionError = action.error;
        break;
      case AUCTION_REQUEST:
        draft.auctionLoading = true;
        draft.auctionError = null;
        draft.auctionDone = false;
        break;
      case AUCTION_SUCCESS:
        draft.auctionLoading = false;
        draft.auctionDone = true;
        break;
      case AUCTION_FAILURE:
        draft.auctionLoading = false;
        draft.auctionError = action.error;
        break;
      case AUCTION_INFO_REQUEST:
        draft.infoAuctionLoading = true;
        draft.infoAuctionError = null;
        draft.infoAuctionDone = false;
        draft.auctionData = null;
        break;
      case AUCTION_INFO_SUCCESS:
        draft.infoAuctionLoading = false;
        draft.auctionData = action.data;
        draft.infoAuctionDone = true;
        break;
      case AUCTION_INFO_FAILURE:
        draft.infoAuctionLoading = false;
        draft.infoAuctionError = action.error;
        break;
      case AUCTION_CANCEL_REQUEST:
        draft.cancelAuctionLoading = true;
        draft.cancelAuctionError = null;
        draft.cancelAuctionDone = false;
        break;
      case AUCTION_CANCEL_SUCCESS:
        draft.cancelAuctionLoading = false;
        draft.cancelAuctionDone = true;
        break;
      case AUCTION_CANCEL_FAILURE:
        draft.cancelAuctionLoading = false;
        draft.cancelAuctionError = action.error;
        break;
      case AUCTION_BID_REQUEST:
        draft.bidAuctionLoading = true;
        draft.bidAuctionError = null;
        draft.bidAuctionDone = false;
        break;
      case AUCTION_BID_SUCCESS:
        draft.bidAuctionLoading = false;
        draft.bidAuctionDone = true;
        break;
      case AUCTION_BID_FAILURE:
        draft.bidAuctionLoading = false;
        draft.bidAuctionError = action.error;
        break;
      case AUCTION_MYBID_REQUEST:
        draft.myBidAuctionLoading = true;
        draft.myBidAuctionError = null;
        draft.myBidAuctionDone = false;
        draft.myBidData = null;
        break;
      case AUCTION_MYBID_SUCCESS:
        draft.myBidAuctionLoading = false;
        draft.myBidAuctionDone = true;
        draft.myBidData = action.data;
        break;
      case AUCTION_MYBID_FAILURE:
        draft.myBidAuctionLoading = false;
        draft.myBidAuctionError = action.error;
        break;
      default:
        return state;
    }
  });

export default MetamaskReducer;
