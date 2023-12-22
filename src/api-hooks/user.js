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
      console.log("response auth", response);
      callback(response);
    })
    .catch(function (error) {
      console.log("Error", error);
      callback(error?.response?.data);
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
      console.log("Error", error);
      callback(error?.response?.data);
    });
};

export const forgotPasswordHook = (values, callback) => {
  const data = JSON.stringify({
    email: values?.email,
  });
  api
  .post("/users/forgot-password", data)
  .then(function (response) {
    callback(response?.data);
  })
  .catch(function (error) {
    console.log("Error", error);
    callback(error?.response?.data);
  });
}

export const resetPasswordHook = (values, callback) => {
  const data = JSON.stringify({
    token: values?.token,
    password: values?.password,
    confirmPassword: values?.confirmPassword
  });
  api
  .post("/users/reset-password", data)
  .then(function (response) {
    callback(response);
  })
  .catch(function (error) {
    console.log("Error", error);
    callback(error?.response?.data);
  });
}

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

export const updateUserHook = (values, callback) => {
  const data = JSON.stringify({
    email: values?.email,
    firstName: values.firstName,
    lastName: values?.lastName,
    country: values?.country,
    phoneNumber: values?.phoneNumber,
  });
  api
    .put("/users/update", data)
    .then(function (response) {
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
};

export const updatePasswordHook = (values, callback) => {
  const data = JSON.stringify({
    userId: values?.userId,
    password: values.password,
    confirmPassword: values?.confirmPassword,
  });
  api
    .post("/users/update-password", data)
    .then(function (response) {
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
};

export const getPaymentPlansHook = (callback) => {
  api
    .get("/payments/plans")
    .then(function (response) {
      callback(response?.data);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
};

export const subscribeToPlan = (planId, callback) => {
  api
    .post("/payments/createStripeSession", {
      planId: planId,
    })
    .then(function (response) {
      callback(response);
    })
    .catch(function (error) {
      callback(error);
    });
};

export const validatePayment = (sessionId, callback) => {
  api
    .post("/payments/verifySession", { sessionId })
    .then(function (response) {
      callback(response);
    })
    .catch(function (error) {
      callback(error);
    });
};

export const getBooksCreated = (userId, callback) => {
  const token = localStorage.getItem("authToken");
  let getDataStatus = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_PY_API}/user/usage?customer_id=${userId}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios.request(getDataStatus).then((response) => {
    console.log("Total Book Used", response);
    callback(response?.data);
  });
};

export const getInvoiceHistoryHook = (callback) => {
  api
    .get("/payments/stripeInvoiceHistory")
    .then(function (response) {
      callback(response?.data);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
};

export const getBooksCreatedByUser = (userId, callback) => {
  const token = localStorage.getItem("authToken");
  let getDataStatus = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_PY_API}/book/customer?customer_id=${userId}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios.request(getDataStatus).then((response) => {
    console.log("Total Books Created", response);
    callback(response?.data);
  });
};

export const downloadHook = (sessionId, callback) => {
  const token = localStorage.getItem("authToken");
  let getDownloadLink = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_PY_API}/book/download?session_id=${sessionId}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios.request(getDownloadLink).then((response) => {
    console.log("Total Books Created", response);
    callback(response?.data);
  });
};
// subscribeToPlan = (planId) => {
//   return this.httpClient.post(
//     `${environment.apiurl}/payments/createStripeSession`,
//     { planId }
//   );
// };
