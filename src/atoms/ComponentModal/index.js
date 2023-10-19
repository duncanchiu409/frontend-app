import { Modal } from "antd";

const ComponentModal = ({
  open,
  handleOk,
  handleClose,
  title,
  children,
  width,
}) => {
  return (
    <Modal
      visible={open}
      title={title}
      style={{ borderRadius: "4px" }}
      width={width}
      onOk={handleOk}
      onCancel={handleClose}
      footer={null}
    >
      {children}
    </Modal>
  );
};
export default ComponentModal;