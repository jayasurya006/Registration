import React, { useState, useRef } from "react";
import axios from "axios";
import {
  Space,
  Table,
  Tag,
  Button,
  Card,
  Image,
  Row,
  Col,
  Divider,
} from "antd";
import { Badge, Descriptions } from "antd";
import { useReactToPrint } from "react-to-print";

import "./index.css";

const Preview = ({ setActiveKey, bulk }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const student = bulk?.student_details;
  const mother = bulk?.parent_details?.mother_details;
  const father = bulk?.parent_details?.father_details;
  const per = bulk?.address?.permanent_address;
  const com = bulk?.address?.communication_address;
  const date = student?.dob;

  const Call = () => {
    const formData = new FormData();
    formData.append("parent_details", JSON.stringify(bulk.parent_details));
    formData.append("relevant_type", bulk.relevent_type);
    formData.append("alumini_details", JSON.stringify(bulk.alumini_details));

    formData.append("email", bulk.email);
    formData.append("applicant_photo", bulk.student_details.applicant_photo);
    formData.append("adhar_photo", bulk.student_details.aadhar_card);
    formData.append("age_proof", bulk.student_details.age_proof);
    formData.append("father_photo", bulk.parent_details?.mother_details?.photo);
    formData.append("mother_photo", bulk.parent_details?.father_details?.photo);
    formData.append("mobile", bulk.mobile);
    formData.append("student_details", JSON.stringify(bulk.student_details));
    formData.append("address", JSON.stringify(bulk.address));
    axios.post("http://192.168.0.112:3002/user/create", formData);
    setActiveKey("9");
  };

  return (
    <div ref={componentRef}>
      <div class="details-page-header">
        <img src={"/dav.jpg"} alt="school-logo" style={{ marginLeft: "0%" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <h4>D.A.V Public School</h4>
          <address>Savithri nagar, Tamnar, Raigrahg, CG- 496901</address>
          <address>CBSE School New Delhi,CBSE School New Delhi-611001</address>
          <h5
            style={{
              textAlign: "center",
              border: "1px solid grey",
              padding: "6px 20px",
            }}
          >
            Application Details
          </h5>
        </div>
        <Col span={1}>
          <img
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
      </div>
      <div className="body">
        <div>
          <Row gutter={24}>
            <Col span={24}>
              <Descriptions
                title="Student Information"
                bordered
                size="small"
                className={"font-size"}
              >
                <Descriptions.Item label={<span>Full Name</span>}>
                  <b>{student?.first_name}</b>
                </Descriptions.Item>
                <Descriptions.Item label={<span>Last Name</span>}>
                  <b>{student.last_name}</b>
                </Descriptions.Item>
                <Descriptions.Item label={<span>Gender</span>}>
                  <b>{student.gender}</b>
                </Descriptions.Item>
                <Descriptions.Item label={<span>Age</span>}>
                  <b>{student.age}</b>
                </Descriptions.Item>
                <Descriptions.Item label={<span>DOB</span>}>
                  <b>{student.dob.format("DD/MM/YYYY")}</b>
                </Descriptions.Item>
                <Descriptions.Item label={<span>Student Adhar No</span>}>
                  <b>{student.aadhar_no}</b>
                </Descriptions.Item>
                <Descriptions.Item label={<span>Board</span>}>
                  <b>{student.board}</b>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span>Co-Curricular Activities</span>}
                >
                  <b>{student.extra_curricular}</b>
                </Descriptions.Item>
                <Descriptions.Item label={<span>Pro-Efficient Of Sports</span>}>
                  <b>{student.prof_in_sports}</b>
                </Descriptions.Item>
                <Descriptions.Item label={<span>Nationality</span>}>
                  <b>{student.nationality}</b>
                </Descriptions.Item>
                <Descriptions.Item label={<span>Religion</span>}>
                  <b>{student.religion}</b>
                </Descriptions.Item>
                <Descriptions.Item label={<span>Community</span>}>
                  <b>{student.community}</b>
                </Descriptions.Item>
                <Descriptions.Item label={<span>Blood Group</span>}>
                  <b>{student.blood_group}</b>
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <Divider />

          <Col span={24}>
            <Descriptions size="small" title="Father Details" bordered>
              <Descriptions.Item label={<b>First Name</b>}>
                {father?.first_name}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Last Name</b>}>
                {father?.last_name}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Email</b>}>
                {father?.email}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Mobile</b>}>
                {father?.mobile_no}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Occupation</b>}>
                {father?.occupation}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Divider />

          <Col span={24}>
            <Descriptions size="small" title="Mother Details" bordered>
              <Descriptions.Item label={<b>First Name</b>}>
                {mother?.first_name}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Last Name</b>}>
                {mother?.last_name}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Email</b>}>
                {mother?.email}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Mobile</b>}>
                {mother?.mobile_no}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Occupation</b>}>
                {mother?.occupation}
              </Descriptions.Item>
            </Descriptions>
          </Col>

          <Divider />

          <Col span={24}>
            <Descriptions size="small" title="Permanent Address" bordered>
              <Descriptions.Item label={<b>Address 1</b>}>
                {per?.address_1}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Address 2</b>}>
                {per?.address_2}
              </Descriptions.Item>
              <Descriptions.Item label={<b>City</b>}>
                {per?.city}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Pincode</b>}>
                {per?.pin_code}
              </Descriptions.Item>
              <Descriptions.Item label={<b>State</b>}>
                {per?.state}
              </Descriptions.Item>
            </Descriptions>
          </Col>

          <Divider />
          <Col span={24}>
            <Descriptions size="small" title="Communication Address" bordered>
              <Descriptions.Item label={<b>Address 1</b>}>
                {com?.address_1}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Address 2</b>}>
                {com?.address_2}
              </Descriptions.Item>
              <Descriptions.Item label={<b>City</b>}>
                {com?.city}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Pincode</b>}>
                {com?.pin_code}
              </Descriptions.Item>
              <Descriptions.Item label={<b>State</b>}>
                {com?.state}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <div>
            <Button
              style={{ backgroundColor: "green", margin: "10px" }}
              type="primary"
              onClick={() => handlePrint()}
            >
              Print
            </Button>
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
              <Button onClick={() => setActiveKey("9")}>
                {" "}
                {"<< Preview"}{" "}
              </Button>
              <Button type="primary" onClick={Call}>
                {"Submit"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
