import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import sections from "./sections";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  sections,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
