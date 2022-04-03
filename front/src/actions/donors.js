import { types } from "../types/types";
import { axiosInstance } from "../plugins/axios";

export const searchDonors = (search) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const url = search === "" ? "/donors/" : `/donors/?blood_group=${search}`
      axiosInstance
        .get(url)
        .then((res) => {
          dispatch(searchDonorsAction(res.data.results));
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};

export const createDonor = (data) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`/donors/`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};

export const updateDonor = (data, id) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .put(`/donors/${id}/`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};

export const deleteDonor = (id) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete(`/donors/${id}/`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};

export const searchDonorsAction = (res) => ({
    type: types.ListDonors,
    payload: {
        donors: res
    }
})

