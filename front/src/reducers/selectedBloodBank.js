import { types } from "../types/types";

export const selectedBloodBankReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SelectBloodBankt:
        return action.payload.bloodBank;
    default:
      return state;
  }
};
