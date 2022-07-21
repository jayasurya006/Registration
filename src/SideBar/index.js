import React from "react";
import "./index.css";
import { MailOutlined } from "@ant-design/icons";
import About from "../About/About";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div
        className="sidebar-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="sidebar-image"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={"/dav.jpg"} alt=""></img>
        </div>
      </div>

      <div className="sidebar-content">
        <div className="side-links ">
          <div>
            <Link to="/About">About</Link>
          </div>
          <div>
            <Link to="/Contact">Contact</Link>
          </div>
          <div>
            <Link to="/Support">Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
