import React from "react";
import "./Thank.css";
import { Button } from "antd";
const Thank = ({ setActiveKey }) => {
  return (
    <div className="eli-tab-items">
      <div className="eli-heading">Thanks For Registering With Us</div>
      <div
        className="eli-content"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <br></br>
        <p>Your submission has been received.</p>
        <p>A member of our team will contact you shortly.</p>
        <br></br>
        <p>
          You can also <a href="">download</a> your filled application form
          here.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Button onClick={() => setActiveKey("4")}>Priview</Button>
        <Button type="primary">Download</Button>
      </div>
    </div>
  );
};

export default Thank;
