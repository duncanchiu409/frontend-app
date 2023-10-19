import React from "react";
import { Button } from "antd";
const ComponentButton = ({
  title,
  icon,
  style,
  onClick,
  htmlType,
  size,
  disabled,
  loading,
  type,
  ...props
}) => {
  return (
    <Button
      id="btn-0222-1456"
      type={type || "primary"}
      className="component-button"
      icon={icon}
      style={style}
      onClick={onClick}
      htmlType={htmlType}
      size={size}
      disabled={disabled}
      loading={loading}
      {...props}
    >
      {title}
    </Button>
  );
};

export default ComponentButton;
