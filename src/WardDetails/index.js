/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import { Form, Input, Select, DatePicker, Button } from "antd";
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
      prof_of_sports: "",
      gender: "",
      height: "",
      aadhar_no: "",
      special_eads: "",
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
        .min(2, "Too shor")
        .max(25, "To long ")
        .required("Name Required"),
      class: Yup.string().required("A class is required"),
      weight: Yup.number()
        .min(20, "Give proper weight")
        .required("weight is required")
        .typeError("Must be in number"),
      nationality: Yup.string().required("nationality is required"),
      religion: Yup.string().required("religion is required"),
      community: Yup.string().required("Community is required"),
      last_name: Yup.string()
        .min(2, "Too shor")
        .max(25, "To long ")
        .required("Name Required"),
      dob: Yup.string().required("dob required"),
      blood_group: Yup.string().required("blood group required"),
      mother_tongue: Yup.string().required("mother tongue is required"),
      extra_curricular: Yup.string().required(" required"),
      prof_of_sports: Yup.string().required("required"),
      gender: Yup.string().required("gender is is required"),
      height: Yup.number()
        .min(3, "Give proper height")
        .required("height is required")
        .typeError("Must be in number"),
      aadhar_no: Yup.number()
        .min(100000000000, "Must be 12 digits")
        .max(999999999999, "Must be 12 digits")
        .required("Aadhar no is required")
        .typeError("Must be in number"),
      special_eads: Yup.string().required("special eads is required"),
      board: Yup.string().required("A board is required"),
      applicant_photo: Yup.mixed()
        .nullable()
        .required("image required")
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
        .required("image required")
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
        .required("image required")
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
        .required("Distance is required")
        .typeError("Must be in number"),
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
                {Formik.errors.first_name && Formik.touched.first_name
                  ? Formik.errors.first_name
                  : null}
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Last Name"
                  name="last_name"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                {Formik.errors.last_name && Formik.touched.last_name
                  ? Formik.errors.last_name
                  : null}
              </Form.Item>
              <Form.Item className="formChild">
                <Select
                  name="gender"
                  placeholder="Gender"
                  allowClear
                  onChange={(e) => Formik.setFieldValue("gender", e)}
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
                {Formik.errors.gender && Formik.touched.gender
                  ? Formik.errors.gender
                  : null}
              </Form.Item>
              <Form.Item className="formChild">
                <Select
                  placeholder="Class"
                  allowClear
                  name="class"
                  onChange={(e) => Formik.setFieldValue("class", e)}
                >
                  <Option value="LKg">LKG</Option>
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
                {Formik.errors.class && Formik.touched.class
                  ? Formik.errors.class
                  : null}
              </Form.Item>
              <Form.Item className="formChild">
                <DatePicker
                  placeholder="DOB"
                  style={{ width: "100%" }}
                  name="dob"
                  onChange={(e) => Formik.setFieldValue("dob", e)}
                />
                {Formik.errors.dob && Formik.touched.dob
                  ? Formik.errors.dob
                  : null}
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Height"
                  name="height"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                {Formik.errors.height && Formik.touched.height
                  ? Formik.errors.height
                  : null}
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Weight"
                  name="weight"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                {Formik.errors.weight && Formik.touched.weight
                  ? Formik.errors.weight
                  : null}
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
                {Formik.errors.blood_group && Formik.touched.blood_group
                  ? Formik.errors.blood_group
                  : null}
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Aadhar Number"
                  name="aadhar_no"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                {Formik.errors.aadhar_no && Formik.touched.aadhar_no
                  ? Formik.errors.aadhar_no
                  : null}
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Nationality"
                  name="nationality"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                {Formik.errors.nationality && Formik.touched.nationality
                  ? Formik.errors.nationality
                  : null}
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Mother Tongue"
                  name="mother_tongue"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                {Formik.errors.mother_tongue && Formik.touched.mother_tongue
                  ? Formik.errors.mother_tongue
                  : null}
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Special Eeds"
                  name="special_eads"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                {Formik.errors.special_eads && Formik.touched.special_eads
                  ? Formik.errors.special_eads
                  : null}
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
                {Formik.errors.religion && Formik.touched.religion
                  ? Formik.errors.religion
                  : null}
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Extra Curricular Activity"
                  name="extra_curricular"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                {Formik.errors.extra_curricular &&
                Formik.touched.extra_curricular
                  ? Formik.errors.extra_curricular
                  : null}
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
                {Formik.errors.board && Formik.touched.board
                  ? Formik.errors.board
                  : null}
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Distance"
                  name="distance"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                {Formik.errors.distance && Formik.touched.distance
                  ? Formik.errors.distance
                  : null}
              </Form.Item>
              <Form.Item className="formChild">
                <Input
                  placeholder="Proficiency in Sports"
                  name="prof_of_sports"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                {Formik.errors.prof_of_sports && Formik.touched.prof_of_sports
                  ? Formik.errors.prof_of_sports
                  : null}
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
                {Formik.errors.community && Formik.touched.community
                  ? Formik.errors.community
                  : null}
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
                    onChange={(e) =>
                      Formik.setFieldValue("age_proof", e.target.files[0])
                    }
                  />
                </div>
                <div className="errors">
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
                    onChange={(e) =>
                      Formik.setFieldValue("applicant_photo", e.target.files[0])
                    }
                  />
                </div>
                <div className="errors">
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
                    onChange={(e) =>
                      Formik.setFieldValue("aadhar_card", e.target.files[0])
                    }
                  />
                  <div className="errors">
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
