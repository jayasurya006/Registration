import React, { useEffect, useState } from "react";
import "./cate.css";

import { Input, Radio, Space, Form, Button } from "antd";
import axios from "axios";
import { Footer } from "../Component/Footer";

const AdmissionType = ({ setActiveKey, bulk, setBulk }) => {
  const [relevantType, setReleventType] = useState("General");

  const [data, setData] = useState({});

  useEffect(() => {
    setBulk(() => {
      return { ...bulk, relevent_type: relevantType, alumini_details: data };
    });
  }, [data]);

  const onFinish = () => {
    form.validateFields().then((e) => {
      setData(e);
      setActiveKey("5");
    });
  };

  const [form] = Form.useForm();

  const onChange = (e) => {
    setReleventType(e.target.value);
    form.resetFields();
  };

  const a = {
    parent_details: {
      father_details: {
        email: "sdf@gmail.com",
        first_name: "afds",
        income: "sad",
        last_name: "asd",
        mobile_no: "423",
        occupation: "fgd",
        work: "sd",
      },
      mother_details: {
        email: "he@gmail.com",
        first_name: "asdf",
        income: "sd",
        last_name: "sdf",
        mobile_no: "234",
        occupation: "sdf",
        work: "sdf",
      },
    },
    relevant_type: "General",
    alumini_details: {},
    email: "dasfasd",
    mobile: 234243,
    student_details: {
      Applicantphoto: "C:\\fakepath\\SCHEMAS.txt",
      aadhar_card: "C:\\fakepath\\SCHEMAS.txt",
      aadhar_no: "324",
      ageproof: "C:\\fakepath\\SCHEMAS.txt",
      blood_group: "A-",
      board: "female",
      class: "1",
      community: "male",
      distance: "324",
      date: "Thu Jul 14 2022 18:33:23 GMT+0530 (India Standard Time)",
      extra_curricular: "sdfs",
      first_name: "afds",
      gender: "female",
      height: "324",
      last_name: "fd",
      mother_tongue: "asdd",
      nationality: "sdf",
      prof_in_sports: "daf",
      religion: "christian",
      special_eads: "sd",
      weight: "234",
    },
    address: {
      communication_address: {
        address_1: "asf",
        address_2: "sdf",
        city: "dsf",
        pin_code: 342,
        state: "sdf",
      },
      permanent_address: {
        address_1: "asf",
        address_2: "sdf",
        city: "dsf",
        pin_code: 342,
        state: "sdf",
      },
    },
  };

  const Call = () => {
    axios
      .post("http://192.168.0.112:3002/user/create", a)
      .then((e) => console.log(e));
  };

  return (
    <div>
      <div className="eli-heading">Admission Type</div>
      <div className="eli-content" style={{ margin: "30px" }}>
        <p>Please select the relevant type mentioned below,</p>
        <Form form={form}>
          <Radio.Group onChange={onChange} value={relevantType}>
            <Space direction="vertical">
              <Radio value={"General"}>General</Radio>

              <Radio value={"Father"}>Father As Alumini </Radio>
              {relevantType === "Father" ? (
                <>
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please input your Name!" },
                    ]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>

                  <Form.Item
                    name="year"
                    rules={[
                      {
                        required: true,
                        message: "Please input  your Passed Out Year!",
                      },
                    ]}
                  >
                    <Input placeholder="Year Passed Out" />
                  </Form.Item>
                </>
              ) : null}

              <Radio value={"Mother"}>Mother As Alumini</Radio>
              {relevantType === "Mother" ? (
                <>
                  <Form.Item
                    className="cat-input"
                    name="name"
                    rules={[
                      { required: true, message: "Please input your Name!" },
                    ]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>

                  <Form.Item
                    className="cat-input"
                    name="year"
                    rules={[
                      {
                        required: true,
                        message: "Please input  your Passed Out Year!",
                      },
                    ]}
                  >
                    <Input placeholder="Year Passed Out" />
                  </Form.Item>
                </>
              ) : null}

              <Radio value={"Siblings"}>Sibilings</Radio>

              {relevantType === "Siblings" ? (
                <div>
                  <Form.Item
                    className="cat-input"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Sibiling Name!",
                      },
                    ]}
                  >
                    <Input placeholder="Sibiling Name" />
                  </Form.Item>

                  <Form.Item
                    className="cat-input"
                    name="class"
                    rules={[
                      {
                        required: true,
                        message: "Please input  your Sibiling Class!",
                      },
                    ]}
                  >
                    <Input placeholder="Sibiling Class" />
                  </Form.Item>
                  <Form.Item
                    className="cat-input"
                    name="section"
                    rules={[
                      {
                        required: true,
                        message: "Please input  your Sibiling Section!",
                      },
                    ]}
                  >
                    <Input placeholder="Sibiling Section" />
                  </Form.Item>
                </div>
              ) : null}
            </Space>
          </Radio.Group>
        </Form>
        <div style={{ margin: "10px" }}>
          Please confirm the details entered in this page is accurate before
          clicking to the next page, The data might be cleared if you return to
          the page.
        </div>
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
      </div>
    </div>
  );
};
export default AdmissionType;
