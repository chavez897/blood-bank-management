import { types } from "../types/types";

export const doctorsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ListDoctors:
        return [...action.payload.doctors];
    default:
      return state;
  }
};
