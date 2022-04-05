import produce from '../util/produce';
import {
  MARKETPLACE_GETOWNER_FAILURE,
  MARKETPLACE_GETOWNER_REQUEST,
  MARKETPLACE_GETOWNER_SUCCESS,
  MARKETPLACE_PURCHASE_FAILURE,
  MARKETPLACE_PURCHASE_REQUEST,
  MARKETPLACE_PURCHASE_SUCCESS,
} from '../_request/types';

export const initialState = {
  getOwnerLoading: false,
  getOwnerDone: false,
  getOwnerError: null,
  purchaseLoading: false,
  purchaseDone: false,
  purchaseError: null,

  userData: null,
};

const marketPlaceReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case MARKETPLACE_GETOWNER_REQUEST:
        draft.getOwnerLoading = true;
        draft.getOwnerError = null;
        draft.getOwnerDone = false;
        break;
      case MARKETPLACE_GETOWNER_SUCCESS:
        draft.getOwnerLoading = false;
        draft.userData = action.data;
        draft.getOwnerDone = true;
        break;
      case MARKETPLACE_GETOWNER_FAILURE:
        draft.getOwnerLoading = false;
        draft.getOwnerError = action.error;
        break;
      case MARKETPLACE_PURCHASE_REQUEST:
        draft.purchaseNFTLoading = true;
        draft.purchaseNFTError = null;
        draft.purchaseNFTDone = false;
        break;
      case MARKETPLACE_PURCHASE_SUCCESS:
        draft.purchaseNFTLoading = false;
        draft.purchaseNFTDone = true;
        break;
      case MARKETPLACE_PURCHASE_FAILURE:
        draft.purchaseNFTLoading = false;
        draft.purchaseNFTError = action.error;
        break;
      default:
        return state;
    }
  });

export default marketPlaceReducer;
