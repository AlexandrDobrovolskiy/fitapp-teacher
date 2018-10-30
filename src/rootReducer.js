import { combineReducers } from 'redux'

import { sessionReducer as session } from 'redux-react-session'

const rootReducer = combineReducers({
  session
});

export default rootReducer;