import { MailOutlined } from "@ant-design/icons";
import React from "react";
import "./index.css";

const About = () => {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <div className="img">
          <img
            src={"/dav.jpg"}
            alt="school-logo"
            style={{ marginLeft: "0%" }}
          />
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
            <address>
              CBSE School New Delhi,CBSE School New Delhi-611001
            </address>
          </div>
        </div>
        <div>
          <h1>
            <span>About Our School</span>
          </h1>
        </div>
        <div style={{ margin: "15px" }}>
          <p>
            At the DAV Vasant Kunj, we wish to create an institution par
            excellence where young minds are ignited with a quest for learning,
            spirit of enquiry and scientific temperament. Our aim is to nurture
            our students as catalysts for change who are not only able to
            sustain themselves in a competitive world but also lead it without
            compromising on their values and principles. Our school is a branch
            of that sprawling D.A.V. tree which is rooted in ancient Indian
            Tradition but which reaches out to the sky. Being a part of such an
            illustrious organization we have a tremendous responsibility. We are
            conscious of the fact that we have to fulfill the sacred mission of
            visionaries like Swami Dayanand, who lit the torch of education when
            our country was reeling in the darkness of illiteracy, superstition
            and decadence and this gives us confidence to move ahead despite
            hurdles and stumbling blocks.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
