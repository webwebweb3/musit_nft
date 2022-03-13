import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
} from '../_actions/types';

const initialState = {
  isLoggedIn: false,
  register: false,
  userData: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        register: action.payload.success,
      };
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: action.request.loginSuccess,
        userData: action.request.userData,
      };
    case AUTH_USER:
      return {
        ...state.user,
        userData: action.payload.user,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: action.loginSuccess,
        userData: null,
      };
    default:
      return state;
  }
};

export default UserReducer;
