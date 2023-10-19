import React from "react";
import { ReactComponent as OcLogo } from "../../assets/svg-icons/transparentLogo.svg";
import { Button, Col, Form, Input, Row } from "antd";
import "./AuthContainer.css";
import ComponentInput from "../../atoms/ComponentInput";
import ComponentButton from "../../atoms/ComponentButton";
import { Link, Navigate } from "react-router-dom";
import { HOME_URL, LOGIN_URL, SIGN_UP_URL } from "../../routes";

const SignUpAuthContainer = ({ imgSrc, onFinish, title }) => {
  return (
    <div className="login-background">
      <div className="header">
        <OcLogo />
      </div>
      <div className="auth-container signup-margin">
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
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  className="signup-name"
                >
                  <Form.Item
                    label="Enter your First Name"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter your First Name!",
                      },
                    ]}
                  >
                    <ComponentInput
                      placeholder="First Name"
                      style={{
                        height: "48px",
                        borderRadius: "9px",
                        // width: "451px",
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Enter your last name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter your Last Name!",
                      },
                    ]}
                  >
                    <ComponentInput
                      placeholder="Last Name"
                      style={{
                        height: "48px",
                        borderRadius: "9px",
                        // width: "451px",
                      }}
                    />
                  </Form.Item>
                </div>
                <Form.Item
                  label="Enter your email address"
                  name="email"
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
                <Form.Item
                  label="Confirm your password"
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please Confirm your Password",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Confirm Password"
                    style={{
                      height: "48px",
                      borderRadius: "9px",
                      width: "451px",
                    }}
                  />
                </Form.Item>
                <Form.Item label="Referal Code (optional)">
                  <ComponentInput
                    placeholder="Referal Code"
                    style={{
                      height: "48px",
                      borderRadius: "9px",
                      width: "451px",
                    }}
                  />
                </Form.Item>

                <Form.Item>
                  <ComponentButton
                    title={"Sign Up"}
                    style={{
                      width: "100%",
                      fontSize: "18px",
                      height: "54px",
                      backgroundColor: "#0089ED",
                      color: "#ffffff",
                      marginBottom: "14px",
                    }}
                    htmlType="submit"
                  />
                </Form.Item>

                <div
                  style={{
                    textAlign: "center",
                    color: "#8D8D8D",
                    fontSize: "16px",
                  }}
                >
                  Already have an account ?{" "}
                  <Link to={LOGIN_URL}>
                    <span style={{ color: "#0089ED", cursor: "pointer" }}>
                      Sign in
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

export default SignUpAuthContainer;
