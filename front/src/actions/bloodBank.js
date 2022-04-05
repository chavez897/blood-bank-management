import { types } from "../types/types";
import { axiosInstance } from "../plugins/axios";

export const searchBloodBank = (search) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const url =
        search === "" ? "/bloodBank/" : `/bloodBank/?blood_group=${search}`;
      axiosInstance
        .get(url)
        .then((res) => {
          dispatch(searchBloodBankAction(res.data.results));
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};

export const createBloodBank = (data) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`/bloodBank/`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};

export const updateBloodBank = (data, id) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .put(`/bloodBank/${id}/`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};

export const deleteBloodBank = (id) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete(`/bloodBank/${id}/`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};

export const searchBloodBankAction = (res) => ({
  type: types.ListBloodBank,
  payload: {
    bloodBank: res,
  },
});
