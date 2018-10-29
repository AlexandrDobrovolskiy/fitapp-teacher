import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { sessionService } from 'redux-react-session'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReduser from './rootReducer'

const devMiddleware = []
const middleware = [thunk];

if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
  middleware.push(...devMiddleware);
}

const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(...middleware))
);

sessionService.initSessionService(store);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, 
document.querySelector('#root'));

serviceWorker.unregister(); 
