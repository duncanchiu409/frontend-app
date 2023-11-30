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

const SignUpCompletionAuthContainer = () => {
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
              <h2 style={{ marginBottom: "0px" }}>Complete Verfication</h2>
              <p
                style={{
                  marginBottom: "40px",
                  marginTop: "5px",
                  fontWeight: "500",
                }}
              >
                Complete your sign up by clicking verification link in email
              </p>
              <Form
                // onFinish={onFinish}
                autoComplete="off"
                initialValues={{ remember: true }}
                style={{ maxWidth: "451px" }}
                layout="vertical"
              >
                <div
                  style={{
                    textAlign: "start",
                    color: "#8D8D8D",
                    fontSize: "16px",
                  }}
                >
                  Return To{" "}
                  <Link to={LOGIN_URL}>
                    <span style={{ color: "#15B9EB", cursor: "pointer" }}>
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

export default SignUpCompletionAuthContainer;
