import { types } from "../types/types";
import { axiosInstance } from "../plugins/axios";

export const searchTransfusion = (search) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const url = search === "" ? "/transfusion/" : `/transfusion/?search=${search}`
      axiosInstance
        .get(url)
        .then((res) => {
          dispatch(searchTransfusionsAction(res.data.results));
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};

export const createTransfusion = (data) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`/transfusion/`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};

export const updateTransfusion = (data, id) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .put(`/transfusion/${id}/`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};

export const deleteTransfusion = (id) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete(`/transfusion/${id}/`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};

export const searchTransfusionsAction = (res) => ({
    type: types.ListTransfusions,
    payload: {
        transfusions: res
    }
})

