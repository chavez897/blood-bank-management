import { types } from "../types/types";
import { axiosInstance } from "../plugins/axios";

export const searchDoctors = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get("/users/")
        .then((res) => {
          dispatch(searchDoctorsAction(res.data.results));
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};

export const searchDoctorsAction = (res) => ({
    type: types.ListDoctors,
    payload: {
        doctors: res
    }
})