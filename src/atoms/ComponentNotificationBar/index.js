import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import { formatDate } from "../../dataHelper";

const ComponentNotificationBar = ({ subscriptionEndDate }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px",
        borderRadius: "4px",
        background: "#5CB85C33",
      }}
    >
      <p
        style={{
          color: "#45A645",
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: "14px",
          margin: "0px",
        }}
      >
        Your Plan will expire on {formatDate(subscriptionEndDate)}
      </p>
      <CloseOutlined style={{ cursor: "pointer" }} />
    </div>
  );
};

export default ComponentNotificationBar;
