import { legacy_createStore as createStore, compose } from "redux";
import { rootReducer } from "./rootReducer.ts";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());
