import { Button } from "antd";

import React from "react";

export const Footer = ({ onFinish, con }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        margin: "50px",
        height: "20%",
      }}
    >
      <Button type="primary" htmlType="submit">
        {"Next >>"}
      </Button>
    </div>
  );
};
