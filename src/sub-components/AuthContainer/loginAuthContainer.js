import React from "react";
import { ReactComponent as OcLogo } from "../../assets/svg-icons/transparentLogo.svg";
import logoImage from "../../assets/treehouse_no_bg.png";
import { Button, Col, Form, Input, Row } from "antd";
import "./AuthContainer.css";
import ComponentInput from "../../atoms/ComponentInput";
import ComponentButton from "../../atoms/ComponentButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FORGOT_PASSWORD_URL, SIGN_UP_URL } from "../../routes";

const LoginAuthContainer = ({ imgSrc, onFinish, title }) => {
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
              <h2>{title}</h2>
              <Form
                onFinish={onFinish}
                autoComplete="off"
                initialValues={{ remember: true }}
                style={{ maxWidth: "451px" }}
                layout="vertical"
              >
                <Form.Item
                  label="Enter your username or email address"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter your UserName or Email Address!",
                    },
                  ]}
                >
                  <ComponentInput
                    placeholder="Username or email address"
                    style={{
                      height: "48px",
                      borderRadius: "9px",
                      width: "451px",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="Enter your password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter your Password",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    style={{
                      height: "48px",
                      borderRadius: "9px",
                      width: "451px",
                    }}
                  />
                </Form.Item>
                <Form.Item className="forgetBtn">
                  <Link to={FORGOT_PASSWORD_URL}>
                    <span style={{color:"#15B9EB"}}>Forgot Password?</span>
                  </Link>
                </Form.Item>
                <Form.Item>
                  <ComponentButton
                    title={"Sign In"}
                    style={{
                      width: "100%",
                      fontSize: "18px",
                      height: "54px",
                      backgroundColor: "#15B9EB",
                      color: "#ffffff",
                    }}
                    htmlType="submit"
                  />
                </Form.Item>
                <Form.Item></Form.Item>
                <div
                  style={{
                    textAlign: "center",
                    color: "#8D8D8D",
                    fontSize: "16px",
                  }}
                >
                  No Account ?{" "}
                  <Link to={SIGN_UP_URL}>
                    <span style={{ color: "#15B9EB", cursor: "pointer" }}>
                      Sign up
                    </span>
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
          <Col span={12}>
            <img src={imgSrc} style={{ width: "100%", maxWidth: "520px" }} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginAuthContainer;
