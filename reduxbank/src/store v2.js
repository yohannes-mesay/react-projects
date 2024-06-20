import { combineReducers, createStore } from "redux";
import customerReducer from "./features/customers/CustomerSlice";
import accountReducer from "./features/account/AccountSlice";
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);
export default store;