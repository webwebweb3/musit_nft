import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import userReducer from './user_reducer';
import auctionReducer from './auction_reducer';
import uploadS3 from './uploadMusic_reducer';
import marketPlaceReducer from './marketPlace_reducer';
import studioReducer from './studio_reducer';
import musicReducer from './music_reducer';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user: userReducer,
        auction: auctionReducer,
        s3: uploadS3,
        market: marketPlaceReducer,
        studio: studioReducer,
        music: musicReducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
