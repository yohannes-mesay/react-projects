import { combineReducers, createStore } from "redux";
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payloan":
      return {
        ...state,
        loanPurpose: "",
        balance: state.balance - state.loan,
        loan: 0,
      };
    default:
      return state;
  }
}
function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/created":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
function payLoan() {
  return { type: "account/payloan" };
}
store.dispatch(deposit(50));
console.log(store.getState());

store.dispatch(requestLoan(20, "gambling"));

console.log(store.getState());
store.dispatch(payLoan());
console.log("payed", store.getState());
function createCustomer(fullName, nationalId) {
  return {
    type: "customer/created",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}
function updateName(fullName) {
  return {
    type: "account/updateName",
    payload: fullName,
  };
}
store.dispatch(createCustomer("tanos bekele", "2244"));
console.log(store.getState());
