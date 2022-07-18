import React, { useEffect, useState, useRef } from "react";
import { Button, Input, InputNumber } from "antd";
import "./index.css";
import { Col, Row, Checkbox } from "antd";
import { Footer } from "../Component/Footer";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useReactToPrint } from "react-to-print";

export default function Address({ setActiveKey, bulk, setBulk }) {
  const [data, setData] = useState({});

  const [check, setCheck] = useState(false);

  useEffect(() => {
    setBulk((e) => {
      return {
        ...e,
        address: data,
      };
    });
  }, [data]);

  const onFinish = () => {
    // form.validateFields().then((e) => {
    //   check
    //     ? setData({
    //         ...e,
    //         permannent_address: e.communication_address,
    //       })
    //     : form2.validateFields().then((a) => {
    //         setData({
    //           ...e,
    //           ...a,
    //         });
    //       });
    // });
  };

  const schema = Yup.object({
    communication_address: Yup.object({
      address_1: Yup.string()
        .required("address is required")
        .min(3, "Too short"),
      address_2: Yup.string()
        .required("address is required")
        .min(10, "Too short"),
      state: Yup.string().required("address is required").min(3, "Too short"),
      city: Yup.string().required("city is required").min(3, "Too short"),
      pin_code: Yup.number()
        .min(100000, "invalid")
        .max(999999, " invalid")
        .typeError("invalid Pincode")
        .required("Pincode is required"),
    }),
    permanent_address: Yup.object({
      address_1: Yup.string()
        .required("address is required")
        .min(3, "Too short"),
      address_2: Yup.string()
        .required("address is required")
        .min(10, "Too short"),
      state: Yup.string().required("address is required").min(3, "too short"),
      city: Yup.string().required("city is required").min(3, "too short"),
      pin_code: Yup.number()
        .min(100000, "invalid")
        .max(999999, "invalid")
        .typeError("invalid Pincode")
        .required("Pincode is required"),
    }),
  });

  return (
    <>
      <div className="">
        <div className="cards ">
          <Formik
            initialValues={{
              communication_address: {
                address_1: "",
                address_2: "",
                state: "",
                city: "",
                pin_code: "",
              },
              permanent_address: {
                address_1: "",
                address_2: "",
                state: "",
                city: "",
                pin_code: "",
              },
            }}
            validationSchema={schema}
            onSubmit={(e) => {
              setData(e);
              setActiveKey("7");
            }}
          >
            {({ errors, touched, values }) => {
              return (
                <Form>
                  <Row style={{ width: "100%" }}>
                    <Col span={12}>
                      <div className="eli-heading">Communication Address</div>
                      <div className="eli-content">
                        <Checkbox
                          defaultChecked={false}
                          onChange={() => setCheck(!check)}
                        >
                          same Address
                        </Checkbox>
                        <div className="Address">
                          <Field
                            className="form-control n-2"
                            placeholder="Address 1"
                            name="communication_address.address_1"
                            value={values?.commmunication_address?.address_1}
                          />
                          {errors?.communication_address?.address_1 &&
                          touched?.communication_address?.address_1
                            ? errors?.communication_address?.address_1
                            : null}
                        </div>
                        <div className="Address">
                          <Field
                            className="form-control n-2"
                            placeholder="Address 2"
                            name="communication_address.address_2"
                            value={values?.communication_address?.address_2}
                          />
                          {errors?.communication_address?.address_2 &&
                          touched?.communication_address?.address_2
                            ? errors?.communication_address?.address_2
                            : null}
                        </div>
                        <div className="Address">
                          <Field
                            className="form-control n-2"
                            placeholder="state"
                            name="communication_address.state"
                            value={values?.communication_address?.state}
                          />
                          {errors?.communication_address?.state &&
                          touched?.communication_address?.state
                            ? errors?.communication_address?.state
                            : null}
                        </div>
                        <div className="Address">
                          <Field
                            className="form-control n-2"
                            placeholder="City"
                            name="communication_address.city"
                            value={values?.communication_address?.city}
                          />
                          {errors?.communication_address?.city &&
                          touched?.communication_address?.city
                            ? errors?.communication_address?.city
                            : null}
                        </div>
                        <div className="Address">
                          <Field
                            className="form-control n-2"
                            placeholder="Pin Code"
                            name="communication_address.pin_code"
                            value={values?.communication_address?.pin_code}
                          />
                          {errors?.communication_address?.pin_code &&
                          touched?.communication_address?.pin_code
                            ? errors?.communication_address?.pin_code
                            : null}
                        </div>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div
                        className="eli-heading"
                        style={{ marginBottom: "60px" }}
                      >
                        Permanent Address
                      </div>
                      {console.log(values, "values")}
                      <div className="eli-content">
                        <div className="Address">
                          <Field
                            className="form-control n-2"
                            placeholder="Address 1"
                            name="permanent_address.address_1"
                            value={
                              check
                                ? values.communication_address.address_1
                                : values.permanent_address.address_1
                            }
                            disabled={check}
                          />
                          {errors?.permanent_address?.address_1 &&
                          touched?.permanent_address?.address_1
                            ? errors?.permanent_address?.address_1
                            : null}
                        </div>
                        <div className="Address">
                          <Field
                            className="form-control n-2"
                            placeholder="Address 2"
                            name="permanent_address.address_2"
                            value={
                              check
                                ? values.communication_address.address_2
                                : values.permanent_address.address_2
                            }
                            disabled={check}
                          />
                          {errors?.permanent_address?.address_2 &&
                          touched?.permanent_address?.address_2
                            ? errors?.permanent_address?.address_2
                            : null}
                        </div>
                        <div className="Address">
                          <Field
                            className="form-control n-2"
                            placeholder="state"
                            name="permanent_address.state"
                            value={
                              check
                                ? values.communication_address.state
                                : values.permanent_address.state
                            }
                            disabled={check}
                          />
                          {errors?.permanent_address?.state &&
                          touched?.permanent_address?.state
                            ? errors?.permanent_address?.state
                            : null}
                        </div>
                        <div className="Address">
                          <Field
                            className="form-control n-2"
                            placeholder="City"
                            name="permanent_address.city"
                            value={
                              check
                                ? values.communication_address.city
                                : values.permanent_address.city
                            }
                            disabled={check}
                          />
                          {errors?.permanent_address?.city &&
                          touched?.permanent_address?.city
                            ? errors?.permanent_address?.city
                            : null}
                        </div>
                        <div className="Address">
                          <Field
                            className="form-control n-2"
                            placeholder="Pin Code"
                            name="permanent_address.pin_code"
                            value={
                              check
                                ? values.communication_address.pin_code
                                : values.permanent_address.pin_code
                            }
                            disabled={check}
                          />
                          {errors?.permanent_address?.pin_code &&
                          touched?.permanent_address?.pin_code ? (
                            <div>{errors?.permanent_address?.pin_code}</div>
                          ) : null}
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "100%",
                      margin: "50px",
                      height: "20%",
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      {"Next >>"}
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}
