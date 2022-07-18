import React from "react";
import "./index.css";
import { MailOutlined } from "@ant-design/icons";

export default function () {
  return (
    <div className="sidebar">
      <div
        className="sidebar-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="sidebar-image"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={"/dav.jpg"} alt=""></img>
        </div>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-details">
          <div className="sidebar-details-heading" style={{ fontSize: "15px" }}>
            Contact
          </div>
          <p className="eli-content">
            <span>
              <MailOutlined
                style={{
                  marginRight: "3px",
                  marginBottom: "7px",
                  lineHeight: "3px",
                }}
              />
              info@mvmcbe.com
            </span>
          </p>
          <p className="eli-content">
            <span></span> 0433-3665457 | 7708070029
          </p>
        </div>
      </div>
    </div>
  );
}
