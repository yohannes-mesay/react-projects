
const initialStateCustomer = {
    fullName: "",
    nationalId: "",
    createdAt: "",
  };
  
  
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
  }