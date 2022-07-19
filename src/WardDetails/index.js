/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import { Form, Input, Select, DatePicker, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./index.css";
import Upload from "../Component/Upload";
import axios from "axios";
import { Footer } from "../Component/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ({ setActiveKey, bulk, setBulk }) {
  const Option = { Select };
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

  const Formik = useFormik({
    initialValues: {
      first_name: "",
      class: "",
      weight: "",
      nationality: "",
      religion: "",
      community: "",
      last_name: "",
      dob: "",
      blood_group: "",
      mother_tongue: "",
      extra_curricular: "",
      prof_in_sports: "",
      gender: "",
      height: "",
      aadhar_no: "",
      age: "",
      board: "",
      distance: "",
      aadhar_card: null,
      age_proof: null,
      applicant_photo: null,
    },
    onSubmit: (e) => {
      setData(e);
      setActiveKey("6");
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(5, "Too Short")
        .max(25, "To Long ")
        .required("Name Required"),
      class: Yup.string().required("A Class is Required"),
      weight: Yup.number()
        .min(20, "Give Proper Weight")
        .max(150, "Give Correct Weight")
        .required("Weight is Required")
        .typeError("Must be in number"),
      nationality: Yup.string()
        .min(5, "Invalid")
        .required("Nationality is required"),
      religion: Yup.string().required("Religion is Required"),
      community: Yup.string().required("Community is Required"),
      last_name: Yup.string()
        .min(5, "Too Short")
        .max(25, "To Long ")
        .required("Name Required"),
      dob: Yup.string().required("Date of birth Required"),
      blood_group: Yup.string().required("Blood Group Required"),
      mother_tongue: Yup.string()
        .min(5, "Invalid")
        .required("Mother Tongue Is Required"),
      extra_curricular: Yup.string().min(5, "Invalid").required(" Required"),
      prof_in_sports: Yup.string().min(5, "Invalid").required("Required"),
      gender: Yup.string().required("Gender is Required"),
      height: Yup.number()
        .min(80, "Give Proper Height")
        .max(200, "Give Correct Height")
        .required("Height is Required")
        .typeError("Must be in Number"),
      aadhar_no: Yup.number()
        .min(100000000000, "Must be 12 digits")
        .max(999999999999, "Must be 12 digits")
        .required("Aadhar no is Required")
        .typeError("Must be in Number"),
      age: Yup.number()
        .min(3, "Invalid 3-20")
        .max(20, "Invalid 3-20")
        .typeError("Invalid")
        .required("age is Required"),
      board: Yup.string().required(" Board is Required"),
      applicant_photo: Yup.mixed()
        .nullable()
        .required("Image Required")
        .test(
          "FILE_SIZE",
          "Uploaded file is too big.",
          (value) => !value || (value && value.size <= 1024 * 1024)
        )
        .test(
          "FILE_FORMAT",
          "Uploaded file has unsupported format.",
          (value) =>
            !value || (value && SUPPORTED_FORMATS.includes(value?.type))
        ),
      aadhar_card: Yup.mixed()
        .nullable()
        .required("Image Required")
        .test(
          "FILE_SIZE",
          "Uploaded file is too big.",
          (value) => !value || (value && value.size <= 1024 * 1024)
        )
        .test(
          "FILE_FORMAT",
          "Uploaded file has unsupported format.",
          (value) =>
            !value || (value && SUPPORTED_FORMATS.includes(value?.type))
        ),
      age_proof: Yup.mixed()
        .nullable()
        .required("Image Required")
        .test(
          "FILE_SIZE",
          "Uploaded file is too big.",
          (value) => !value || (value && value.size <= 1024 * 1024)
        )
        .test(
          "FILE_FORMAT",
          "Uploaded file has unsupported format.",
          (value) =>
            !value || (value && SUPPORTED_FORMATS.includes(value?.type))
        ),
      distance: Yup.number()
        .required("Distance is Required")
        .typeError("Must be in Number"),
    }),
  });

  const [data, setData] = useState({});

  const onFinish = () => {
    // console.log("called");
    // form.validateFields().then((e) => {
    //   setData(e);
    //   console.log(e);
    // });
  };

  useEffect(() => {
    setBulk((e) => {
      console.log(e, "bulk");
      return {
        ...e,
        student_details: data,
      };
    });
  }, [data]);

  return (
    <div className="">
      <div className="">
        <form onSubmit={Formik.handleSubmit} className="ward-form">
          <div className="eli-heading" style={{ alignSelf: "center" }}>
            Student Details
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {console.log(Formik)}
            <div style={{ margin: "10px" }} className="form">
              <Form.Item className="formChild">
                <Input
                  placeholder="First Name"
                  name="first_name"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                <div className="errors">
                  {Formik.errors.first_name && Formik.touched.first_name
                    ? Formik.errors.first_name
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Last Name"
                  name="last_name"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                <div className="errors">
                  {Formik.errors.last_name && Formik.touched.last_name
                    ? Formik.errors.last_name
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Select
                  name="gender"
                  placeholder="Gender"
                  allowClear
                  onChange={(e) => Formik.setFieldValue("gender", e)}
                >
                  <Option value="male">male</Option>
                  <Option value="female">Female</Option>
                </Select>
                <div className="errors">
                  {Formik.errors.gender && Formik.touched.gender
                    ? Formik.errors.gender
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Select
                  placeholder="Class"
                  allowClear
                  name="class"
                  onChange={(e) => Formik.setFieldValue("class", e)}
                >
                  <Option value="LKG">LKG</Option>
                  <Option value="UKG">UKG</Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="7">7</Option>
                  <Option value="8">8</Option>
                  <Option value="9">9</Option>
                  <Option value="10">10</Option>
                  <Option value="11">11</Option>
                  <Option value="12">12</Option>
                </Select>
                <div className="errors">
                  {Formik.errors.class && Formik.touched.class
                    ? Formik.errors.class
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <DatePicker
                  placeholder="DOB"
                  style={{ width: "100%" }}
                  name="dob"
                  onChange={(e) => {
                    Formik.setFieldValue("dob", e);
                  }}
                />
                <div className="errors">
                  {Formik.errors.dob && Formik.touched.dob
                    ? Formik.errors.dob
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Height in CM"
                  name="height"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                <div className="errors">
                  {Formik.errors.height && Formik.touched.height
                    ? Formik.errors.height
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Weight in Kg"
                  name="weight"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                <div className="errors">
                  {Formik.errors.weight && Formik.touched.weight
                    ? Formik.errors.weight
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Select
                  placeholder="Blood Group"
                  allowClear
                  name="blood_group"
                  onChange={(e) => Formik.setFieldValue("blood_group", e)}
                >
                  <Option value="A+">A+</Option>
                  <Option value="A-">A-</Option>
                  <Option value="B+">B+</Option>
                  <Option value="B-">B-</Option>
                  <Option value="O+">O+</Option>
                  <Option value="O-">O-</Option>
                </Select>
                <div className="errors">
                  {Formik.errors.blood_group && Formik.touched.blood_group
                    ? Formik.errors.blood_group
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Aadhar Number"
                  name="aadhar_no"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                <div className="errors">
                  {Formik.errors.aadhar_no && Formik.touched.aadhar_no
                    ? Formik.errors.aadhar_no
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Nationality"
                  name="nationality"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                <div className="errors">
                  {Formik.errors.nationality && Formik.touched.nationality
                    ? Formik.errors.nationality
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Mother Tongue"
                  name="mother_tongue"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                <div className="errors">
                  {Formik.errors.mother_tongue && Formik.touched.mother_tongue
                    ? Formik.errors.mother_tongue
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Age"
                  name="age"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                <div className="errors">
                  {Formik.errors.age && Formik.touched.age
                    ? Formik.errors.age
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Select
                  placeholder="Religion"
                  allowClear
                  name="religion"
                  onChange={(e) => Formik.setFieldValue("religion", e)}
                >
                  <Option value="hindu">Hindu</Option>
                  <Option value="christian">Christian</Option>
                  <Option value="muslim">Muslim</Option>
                </Select>
                <div className="errors">
                  {Formik.errors.religion && Formik.touched.religion
                    ? Formik.errors.religion
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Extra Curricular Activity"
                  name="extra_curricular"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                <div className="errors">
                  {Formik.errors.extra_curricular &&
                  Formik.touched.extra_curricular
                    ? Formik.errors.extra_curricular
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Select
                  placeholder="Board"
                  allowClear
                  name="board"
                  onChange={(e) => Formik.setFieldValue("board", e)}
                >
                  <Option value="CBSE">CBSE</Option>
                  <Option value="ICSE">ICSE</Option>
                  <Option value="SAMACHEER">SAMACHEER</Option>
                </Select>
                <div className="errors">
                  {Formik.errors.board && Formik.touched.board
                    ? Formik.errors.board
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Distance"
                  name="distance"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                <div className="errors">
                  {Formik.errors.distance && Formik.touched.distance
                    ? Formik.errors.distance
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Proficiency in Sports"
                  name="prof_in_sports"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                <div className="errors">
                  {Formik.errors.prof_in_sports && Formik.touched.prof_in_sports
                    ? Formik.errors.prof_in_sports
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <Select
                  placeholder="Community"
                  allowClear
                  name="community"
                  onChange={(e) => Formik.setFieldValue("community", e)}
                >
                  <Option value="Fc">Fc</Option>
                  <Option value="BC">BC</Option>
                  <Option value="MBC">MBC</Option>
                  <Option value="SC">SC</Option>
                  <Option value="Muslim BC">Muslim BC</Option>
                </Select>
                <div className="errors">
                  {Formik.errors.community && Formik.touched.community
                    ? Formik.errors.community
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <div style={{ textAlign: "center" }}>
                  <p className="eli-content">
                    <span style={{ fontSize: "16px" }}>Age Proof</span>
                    <br />
                    <span>
                      Upload document for age proof
                      <br />
                      (Only JPG or JPEG or PNG or PDF Format)*
                    </span>
                  </p>
                  <label
                    for="myFile"
                    style={{
                      outline: "none",
                      padding: "5px 10px",
                      backgroundColor: "#1890ff",
                      borderRadius: "2px",
                      color: "#efefef",
                    }}
                  >
                    <UploadOutlined style={{ marginRight: "5px" }} />
                    Upload
                  </label>
                  <input
                    type="file"
                    id="myFile"
                    hidden
                    name="age_proof"
                    onChange={(e) => {
                      Formik.setFieldValue("age_proof", e.target.files[0]),
                        message.success("Successfully Updated");
                    }}
                  />
                </div>
                <div className="errors">
                  {Formik?.values?.age_proof?.name}

                  {Formik.errors.age_proof && Formik.touched.age_proof
                    ? Formik.errors.age_proof
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <div style={{ textAlign: "center" }}>
                  <p className="eli-content">
                    <span style={{ fontSize: "16px" }}>Applicant Photo</span>
                    <br />
                    <span>
                      Upload document for Photo
                      <br />
                      (Only JPG or JPEG or PNG or PDF Format)*
                    </span>
                  </p>
                  <label
                    for="myFile2"
                    style={{
                      outline: "none",
                      padding: "5px 10px",
                      backgroundColor: "#1890ff",
                      borderRadius: "2px",
                      color: "#efefef",
                    }}
                  >
                    <UploadOutlined style={{ marginRight: "5px" }} />
                    Upload
                  </label>
                  <input
                    type="file"
                    id="myFile2"
                    hidden
                    name="applicant_photo"
                    onChange={(e) => {
                      Formik.setFieldValue(
                        "applicant_photo",
                        e.target.files[0]
                      ),
                        message.success("Successfully Updated");
                    }}
                  />
                </div>
                <div className="errors">
                  {Formik?.values?.applicant_photo?.name}

                  {Formik.errors.applicant_photo &&
                  Formik.touched.applicant_photo
                    ? Formik.errors.applicant_photo
                    : null}
                </div>
              </Form.Item>
              <Form.Item className="formChild">
                <div style={{ textAlign: "center" }}>
                  <p className="eli-content">
                    <span style={{ fontSize: "16px" }}>
                      Applicant Aadhar Card
                    </span>
                    <br />
                    <span>
                      Upload document for Aadhar Card
                      <br />
                      (Only JPG or JPEG or PNG or PDF Format)*
                    </span>
                  </p>
                  <label
                    for="myFile3"
                    style={{
                      outline: "none",
                      padding: "5px 10px",
                      backgroundColor: "#1890ff",
                      borderRadius: "2px",
                      color: "#efefef",
                    }}
                  >
                    <UploadOutlined style={{ marginRight: "5px" }} />
                    Upload
                  </label>
                  <input
                    type="file"
                    id="myFile3"
                    hidden
                    name="aadhar_card"
                    onChange={(e) => {
                      Formik.setFieldValue("aadhar_card", e.target.files[0]),
                        message.success("Successfully Updated");
                    }}
                  />
                  <div className="errors">
                    {Formik?.values?.aadhar_card?.name}
                    {Formik.errors.aadhar_card && Formik.touched.aadhar_card
                      ? Formik.errors.aadhar_card
                      : null}
                  </div>
                </div>
              </Form.Item>
            </div>
          </div>
          <Footer />
        </form>
      </div>
    </div>
  );
}
