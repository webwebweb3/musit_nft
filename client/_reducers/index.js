import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import userReducer from './user_reducer';
import metamaskReducer from './metamask_reducer';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const rootPersistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['user'],
// };

// const authPersistConfig = {
//   key: 'user',
//   storage,
//   whitelist: ['userData'],
// };

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user: userReducer,
        metamask: metamaskReducer,
      });
      return combinedReducer(state, action);
    }
  }
};

// export default persistReducer(rootPersistConfig, rootReducer);
export default rootReducer;
