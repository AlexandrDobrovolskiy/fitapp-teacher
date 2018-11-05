import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist"
import { composeWithDevTools } from "redux-devtools-extension";
import rootReduser from "./rootReducer";

const devMiddleware = [];
const middleware = [thunk];

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  middleware.push(...devMiddleware);
}

const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
export { store };