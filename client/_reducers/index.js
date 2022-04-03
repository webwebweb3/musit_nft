import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import userReducer from './user_reducer';
import metamaskReducer from './metamask_reducer';
import auctionReducer from './auction_reducer';
import uploadS3 from './uploadMusic_reducer';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user: userReducer,
        metamask: metamaskReducer,
        auction: auctionReducer,
        s3: uploadS3,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
