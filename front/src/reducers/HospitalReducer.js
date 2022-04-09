import { types } from "../types/types";

export const hospitalReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ListHospitals:
        return [...action.payload.hospitals];
    default:
      return state;
  }
};
