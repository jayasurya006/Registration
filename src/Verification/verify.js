import React from "react";
import "./verify.css";

import { Form, Input, Button, message } from "antd";
import { Footer } from "../Component/Footer";

const Verify = ({ setActiveKey }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    form.validateFields().then((e) => {
      setData(e);
    });
    setActiveKey("4");
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
        <Form.Item
          name="mail"
          rules={[{ required: true, message: "Please input your Email Id!" }]}
        >
          <Input placeholder="Enter Verification Code" prefix={"OTP : "} />
        </Form.Item>
        <p className="eli-content">
          <span>
            Please confirm the details entered in this page is accurate before
            clicking to the next page, to the page.
            <br />
            The data might be cleared if you return
          </span>
        </p>
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
          <Button type="primary" onClick={onFinish}>
            {"Next >>"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Verify;
