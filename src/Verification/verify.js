import React, { useState } from "react";
import "./verify.css";

import { Form, Input, Button, message } from "antd";
import { Footer } from "../Component/Footer";

const Verify = ({ setActiveKey, bulk }) => {
  const OTP = 2535;

  const [form] = Form.useForm();

  const [pass, setPass] = useState(false);

  const [state, setState] = useState("");

  const onFinish = () => {
    if (state == OTP) {
      setPass(false);
      setActiveKey("4");
      console.log("called");
    } else {
      setPass(true);
      console.log(state);
    }
  };

  return (
    <div className="eli-tab-items">
      <div className="eli-heading">OTP Verification</div>
      <Form
        form={form}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "20px",
        }}
      >
        <p className="eli-content">
          <span>
            You will receive the verification code to your registered email
            under 5 minutes.
            <br />
            If you still have not received the verification code, Please try
            after some time.
          </span>
        </p>
        <div className="eli-content" style={{ fontSize: "14px" }}>
          We have've sent the address and mail to your mobile -
          <span style={{ textDecoration: "underline" }}> {bulk.mobile}</span>{" "}
          and email -
          <span style={{ textDecoration: "underline" }}>{bulk.email}</span>
        </div>
        <Form.Item name="otp">
          <input
            className="form-control input"
            placeholder="Enter Verification Code"
            prefix={"OTP : "}
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
          {pass ? <div className="errors">Incorrect OTP</div> : ""}
        </Form.Item>
        <p className="eli-content">
          <span>
            Please confirm the details entered in this page is accurate before
            clicking to the next page, to the page.
            <br />
            The data might be cleared if you return
          </span>
        </p>
        <div>{}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            margin: "50px",
            height: "20%",
          }}
        >
          <Button type="primary" onClick={onFinish}>
            {"Next >>"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Verify;
