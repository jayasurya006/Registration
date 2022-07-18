import { Steps } from "antd";
import React from "react";
import "./index.css";

const { Step } = Steps;

const ProgressBar = ({ activeKey }) => (
  <div className="Steps">
    <Steps current={activeKey} progressDot>
      <Step
        title={activeKey == 1 ? <span className="eli-content">1/8</span> : ""}
      />
      <Step
        title={activeKey == 2 ? <span className="eli-content">2/8</span> : ""}
      />
      <Step
        title={activeKey == 3 ? <span className="eli-content">3/8</span> : ""}
      />
      <Step
        title={activeKey == 4 ? <span className="eli-content">4/8</span> : ""}
      />
      <Step
        title={activeKey == 5 ? <span className="eli-content">5/8</span> : ""}
      />
      <Step
        title={activeKey == 6 ? <span className="eli-content">6/8</span> : ""}
      />
      <Step
        title={activeKey == 7 ? <span className="eli-content">7/8</span> : ""}
      />
      <Step
        title={activeKey == 8 ? <span className="eli-content">8/8</span> : ""}
      />
      <Step
        title={activeKey == 9 ? <span className="eli-content">9/8</span> : ""}
      />
    </Steps>
  </div>
);

const content = [
  "Criteria For Admission",
  "Verification",
  "OTP",
  "Admission Type",
  "Student Details",
  "Address",
  "Parent Details",
  "Thank You",
];

export default ProgressBar;
