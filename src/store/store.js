import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "../state/reducer";

export default createStore(
  combineReducers({ reducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
