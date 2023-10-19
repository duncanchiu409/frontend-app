import { Form, Input } from "antd";
import ComponentInput from "../../atoms/ComponentInput";
import ComponentModal from "../../atoms/ComponentModal";
import ComponentButton from "../../atoms/ComponentButton";
import "./UpdatePasswordModal.css";

const UpdatePasswordModal = ({ open, handleClose, title, onFinish }) => {
  return (
    <ComponentModal
      open={open}
      handleClose={handleClose}
      title={title}
      width={"500px"}
    >
      <Form layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Password"
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
            }}
          />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
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
            }}
          />
        </Form.Item>
        <Form.Item>
          <ComponentButton
            title={"Update"}
            style={{
              width: "100%",
              fontSize: "16px",
              height: "48px",
              backgroundColor: "#EB1551",
              fontWeight:'500',
              color:'#ffffff'
            }}
            type="submit"
            // onClick={onFinish}
          />
        </Form.Item>
      </Form>
    </ComponentModal>
  );
};

export default UpdatePasswordModal;
