import { types } from "../types/types";

export const selectedTransfusionAction = (res) => ({
    type: types.SelectTransfusion,
    payload: {
        transfusion: res 
    }
})

