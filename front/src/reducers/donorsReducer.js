import { types } from "../types/types";

export const donorsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ListDonors:
        return [...action.payload.donors];
    default:
      return state;
  }
};
