import React, { useState, useRef } from "react";
import { Space, Table, Tag, Button } from "antd";
import { Badge, Descriptions } from "antd";
import { useReactToPrint } from "react-to-print";

const Preview = ({ setActiveKey, bulk }) => {
  // const [file, setFile] = useState();
  // const fileToBase64 = (file, cb) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = function () {
  //     cb(null, reader.result);
  //   };
  //   reader.onerror = function (error) {
  //     cb(error, null);
  //   };
  // };
  // fileToBase64(bulk.parent_details.mother_details.photo, (err, result) => {
  //   if (result) {
  //     setFile(result);
  //   }
  // });

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const student = bulk.student_details;
  const mother = bulk.parent_details.mother_details;
  const father = bulk?.parent_details?.father_details;
  const per = bulk?.address?.permanent_address;
  const com = bulk?.address?.communication_address;
  const date = student?.dob;

  console.log(student.applicant_photo);
  console.log(date);

  return (
    <div>
      <br />
      <br />
      <div ref={componentRef}>
        <Descriptions title="Student Details" bordered column={2}>
          <Descriptions.Item label="First Name">
            {student.first_name}
          </Descriptions.Item>
          <Descriptions.Item label="Last Name">
            {student.last_name}
          </Descriptions.Item>
          <Descriptions.Item label="Age">{student.age}</Descriptions.Item>
          <Descriptions.Item label="Gender">{student.gender}</Descriptions.Item>
          <Descriptions.Item label="Date of Birth">
            {student?.dob.format("DD/MM/YYYY")}
          </Descriptions.Item>
          <Descriptions.Item label="Class">{student.class}</Descriptions.Item>
          <Descriptions.Item label="Board">{student.board}</Descriptions.Item>

          <Descriptions.Item label="Mother Tongue">
            {student.mother_tongue}
          </Descriptions.Item>

          <Descriptions.Item label="Nationality">
            {student.nationality}
          </Descriptions.Item>
          <Descriptions.Item label="Religion">
            {student.religion}
          </Descriptions.Item>
          <Descriptions.Item label="Community">
            {student.community}
          </Descriptions.Item>
          <Descriptions.Item label="Aadhar Number">
            {student.aadhar_no}
          </Descriptions.Item>

          <Descriptions.Item label="Height">{student.height}</Descriptions.Item>
          <Descriptions.Item label="Weight">{student.weight}</Descriptions.Item>
          <Descriptions.Item label="Blood Gtoup">
            {student.blood_group}
          </Descriptions.Item>
          <Descriptions.Item label="Extra Currucular Activity">
            {student.extra_curricular}
          </Descriptions.Item>
          <Descriptions.Item label="Interest in Sports">
            {student.prof_in_sports}
          </Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Descriptions title="Father Details" bordered column={2}>
          <Descriptions.Item label="First Name">
            {father?.first_name}
          </Descriptions.Item>
          <Descriptions.Item label="Last Name">
            {father?.last_name}
          </Descriptions.Item>
          <Descriptions.Item label="Mobile Number">
            {father?.mobile_no}
          </Descriptions.Item>
          <Descriptions.Item label="email">{father?.email}</Descriptions.Item>
          <Descriptions.Item label="Qualification">
            {father?.qualification}
          </Descriptions.Item>
          <Descriptions.Item label="Ocuupation">
            {father?.occupation}
          </Descriptions.Item>
          <Descriptions.Item label="Place of Work">
            {father?.work}
          </Descriptions.Item>
          <Descriptions.Item label="Income">{father?.income}</Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Descriptions title="mother Details" bordered column={2}>
          <Descriptions.Item label="First Name">
            {mother?.first_name}
          </Descriptions.Item>
          <Descriptions.Item label="Last Name">
            {mother?.last_name}
          </Descriptions.Item>
          <Descriptions.Item label="Mobile Number">
            {mother?.mobile_no}
          </Descriptions.Item>
          <Descriptions.Item label="email">{mother?.email}</Descriptions.Item>
          <Descriptions.Item label="Qualification">
            {mother?.qualification}
          </Descriptions.Item>
          <Descriptions.Item label="Ocuupation">
            {mother?.occupation}
          </Descriptions.Item>
          <Descriptions.Item label="Place of Work">
            {mother?.work}
          </Descriptions.Item>
          <Descriptions.Item label="Income">{mother?.income}</Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Descriptions title="Permanent Address" bordered column={2}>
          <Descriptions.Item label="Address 1">
            {per?.address_1}
          </Descriptions.Item>
          <Descriptions.Item label="Address 2">
            {per?.address_2}
          </Descriptions.Item>
          <Descriptions.Item label="State">{per?.state}</Descriptions.Item>
          <Descriptions.Item label="City">{per?.city}</Descriptions.Item>
          <Descriptions.Item label="Pin Code">
            {per?.pin_code}
          </Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Descriptions title="Communication Address" bordered column={2}>
          <Descriptions.Item label="Address 1">
            {com?.address_1}
          </Descriptions.Item>
          <Descriptions.Item label="Address 2">
            {com?.address_2}
          </Descriptions.Item>
          <Descriptions.Item label="State">{com?.state}</Descriptions.Item>
          <Descriptions.Item label="City">{com?.city}</Descriptions.Item>
          <Descriptions.Item label="Pin Code">
            {com?.pin_code}
          </Descriptions.Item>
        </Descriptions>
      </div>
      <div style={{ margin: "30px" }}>
        To Print this details{" "}
        <Button type="primary" onClick={handlePrint}>
          Print
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            margin: "50px",
            height: "20%",
          }}
        >
          <Button type="primary" onClick={() => setActiveKey("9")}>
            {"Finish >>"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
