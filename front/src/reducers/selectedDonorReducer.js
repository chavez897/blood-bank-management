import { types } from "../types/types";

export const selectedDonorReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SelectDonor:
        return action.payload.donor;
    default:
      return state;
  }
};
