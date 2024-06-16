import { applyMiddleware, combineReducers, createStore } from "redux";
import customerReducer from "./features/customers/CustomerSlice";

import accountReducer from "./features/account/AccountSlice";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
const store =configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },

  
},applyMiddleware(thunk));



export default store;
