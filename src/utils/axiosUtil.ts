import axios from "axios";

export const Api = () => {
  const api = axios.create();
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (401 === error) {
        return Promise.reject(error?.response?.statusText);
      }
      if (404 === error) {
        return Promise.reject(error?.response?.statusText);
      }
      if (500 === error?.response?.status) {
        return Promise.reject(error?.response?.statusText);
      }

      return Promise.reject(error?.response?.statusText);
    }
  );
  return api;
};
