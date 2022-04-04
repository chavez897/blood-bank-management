import { types } from "../types/types";
import { axiosInstance } from "../plugins/axios";

export const searchRecipients = (search) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const url = search === "" ? "/recipients/" : `/recipients/?search=${search}`
      axiosInstance
        .get(url)
        .then((res) => {
          dispatch(searhRecipientsAction(res.data.results));
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};

export const createRecipients = (data) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`/recipients/`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};

export const updateRecipients = (data, id) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .put(`/recipients/${id}/`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};

export const deleteRecipient = (id) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete(`/recipients/${id}/`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data.errors);
      });
  });
};

export const searhRecipientsAction = (res) => ({
    type: types.ListRecipients,
    payload: {
        recipients: res
    }
})

