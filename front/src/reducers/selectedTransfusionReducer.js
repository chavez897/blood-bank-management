import { types } from "../types/types";

export const selectedTransfusionReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SelectTransfusion:
        return action.payload.transfusion;
    default:
      return state;
  }
};
