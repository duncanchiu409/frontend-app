import { Input } from "antd";
import React from "react";

const ComponentInput = ({ value,onBlur, onChange,onPressEnter, style, ...props}) => {
  return (
    <Input
      value={value}
      style={{ border: "1px solid #ADADAD", borderRadius: "7px",color:"#6F767E", ...style }}
      {...props}
      onChange={(e) => {
        let _val = e.target.value;
        if (_val !== value && onChange) {
          onChange(_val);
        }
      }}
      onBlur={(e) => {
        let _val = e.target.value;
        if (onPressEnter) {
          onPressEnter(_val);
        }
      }}
      onPressEnter={(e) => {
        let _val = e.target.value;
        if (onPressEnter) {
          onPressEnter(_val);
        }
      }}
      
    />
  );
};

export default ComponentInput;
