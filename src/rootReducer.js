import { combineReducers } from 'redux'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import { drawer, schedule, session, groups } from "lib/reducers";

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['drawer']
}

const rootReducer = combineReducers({
  session,
  schedule,
  drawer,
  groups
});

export default persistReducer(rootPersistConfig, rootReducer);