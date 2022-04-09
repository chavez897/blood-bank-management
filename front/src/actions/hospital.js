import { types } from "../types/types";
import { axiosInstance } from "../plugins/axios";

export const searchHospital = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get("/hospitals/")
        .then((res) => {
          dispatch(searchHospitalsAction(res.data.results));
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};

export const searchHospitalsAction = (res) => ({
    type: types.ListHospitals,
    payload: {
        hospitals: res
    }
})