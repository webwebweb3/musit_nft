import { METAMASK_USER } from '../_actions/types';

const MetamaskReducer = (state = {}, action) => {
  switch (action.type) {
    case METAMASK_USER:
      return { ...state, userMetamask: action.userMetamask };
    default:
      return state;
  }
};

export default MetamaskReducer;
