import React from "react";
import SignUpSideImage from "../../assets/svg-icons/loginSideImage.svg";

import { Col, Row, message } from "antd";
import { useNavigate } from "react-router";
import { DASHBOARD_URL, LOGIN_URL } from "../../routes";
import SignUpAuthContainer from "../../sub-components/AuthContainer/SignUpAuthContainer";
import { signupHook } from "../../api-hooks/user";

const SignUp = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    if (values.firstName && values.email && values.password) {
      signupHook(values, (response) => {
        console.log("getting response", response);
        if (response?.message) {
          message.error(response?.message);
        } else {
          if (response?.data?.success) {
            window.location.href = "/";
          }
        }
      });
    }
  };
  return (
    <SignUpAuthContainer
      imgSrc={SignUpSideImage}
      onFinish={onFinish}
      title={"Create a new account"}
    />
  );
};

export default SignUp;
