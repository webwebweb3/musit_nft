import produce from '../util/produce';

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../_actions/types';

export const initialState = {
  logInUserLoading: false,
  logInUserDone: false,
  logInUserError: null,
  userData: null,
};

const UserReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
        draft.logInUserLoading = true;
        draft.logInUserError = null;
        draft.logInUserDone = false;
        break;
      case LOGIN_USER_SUCCESS:
        draft.logInUserLoading = false;
        draft.userData = action.data;
        draft.logInUserDone = true;
        break;
      case LOGIN_USER_FAILURE:
        draft.logInUserLoading = false;
        draft.logInUserError = action.error;
        break;
      default:
        return state;
    }
  });

export default UserReducer;
