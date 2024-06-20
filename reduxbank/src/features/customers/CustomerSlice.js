import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const CustomerSlice = createSlice({
  name: "customer",
  initialStateCustomer,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload.fullName;
    },
  },
});
export const { createCustomer, updateName } = CustomerSlice.actions;
export default CustomerSlice.reducer;
/*
  export default function customerReducer(state = initialStateCustomer, action) {
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
  
  
  export function createCustomer(fullName, nationalId) {
    console.log(fullName,"dkj")
    return {
      type: "customer/created",
      payload: { fullName, nationalId, createdAt: new Date().toISOString() },
    };
  }
  export function updateName(fullName) {
    return {
      type: "account/updateName",
      payload: fullName,
    };
  }*/
