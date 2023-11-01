import { Col, Form, Row, Select, notification } from "antd";
import "./Profile.css";
import ComponentInput from "../../atoms/ComponentInput";
import ComponentButton from "../../atoms/ComponentButton";
import ProfileUpdate from "../../assets/svg-icons/profile-update.svg";
import EditIcon from "../../assets/svg-icons/edit-icon.svg";
import MainContainer from "../../sub-components/MainContainer";
import { useEffect, useState } from "react";
import UpdatePasswordModal from "../../sub-components/UpdatePasswordModal";
import { getUserInfoHook, updatePasswordHook, updateUserHook } from "../../api-hooks/user";

const Profile = () => {
  const [updatePasswordModal, setUpdatePasswordModal] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();
  const [user, setUser] = useState(null)
 

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

  const openNotificationWithIcon = (type) => {
    notification.success({
      message: 'Profile Updated Successfully!',
    })
    // api[type]({
    //   message: 'Profile Updated Successfully!',
    // });
  };

  useEffect(() => {
    getUserInfoHook((response) => {
      setUser(response)
      console.log("User Response", response)
      // form.setFieldValue("name", response?.name)
     form.setFieldsValue({
      firstName: response?.firstName,
      lastName: response?.lastName,
      email: response?.email,
      phoneNumber: response?.phoneNumber,
      country: response?.country
     })

    })
  }, [])

  const onFinish = (values) => {
    console.log("Profile Values", values)
    updateUserHook(values, (response) => {
      console.log("Profile User Sucessfully!", response);
      openNotificationWithIcon("success")

    })

  }
  return (
    <>
      <MainContainer>
        <div className="profile-component">
          <h6>Profile</h6>
          <h3>Edit your profile</h3>
          <div className="profile-form" style={{ marginTop: "32px" }}>
            <Form style={{ maxWidth: "calc(100% - 220px)", width: "100%" }} form={form} onFinish={onFinish}>
              <h6>BASIC DETAILS</h6>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="firstName">
                    <ComponentInput placeholder="Martin"  style={{
                    width: "100%",
                  }}/>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="lastName">
                    <ComponentInput
                      placeholder="Schleifer"
                      value={"Schleifer"}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name="email">
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
                  <Form.Item name="phoneNumber">
                    <ComponentInput
                      placeholder="+1 414 567 8764"
                     
                      rules={[{ type: "number" }]}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="country"> 
                    <Select
                      allowClear
                      placeholder="Select Location"
                  
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
              {/* <Form.Item>
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
              </Form.Item> */}
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
                    htmlType="submit"
                   
                  />
                </Form.Item>
              </div>
            </Form>
            
          </div>
        </div>
      </MainContainer>
      {updatePasswordModal && (
        <UpdatePasswordModal
          open={updatePasswordModal}
          handleClose={() => setUpdatePasswordModal(false)}
          title={"Update Password"}
         
          onFinish={(values) => {
         
            if(values?.password && values?.confirmPassword && user?.id){
              console.log("Password Values", values, user?.id);
              updatePasswordHook({
                ...values,
                userId: user?.id
              }, (response) => {
                console.log("Password Updated Successfully!", response);
                notification.success({
                  message:"Password Updated Successfully!"
                })
                setUpdatePasswordModal(false)
              })
            }

          }}
        />
      )}
    </>
  );
};

export default Profile;
