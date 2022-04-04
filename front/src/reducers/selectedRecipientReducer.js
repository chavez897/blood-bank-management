import { types } from "../types/types";

export const selectedRecipientReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SelectRecipient:
        return action.payload.recipient;
    default:
      return state;
  }
};
