import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import metamaskReducer from './metamask_reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const authPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['userData'],
};

const rootReducer = combineReducers({
  user: persistReducer(authPersistConfig, userReducer),
  metamask: metamaskReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
