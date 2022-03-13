import { combineReducers } from 'redux';
import user from './user_reducer';
import metamask from './metamask_reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['user', 'metamask'],
};

const rootReducer = combineReducers({
  user,
  metamask,
});

export default persistReducer(persistConfig, rootReducer);
