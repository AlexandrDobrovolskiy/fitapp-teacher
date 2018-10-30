import { combineReducers } from 'redux'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { sessionReducer as session } from 'redux-react-session'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({
  session,
});

export default persistReducer(rootPersistConfig, rootReducer);