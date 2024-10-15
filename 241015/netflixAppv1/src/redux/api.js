import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: { "Content-type": "application/json" },
});

api.interceptors.request.use(
  function (config) {
    console.log("request start", config);
    return config;
  },
  function (error) {
    console.error("request error", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    console.log("get response", response);
    return response;
  },
  function (error) {
    console.error("response error", error);
    return Promise.reject(error);
  }
);

export default api;
