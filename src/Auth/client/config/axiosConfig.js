import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';

export const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = token;
};

export const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = null;
};
