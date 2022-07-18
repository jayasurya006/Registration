import { Button } from "antd";

import React from "react";

export const Footer = ({ onFinish, con }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        margin: "50px",
        height: "20%",
      }}
    >
      <Button> {"<< Back"}</Button>
      <Button type="primary" htmlType="submit">
        {"Next >>"}
      </Button>
    </div>
  );
};
