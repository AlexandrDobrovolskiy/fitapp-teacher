import { combineReducers } from 'redux'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import session from "./components/Auth/reducer";
import drawer from "./components/SideBar/reducer";

const rootPersistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({
  session,
  drawer
});

export default persistReducer(rootPersistConfig, rootReducer);