import axios from "axios";
import api from "./api-interceptor";

export const loginHook = (values, callback) => {
  const data = JSON.stringify({
    email: values.email,
    password: values.password,
  });
  api
    .post("/users/authenticate", data)
    .then(function (response) {
      console.log("response auth",response)
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
};

export const signupHook = (values, callback) => {
  const data = JSON.stringify({
    email: values?.email,
    firstName: values.firstName,
    lastName: values?.lastName,
    password: values.password,
    confirmPassword: values?.confirmPassword,
  });
  api
    .post("/users/register", data)
    .then(function (response) {
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
};

export const getUserInfoHook = (callback) => {
  api
    .get("/users/me")
    .then(function (response) {
      callback(response?.data);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
  //   const authToken = localStorage.getItem("authToken");
  //   const config = {
  //     method: "get",
  //     url: `${process.env.REACT_APP_API}/auth/me`,
  //     headers: {
  //       Authorization: `Bearer ${authToken}`,
  //     },
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       callback(response?.data?.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       callback(error);
  //     });
};
