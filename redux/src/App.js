import React from "react";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import BalanceDisplay from "./features/account/BalanceDisplay";
import AccountOperations from "./features/account/AccountOperations";
import { useSelector } from "react-redux";

function App() {
//update here
//also here

//also her

  const fullName = useSelector((store) => store.customer.fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!fullName ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
