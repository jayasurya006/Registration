import React, { useEffect, useState } from "react";
import data from "./data";
import "./index.css";
import { Button, Tabs, Card, Switch } from "antd";
import {
  CheckCircleTwoTone,
  RightCircleOutlined,
  LeftCircleOutlined,
  MinusOutlined,
} from "@ant-design/icons";

import axios from "axios";

const Eligibility = ({ setActiveKey }) => {
  const tabChange = (value) => {
    setActiveKey(value);
  };

  const Style = {
    width: "100%",
  };

  const { TabPane } = Tabs;
  let a = "http://192.168.0.112:3003/parent/getparents";

  const [tab, setTab] = useState("1");

  const SwitchTab = (Con) => {
    const num = parseInt(tab);
    if (num <= 3 && Con == "+") {
      setTab((num + 1).toString());
    } else if (num >= 2 && Con == "-") {
      setTab((num - 1).toString());
    }
  };

  const style = {
    fontSize: "30px",
    color: "#b8bbbf",
  };

  const styleActive = {
    fontSize: "30px",
  };

  return (
    <div className="main">
      <Tabs defaultActiveKey="1" activeKey={tab}>
        <div className="icon">
          <LeftCircleOutlined
            onClick={() => SwitchTab("-")}
            style={
              tab != "1"
                ? { visibility: "visible", cursor: "pointer" }
                : { visibility: "hidden" }
            }
          />
        </div>
        <TabPane className="card" key={"1"}>
          <Card.Grid style={Style} hoverable={false}>
            <div className="eli-tab-items">
              <div className="eli-heading">Eligibility</div>
              <ul className="eli-content">
                {data[0].map((e) => (
                  <>
                    <li style={{ lineHeight: "2em" }}>
                      <span style={{ marginRight: "5px" }}>
                        <CheckCircleTwoTone />
                      </span>
                      {e}
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </Card.Grid>
        </TabPane>
        <TabPane className="card" key="2">
          <Card.Grid style={Style} hoverable={false}>
            <div className="eli-tab-items">
              <div className="eli-heading">
                Kindly go through the following points in detail
              </div>
              <ul className="eli-content">
                {data[1].map((e) => (
                  <>
                    <li style={{ lineHeight: "2em" }}>
                      <span style={{ marginRight: "5px" }}>
                        <CheckCircleTwoTone />
                      </span>
                      {e}
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </Card.Grid>
        </TabPane>
        <TabPane className="card" key="3">
          <Card.Grid style={Style} hoverable={false}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <div className="eli-tab-items">
                <div className="eli-heading">For Age Proof (any one)</div>
                <div className="eli-content">
                  {data[2].map((e) => (
                    <>
                      <li style={{ lineHeight: "2em" }}>
                        <span style={{ marginRight: "5px" }}>
                          <CheckCircleTwoTone />
                        </span>
                        {e}
                      </li>
                    </>
                  ))}
                </div>
              </div>
              <div className="eli-tab-items">
                <div className="eli-heading">For Address proof (any one)</div>
                <div className="eli-content">
                  {data[3].map((e) => (
                    <>
                      <li style={{ lineHeight: "2em" }}>
                        <span style={{ marginRight: "5px" }}>
                          <CheckCircleTwoTone />
                        </span>
                        {e}
                      </li>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </Card.Grid>
        </TabPane>
        <TabPane className="card" key="4">
          <Card.Grid style={Style} hoverable={false}>
            <div className="eli-tab-items">
              <div className="eli-heading">General Tips</div>
              <ul className="eli-content">
                {data[4].map((e) => (
                  <>
                    <li style={{ lineHeight: "2em" }}>
                      <span style={{ marginRight: "5px" }}>
                        <CheckCircleTwoTone />
                      </span>
                      {e}
                    </li>
                  </>
                ))}
              </ul>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <img
                  src={"photo-rejected.png"}
                  alt=""
                  style={{ width: "150px" }}
                ></img>
              </div>
              <Button
                type="primary"
                onClick={() => {
                  tabChange("2");
                }}
                style={{ alignSelf: "flex-end" }}
              >
                Next
              </Button>
            </div>
          </Card.Grid>
        </TabPane>
        <div className="icon">
          <RightCircleOutlined
            onClick={() => SwitchTab("+")}
            style={
              tab != "4"
                ? { visibility: "visible", cursor: "pointer" }
                : { visibility: "hidden" }
            }
          />
        </div>
      </Tabs>
      <div style={{ display: "inline-flex" }}>
        <div>
          <MinusOutlined style={tab == 1 ? styleActive : style} />
        </div>
        <div>
          <MinusOutlined style={tab == 2 ? styleActive : style} />
        </div>{" "}
        <div>
          <MinusOutlined style={tab == 3 ? styleActive : style} />
        </div>{" "}
        <div>
          <MinusOutlined style={tab == 4 ? styleActive : style} />
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
