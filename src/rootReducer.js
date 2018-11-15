import { combineReducers } from 'redux'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import session from "./components/Auth/reducer";
import drawer from "./components/SideBar/reducer";
import schedule from "./components/Schedule/reducer";

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['drawer']
}

const rootReducer = combineReducers({
  session,
  schedule,
  drawer
});

export default persistReducer(rootPersistConfig, rootReducer);