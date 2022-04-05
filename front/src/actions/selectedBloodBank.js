import { types } from "../types/types";

export const selectedBloodBankAction = (res) => ({
    type: types.SelectBloodBankt,
    payload: {
        bloodBank: res 
    }
})

