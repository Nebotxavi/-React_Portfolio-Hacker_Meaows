import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL; // https://hn.algolia.com/api/v1/

axios.interceptors.response.use(null, error => {
  console.log("Network error: ", error);

  return Promise.reject(error);
});

export default {
  get: axios.get
};
