import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-Type": "application/json",
  },
});


// console.log("REACT_APP_API", process.env.REACT_APP_API)
api.interceptors.request.use(
  (config) => {
    console.log("App Env", process.env.REACT_APP_API);
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log("I am getting called");
      localStorage.clear();
      // window.location.href = "/";
      return (window.location.href = "/login");
    }
    return Promise.reject(error);
  }
);
export default api;
