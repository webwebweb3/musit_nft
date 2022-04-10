import produce from '../../util/produce';
import {
  METAMASK_FAILURE,
  METAMASK_LOGIN_FAILURE,
  METAMASK_LOGIN_REQUEST,
  METAMASK_LOGIN_SUCCESS,
  METAMASK_REQUEST,
  METAMASK_SUCCESS,
} from '../request/types';

export const initialState = {
  metamaskLoading: false,
  metamaskDone: false,
  metamaskError: null,
  metamaskLoginLoading: false,
  metamaskLoginDone: false,
  metamaskLoginError: null,
  metamaskData: null,
};

const MetamaskReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case METAMASK_REQUEST:
        draft.metamaskLoading = true;
        draft.metamaskError = null;
        draft.metamaskDone = false;
        draft.metamaskLoginLoading = false;
        draft.metamaskLoginError = null;
        draft.metamaskLoginDone = false;
        draft.metamaskData = null;
        break;
      case METAMASK_SUCCESS:
        draft.metamaskLoading = false;
        draft.metamaskData = action.data;
        draft.metamaskDone = true;
        break;
      case METAMASK_FAILURE:
        draft.metamaskLoading = false;
        draft.metamaskError = action.error;
        break;
      case METAMASK_LOGIN_REQUEST:
        draft.metamaskLoading = false;
        draft.metamaskError = null;
        draft.metamaskDone = false;
        draft.metamaskLoginLoading = true;
        draft.metamaskLoginError = null;
        draft.metamaskLoginDone = false;
        draft.metamaskData = null;
        break;
      case METAMASK_LOGIN_SUCCESS:
        draft.metamaskLoginLoading = false;
        draft.metamaskData = action.data;
        draft.metamaskLoginDone = true;
        break;
      case METAMASK_LOGIN_FAILURE:
        draft.metamaskLoginLoading = false;
        draft.metamaskLoginError = action.error;
        break;
      default:
        return state;
    }
  });

export default MetamaskReducer;
