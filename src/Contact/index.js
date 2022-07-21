import { MailOutlined } from "@ant-design/icons";
import React from "react";
import "./index.css";

const Contact = () => {
  return (
    <>
      <div className="cont">
        <div>
          <h1>
            <span>Contact Us</span>
          </h1>
        </div>
        <div>
          <p className="">
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
            <span>0433-3665457 | 7708070029</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
