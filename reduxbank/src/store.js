import { applyMiddleware, combineReducers, createStore } from "redux";
import customerReducer from "./features/customers/CustomerSlice";

import accountReducer from "./features/account/AccountSlice";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
