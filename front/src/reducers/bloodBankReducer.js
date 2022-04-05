import { types } from "../types/types";

export const bloodBankReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ListBloodBank:
        return [...action.payload.bloodBank];
    default:
      return state;
  }
};
