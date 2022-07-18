import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Form, Formik, Field } from "formik";
import "./index.css";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { Footer } from "../Component/Footer";
import * as Yup from "yup";

const Parent = ({ setActiveKey, bulk, setBulk }) => {
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
  const [data, setData] = useState({});

  useEffect(() => {
    setBulk((e) => {
      return {
        ...e,
        parent_details: data,
      };
    });
  }, [data]);

  const onFinish = () => {
    // form.validateFields().then((e) => {
    //   setData(e);
    // });
  };

  const Call = () => {
    const formData = new FormData();
    formData.append("parent_details", JSON.stringify(bulk.parent_details));
    formData.append("relevant_type", bulk.relevent_type);
    formData.append("email", bulk.email);
    formData.append("applicant_photo", bulk.student_details.applicant_photo);
    formData.append("adhar_photo", bulk.student_details.aadhar_card);
    formData.append("age_proof", bulk.student_details.age_proof);
    formData.append("father_photo", bulk.parent_details.mother_details?.photo);
    formData.append("mother_photo", bulk.parent_details.father_details?.photo);
    formData.append("mobile", bulk.mobile);
    formData.append("student_details", JSON.stringify(bulk.student_details));
    formData.append("address", JSON.stringify(bulk.address));

    console.log(bulk);
    axios.post("http://192.168.0.112:3002/user/create", formData);
  };

  const inital = {
    father_details: {
      first_name: "",
      last_name: "",
      mobile_no: "",
      email: "",
      qualification: "",
      occupation: "",
      work: "",
      income: "",
      photo: "",
    },
    mother_details: {
      first_name: "",
      last_name: "",
      mobile_no: "",
      email: "",
      qualification: "",
      occupation: "",
      work: "",
      income: "",
      photo: "",
    },
  };

  const schema = Yup.object({
    father_details: Yup.object({
      first_name: Yup.string()
        .required("First Name is required")
        .min(3, "too short"),
      last_name: Yup.string()
        .required("Last Name is required")
        .min(3, "too short"),

      mobile_no: Yup.number()
        .typeError("invalid number")
        .min(6000000000, "invalid number")
        .max(9999999999, "invalid number")
        .required(" number is required"),
      email: Yup.string()
        .email("invalid email")
        .required("Email is required")
        .typeError("invalid"),
      qualification: Yup.string()
        .required("Qualification is required")
        .min(2, "invalid"),
      occupation: Yup.string()
        .required("Ocuupation is required")
        .min(3, "invalid"),

      work: Yup.string().required("Work is required").min(5, "invalid"),

      income: Yup.number()
        .min(5000, "invalid")
        .required("Income is required")
        .typeError("invalid income"),
      photo: Yup.mixed()
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
    }),
    mother_details: Yup.object({
      first_name: Yup.string()
        .required("First Name is required")
        .min(3, "too short"),
      last_name: Yup.string()
        .required("Last Name is required")
        .min(3, "too short"),

      mobile_no: Yup.number()
        .typeError("invalid number")
        .min(6000000000, "invalid number")
        .max(9999999999, "invalid number")
        .required(" number is required"),
      email: Yup.string()
        .email("invalid email")
        .required("Email is required")
        .typeError("invalid"),
      qualification: Yup.string()
        .required("Qualification is required")
        .min(3, "invalid"),
      occupation: Yup.string()
        .required("Ocuupation is required")
        .min(3, "invalid"),
      work: Yup.string().required("Work is required").min(5, "invalid"),
      income: Yup.number()
        .min(5000, "invalid")
        .required("Income is required")
        .typeError("invalid income"),
      photo: Yup.mixed()
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
    }),
  });

  return (
    <div className="eli-tab-items">
      <Formik
        initialValues={inital}
        validationSchema={schema}
        onSubmit={(e) => {
          setData(e);
          Call();
        }}
      >
        {({ errors, touched, values, setFieldValue }) => {
          return (
            <Form className="Parent-container">
              <div className="Parent-child">
                <div className="eli-heading" style={{ alignSelf: "center" }}>
                  Father details
                </div>
                <div>
                  <Field
                    name="father_details.first_name"
                    placeholder="FirstName"
                    className="form-control n-2 Parent-child1"
                  ></Field>
                  <div>
                    {errors?.father_details?.first_name &&
                      touched?.father_details?.first_name &&
                      errors?.father_details?.first_name}
                  </div>
                </div>
                <div>
                  <Field
                    name="father_details.last_name"
                    placeholder="LastName"
                    className="form-control n-2 Parent-child2"
                  ></Field>
                  <div>
                    {errors?.father_details?.last_name &&
                      touched?.father_details?.last_name &&
                      errors?.father_details?.last_name}
                  </div>
                </div>
                <div>
                  <Field
                    name="father_details.mobile_no"
                    placeholder="MobileNumber"
                    className="form-control n-2 Parent-child3"
                  ></Field>
                  <div>
                    {errors?.father_details?.mobile_no &&
                      touched?.father_details?.mobile_no &&
                      errors?.father_details?.mobile_no}
                  </div>
                </div>
                <div>
                  <Field
                    name="father_details.email"
                    placeholder="Email"
                    className="form-control n-2 Parent-child4"
                  ></Field>
                  <div>
                    {errors?.father_details?.email &&
                      touched?.father_details?.email &&
                      errors?.father_details?.email}
                  </div>
                </div>
                <div>
                  <Field
                    name="father_details.qualification"
                    placeholder="Qualification"
                    className="form-control n-2 Parent-child5"
                  ></Field>
                  <div>
                    {errors?.father_details?.qualification &&
                      touched?.father_details?.qualification &&
                      errors?.father_details?.qualification}
                  </div>
                </div>
                <div>
                  <Field
                    name="father_details.occupation"
                    placeholder="Occupation"
                    className="form-control n-2 Parent-child6"
                  ></Field>
                  <div>
                    {errors?.father_details?.occupation &&
                      touched?.father_details?.occupation &&
                      errors?.father_details?.occupation}
                  </div>
                </div>
                <div>
                  <Field
                    name="father_details.work"
                    placeholder="Place of Work"
                    className="form-control n-2 Parent-child7"
                  ></Field>
                  <div>
                    {errors?.father_details?.work &&
                      touched?.father_details?.work &&
                      errors?.father_details?.work}
                  </div>
                </div>

                <div>
                  <Field
                    name="father_details.income"
                    placeholder="Income"
                    className="form-control n-2 Parent-child8"
                  ></Field>
                  <div>
                    {errors?.father_details?.income &&
                      touched?.father_details?.income &&
                      errors?.father_details?.income}
                  </div>
                </div>
                <div className="Parent-child9">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <p className="eli-content">
                      <span style={{ fontSize: "18px", textAlign: "center" }}>
                        Father Photo
                      </span>
                      <br />
                      <span>
                        Upload document for Photo
                        <br />
                        (Only JPG or JPEG or PNG or PDF Format)*
                      </span>
                    </p>
                    <label
                      for="myFile6"
                      style={{
                        outline: "none",
                        padding: "5px 10px",
                        backgroundColor: "#1890ff",
                        borderRadius: "2px",
                        color: "#efefef",
                        marginLeft: "15px",
                      }}
                    >
                      <UploadOutlined style={{ marginRight: "5px" }} />
                      Upload
                    </label>
                    <input
                      type="file"
                      id="myFile6"
                      name="father_details.photo"
                      onChange={(e) =>
                        setFieldValue("father_details.photo", e.target.files[0])
                      }
                      hidden
                    />
                  </div>
                  <div>
                    {errors?.father_details?.photo &&
                      touched?.father_details?.photo &&
                      errors?.father_details?.photo}
                  </div>
                </div>
              </div>

              <div className="Parent-child">
                <div className="eli-heading" style={{ alignSelf: "center" }}>
                  Mother details
                </div>
                <div>
                  <Field
                    name="mother_details.first_name"
                    placeholder="FirstName"
                    className="form-control n-2 Parent-child1"
                  ></Field>
                  <div>
                    {errors?.mother_details?.first_name &&
                      touched?.mother_details?.first_name &&
                      errors?.mother_details?.first_name}
                  </div>
                </div>
                <div>
                  <Field
                    name="mother_details.last_name"
                    placeholder="LastName"
                    className="form-control n-2 Parent-child2"
                  ></Field>
                  <div>
                    {errors?.mother_details?.last_name &&
                      touched?.mother_details?.last_name &&
                      errors?.mother_details?.last_name}
                  </div>
                </div>
                <div>
                  <Field
                    name="mother_details.mobile_no"
                    placeholder="MobileNumber"
                    className="form-control n-2 Parent-child3"
                  ></Field>
                  <div>
                    {errors?.mother_details?.mobile_no &&
                      touched?.mother_details?.mobile_no &&
                      errors?.mother_details?.mobile_no}
                  </div>
                </div>
                <div>
                  <Field
                    name="mother_details.email"
                    placeholder="Email"
                    className="form-control n-2 Parent-child4"
                  ></Field>
                  <div>
                    {errors?.mother_details?.email &&
                      touched?.mother_details?.email &&
                      errors?.mother_details?.email}
                  </div>
                </div>
                <div>
                  <Field
                    name="mother_details.qualification"
                    placeholder="Qualification"
                    className="form-control n-2 Parent-child5"
                  ></Field>
                  <div>
                    {errors?.mother_details?.qualification &&
                      touched?.mother_details?.qualification &&
                      errors?.mother_details?.qualification}
                  </div>
                </div>
                <div>
                  <Field
                    name="mother_details.occupation"
                    placeholder="Occupation"
                    className="form-control n-2 Parent-child6"
                  ></Field>
                  <div>
                    {errors?.mother_details?.occupation &&
                      touched?.mother_details?.occupation &&
                      errors?.mother_details?.occupation}
                  </div>
                </div>
                <div>
                  <Field
                    name="mother_details.work"
                    placeholder="Place of Work"
                    className="form-control n-2 Parent-child7"
                  ></Field>
                  <div>
                    {errors?.mother_details?.work &&
                      touched?.mother_details?.work &&
                      errors?.mother_details?.work}
                  </div>
                </div>

                <div>
                  <Field
                    name="mother_details.income"
                    placeholder="Income"
                    className="form-control n-2 Parent-child8"
                  ></Field>
                  <div>
                    {errors?.mother_details?.income &&
                      touched?.mother_details?.income &&
                      errors?.mother_details?.income}
                  </div>
                </div>
                <div className="Parent-child9">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <p className="eli-content">
                      <span style={{ fontSize: "18px", textAlign: "center" }}>
                        Mather Photo
                      </span>
                      <br />
                      <span>
                        Upload document for Photo
                        <br />
                        (Only JPG or JPEG or PNG or PDF Format)*
                      </span>
                    </p>
                    <label
                      for="myFile5"
                      style={{
                        outline: "none",
                        padding: "5px 10px",
                        backgroundColor: "#1890ff",
                        borderRadius: "2px",
                        color: "#efefef",
                        marginLeft: "15px",
                      }}
                    >
                      <UploadOutlined style={{ marginRight: "5px" }} />
                      Upload
                    </label>
                    <input
                      type="file"
                      id="myFile5"
                      name="mother_details.photo"
                      onChange={(e) =>
                        setFieldValue("mother_details.photo", e.target.files[0])
                      }
                      hidden
                    />
                  </div>
                  <div>{errors?.mother_details?.photo}</div>
                </div>
              </div>
              <div className="Parent-footer">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    margin: "50px",
                    height: "20%",
                  }}
                >
                  <Button onClick={() => setActiveKey("4")}>
                    {" "}
                    {"<< Preview"}{" "}
                  </Button>
                  <Button type="primary" htmlType="submit">
                    {"Submit"}
                  </Button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Parent;
