import produce from '$util/produce';
import {
  MARKETPLACE_CANCEl_FAILURE,
  MARKETPLACE_CANCEl_REQUEST,
  MARKETPLACE_CANCEl_SUCCESS,
  MARKETPLACE_GETOWNER_FAILURE,
  MARKETPLACE_GETOWNER_REQUEST,
  MARKETPLACE_GETOWNER_SUCCESS,
  MARKETPLACE_GET_EVENT_FAILURE,
  MARKETPLACE_GET_EVENT_REQUEST,
  MARKETPLACE_GET_EVENT_SUCCESS,
  MARKETPLACE_PURCHASE_FAILURE,
  MARKETPLACE_PURCHASE_REQUEST,
  MARKETPLACE_PURCHASE_SUCCESS,
} from '$reduxsaga/request/types';

export const initialState = {
  getOwnerLoading: false,
  getOwnerDone: false,
  getOwnerError: null,
  purchaseLoading: false,
  purchaseDone: false,
  purchaseError: null,
  cancelLoading: false,
  cancelDone: false,
  cancelError: null,
  getEventLoading: false,
  getEventDone: false,
  getEventError: null,

  userData: null,
  eventData: null,
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
      case MARKETPLACE_CANCEl_REQUEST:
        draft.cancelLoading = true;
        draft.cancelError = null;
        draft.cancelDone = false;
        break;
      case MARKETPLACE_CANCEl_SUCCESS:
        draft.cancelLoading = false;
        draft.cancelDone = true;
        break;
      case MARKETPLACE_CANCEl_FAILURE:
        draft.cancelLoading = false;
        draft.cancelError = action.error;
        break;
      case MARKETPLACE_GET_EVENT_REQUEST:
        draft.getEventLoading = true;
        draft.getEventError = null;
        draft.getEventDone = false;
        break;
      case MARKETPLACE_GET_EVENT_SUCCESS:
        draft.getEventLoading = false;
        draft.getEventDone = true;
        draft.eventData = action.data;
        break;
      case MARKETPLACE_GET_EVENT_FAILURE:
        draft.getEventLoading = false;
        draft.getEventError = action.error;
        break;
      default:
        return state;
    }
  });

export default marketPlaceReducer;
