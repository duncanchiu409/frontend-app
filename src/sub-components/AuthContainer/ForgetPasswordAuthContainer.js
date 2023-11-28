import React from "react";
import { ReactComponent as OcLogo } from "../../assets/svg-icons/transparentLogo.svg";
import logoImage from "../../assets/treehouse_no_bg.png";
import { Button, Col, Form, Input, Row } from "antd";
import "./AuthContainer.css";
import ComponentInput from "../../atoms/ComponentInput";
import ComponentButton from "../../atoms/ComponentButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  HOME_URL,
  LOGIN_URL,
  RESET_PASSWORD_URL,
  SIGN_UP_URL,
} from "../../routes";
import LoginSideImage from "../../assets/svg-icons/loginSideImage.svg";

const ForgetPasswordAuthContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="login-background">
      <div className="header">
        {/* <OcLogo /> */}
        <img src={logoImage} style={{ height: "70px" }} />
      </div>
      <div className="auth-container">
        <Row className="auth-container-row">
          <Col span={12} className="login-form">
            <div className="form-pos">
              <h2 style={{ marginBottom: "0px" }}>Forgot Password?</h2>
              <p
                style={{
                  marginBottom: "40px",
                  marginTop: "5px",
                  fontWeight: "500",
                }}
              >
                Fill the form to reset your password
              </p>
              <Form
                // onFinish={onFinish}
                autoComplete="off"
                initialValues={{ remember: true }}
                style={{ maxWidth: "451px" }}
                layout="vertical"
              >
                <Form.Item
                  label="Enter your Email address"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter your Email Address!",
                    },
                  ]}
                >
                  <ComponentInput
                    placeholder="Email address"
                    style={{
                      height: "48px",
                      borderRadius: "9px",
                      width: "451px",
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <ComponentButton
                    title={"Send Reset Link"}
                    style={{
                      width: "100%",
                      fontSize: "18px",
                      height: "54px",
                      backgroundColor: "#0089ED",
                      color: "#ffffff",
                    }}
                    type="submit"
                    htmlType="submit"
                    onClick={() => {
                      navigate(RESET_PASSWORD_URL);
                    }}
                  />
                </Form.Item>
                <div
                  style={{
                    textAlign: "center",
                    color: "#8D8D8D",
                    fontSize: "16px",
                  }}
                >
                  Return To{" "}
                  <Link to={LOGIN_URL}>
                    <span style={{ color: "#0089ED", cursor: "pointer" }}>
                      Sign In
                    </span>
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
          <Col span={12}>
            <img
              src={LoginSideImage}
              style={{ width: "100%", maxWidth: "520px" }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ForgetPasswordAuthContainer;
