import { Col, Form, Row, Select } from "antd";
import "./Profile.css";
import ComponentInput from "../../atoms/ComponentInput";
import ComponentButton from "../../atoms/ComponentButton";
import ProfileUpdate from "../../assets/svg-icons/profile-update.svg";
import EditIcon from "../../assets/svg-icons/edit-icon.svg";
import MainContainer from "../../sub-components/MainContainer";
import { useState } from "react";
import UpdatePasswordModal from "../../sub-components/UpdatePasswordModal";

const Profile = () => {
  const [updatePasswordModal, setUpdatePasswordModal] = useState(false);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const dummyList = [
    {
      label: "Hong Kong",
      value: "hongkong",
    },
  ];
  const dummyListAddress = [
    {
      label: "Address",
      value: "address",
    },
  ];
  return (
    <>
      <MainContainer>
        <div className="profile-component">
          <h6>Profile</h6>
          <h3>Edit your profile</h3>
          <div className="profile-form" style={{ marginTop: "32px" }}>
            <Form style={{ maxWidth: "calc(100% - 220px)", width: "100%" }}>
              <h6>BASIC DETAILS</h6>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item>
                    <ComponentInput placeholder="Martin" value={"Martin"} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <ComponentInput
                      placeholder="Schleifer"
                      value={"Schleifer"}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <ComponentInput
                  placeholder="martinschleifer@gmail.com"
                  value={"martinschleifer@gmail.com"}
                  rules={[{ type: "email" }]}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item>
                    <ComponentInput
                      placeholder="+1 414 567 8764"
                      value={"+1 414 567 8764"}
                      rules={[{ type: "number" }]}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Select
                      allowClear
                      placeholder="Select Location"
                      onChange={handleChange}
                      options={dummyList}
                      style={{
                        height: "48px",
                        borderRadius: "9px",
                        border: "none",
                        fontWeight: "600",
                        fontSize: "15px",
                        background: "#f4f4f4",
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <Select
                  allowClear
                  placeholder="Address"
                  onChange={handleChange}
                  options={dummyListAddress}
                  style={{
                    height: "48px",
                    borderRadius: "9px",
                    border: "none",
                    background: "#f4f4f4",
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                />
              </Form.Item>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  gap: "8px",
                }}
              >
                <Form.Item>
                  <ComponentButton
                    title={"Update Password"}
                    style={{
                      width: "160px",
                      fontSize: "15px",
                      fontWeight: "700",
                      height: "48px",
                      backgroundColor: "#FCFCFC",
                      color: "#1A1D1F",
                      border: "2px solid #EFEFEF",
                    }}
                    onClick={() => {
                      setUpdatePasswordModal(true);
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <ComponentButton
                    title={"Update"}
                    style={{
                      width: "160px",
                      fontSize: "15px",
                      fontWeight: "700",
                      height: "48px",
                      backgroundColor: "#2A85FF",
                      color: "#FFFFFF",
                    }}
                    onClick={() => {
                      console.log("");
                    }}
                  />
                </Form.Item>
              </div>
            </Form>
            <div className="updated-profile-image">
              <img src={ProfileUpdate} alt="profile-update" />
              <div className="edit-icon-pos">
                <img src={EditIcon} alt="edit icon" />
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
      {updatePasswordModal && (
        <UpdatePasswordModal
          open={updatePasswordModal}
          handleClose={() => setUpdatePasswordModal(false)}
          title={"Update Password"}
          onFinish={() => {
            console.log("");
          }}
        />
      )}
    </>
  );
};

export default Profile;
