import { types } from "../types/types";

export const recipientsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ListRecipients:
        return [...action.payload.recipients];
    default:
      return state;
  }
};
