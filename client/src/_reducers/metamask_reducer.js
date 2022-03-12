import { METAMASK_USER } from '../_actions/types';

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case METAMASK_USER:
      return { ...state, metamask: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
