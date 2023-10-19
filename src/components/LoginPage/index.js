import React from "react";
import "./login.css";
import LoginSideImage from "../../assets/svg-icons/loginSideImage.svg";
import { useNavigate } from "react-router";
import { DASHBOARD_URL } from "../../routes";
import LoginAuthContainer from "../../sub-components/AuthContainer/loginAuthContainer";
import { loginHook } from "../../api-hooks/user";
import { message } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    if (values.email && values.password) {
      loginHook(values, (response) => {
        console.log("response data",response)
        if (response?.message) {
          message.error(response?.message);
        } else {
          if (response?.data?.token) {
            console.log("Login response", response?.data?.token);
            localStorage.setItem("authToken", response?.data?.token);

            window.location.href = "/dashboard";
          }
        }
      });
    }
  };

  return (
    <LoginAuthContainer
      imgSrc={LoginSideImage}
      onFinish={onFinish}
      title={"Sign In"}
    />
  );
};

export default Login;
