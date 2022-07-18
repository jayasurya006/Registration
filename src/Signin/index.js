import React, { useState } from "react";
import { Checkbox, Card, Button } from "antd";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./index.css";

const Login = () => {
  const value = {
    user_name: "",
    password: "",
  };

  const [check, setCheck] = useState(true);

  const schema = Yup.object({
    user_name: Yup.string()
      .typeError("invalid")
      .required("User Name is required"),
    password: Yup.string().required("password is required"),
  });
  return (
    <div className="signin">
      <Card.Grid className="signin-tab" hoverable={false}>
        <div className="eli-heading">Login</div>
        <Formik
          initialValues={value}
          validationSchema={schema}
          onSubmit={(e) => {
            console.log(e);
          }}
        >
          {({ values, errors, touched }) => {
            return (
              <Form>
                <div style={{ height: "100px" }}>
                  <label>User Name</label>
                  <input
                    className="form-control"
                    placeholder="ex : John wick"
                    name="user_name"
                  ></input>
                  <div className="errors">
                    {errors?.user_name &&
                      touched?.user_name &&
                      errors?.user_name}
                  </div>
                </div>
                <div style={{ height: "100px" }}>
                  <label>Password</label>
                  <input
                    className="form-control"
                    placeholder="Password"
                    name="password"
                  ></input>
                  <div className="errors">
                    {errors?.password && touched?.password && errors?.password}
                  </div>
                </div>
                <div style={{ width: "100%", margin: "30px 0" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    Login
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Card.Grid>
    </div>
  );
};

export default Login;
