import { types } from "../types/types";

export const transfusionReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ListTransfusions:
        return [...action.payload.transfusions];
    default:
      return state;
  }
};
