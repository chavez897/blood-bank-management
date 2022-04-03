import { types } from "../types/types";

export const selectedDonorAction = (res) => ({
    type: types.SelectDonor,
    payload: {
        donor: res 
    }
})

