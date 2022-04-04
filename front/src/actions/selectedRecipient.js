import { types } from "../types/types";

export const selectedRecipientAction = (res) => ({
    type: types.SelectRecipient,
    payload: {
        recipient: res 
    }
})

