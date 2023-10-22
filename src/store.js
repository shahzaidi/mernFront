import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./Redux/Reducers/ProductsReducer";

const composeEnhansers = composeWithDevTools({});

const rootReducer = combineReducers({
  productsReducer: productsReducer,
});

const innetialState = {};

const store = createStore(
  rootReducer,
  innetialState,
  composeEnhansers(applyMiddleware(thunk))
);

export default store;
