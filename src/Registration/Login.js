import React, { useEffect, useState } from "react";
import { Form, Input, Button, message, InputNumber } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";

const Login = ({ setActiveKey, bulk, setBulk }) => {
  const onFinish = () => {};

  const [data, setData] = useState({
    email: "",
    number: "",
  });

  const Formik = useFormik({
    initialValues: {
      email: "",
      number: "",
    },
    onSubmit: (e) => {
      setData(e);
      setActiveKey("3");
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid Email").required("Email ID Required"),
      number: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(6000000000, "invalid Number")
        .max(9999999999, "number must be with in 10 digits")
        .required("A phone number is required"),
    }),
  });

  useEffect(() => {
    setBulk({ ...bulk, email: data.email, mobile: data.number });
  }, [data]);

  return (
    <div className="eli-tab-items">
      <div className="eli-heading">Verify With Email</div>
      <div className="eli-tab-items" style={{ margin: "30px" }}>
        <form onSubmit={Formik.handleSubmit} className="eli-content">
          <div className="form1">
            <div className="form-input">
              <label>Mobile Number </label>
              <Input
                name="number"
                placeholder="Enter mobile number"
                onChange={Formik.handleChange}
              ></Input>
              <div className="form-err">
                {Formik.errors.number && Formik.touched.number
                  ? Formik.errors.number
                  : null}
              </div>
            </div>
            <div className="form-input">
              <label> Email ID </label>
              <Input
                name="email"
                onChange={Formik.handleChange}
                placeholder="Enter email ID"
              ></Input>
              <div className="form-err">
                {Formik.errors.email && Formik.touched.email
                  ? Formik.errors.email
                  : null}
              </div>
            </div>
            <div className="form-button">
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </div>
            <div className="form-button">
              <Button
                style={{ backgroundColor: "#23c46c" }}
                type="primary"
                onClick={() => console.log(bulk)}
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
