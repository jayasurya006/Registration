import "./App.css";
import Eligibility from "./Eligibility/index";
import { Button, Tabs } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import Login from "./Registration/Login";
import Verify from "./Verification/verify";
import AdmissionType from "./Categories/cate";
import WardDetails from "./WardDetails";
import Thank from "./Thankyou/Thank";
import Address from "./Address";
import { Link } from "react-router-dom";
import ProgressBar from "./Component/ProgressBar";
import Parent from "./ParentDetails";
import SideBar from "./SideBar/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Preview from "./Preview/index";

function App() {
  const [bulk, setBulk] = useState({
    mobile: "",
    email: "",
    relevent_type: {},
    parent_details: {},
    alumini_details: {},
    student_details: {},
    address: {},
  });

  const [activeKey, setActiveKey] = useState("1");
  const { TabPane } = Tabs;

  const onChange = (key) => {
    console.log("current key is", key);
    setActiveKey(key);
  };

  const [data, SetData] = useState({});
  return (
    <Router>
      <div className="App">
        <div style={{ display: "flex" }}>
          <div className="panel-1">
            <SideBar />
          </div>
          <div className="panel-2">
            <Routes>
              <Route
                exact
                path="/tabs"
                element={
                  <>
                    <div className="Tabs-1">
                      <Tabs
                        centered
                        tabBarGutter={40}
                        activeKey={activeKey}
                        style={{
                          marginLeft: "10%",
                          marginRight: "10%",
                          height: "100%",
                        }}
                      >
                        <TabPane
                          tab="Eligibility"
                          key="1"
                          className="tab-content"
                        >
                          <Eligibility setActiveKey={setActiveKey} />
                        </TabPane>
                        <TabPane tab="Registration" key="2">
                          <Login
                            setActiveKey={setActiveKey}
                            bulk={bulk}
                            setBulk={setBulk}
                          />
                        </TabPane>
                        <TabPane tab="Verification" key="3">
                          <Verify setActiveKey={setActiveKey} bulk={bulk} />
                        </TabPane>
                        <TabPane tab="Category" key="4">
                          <AdmissionType
                            setActiveKey={setActiveKey}
                            bulk={bulk}
                            setBulk={setBulk}
                          />
                        </TabPane>
                        <TabPane tab="Ward Details" key="5">
                          <WardDetails
                            setActiveKey={setActiveKey}
                            bulk={bulk}
                            setBulk={setBulk}
                          />
                        </TabPane>
                        <TabPane tab="Address" key="6">
                          <Address
                            setActiveKey={setActiveKey}
                            bulk={bulk}
                            setBulk={setBulk}
                          />
                        </TabPane>
                        <TabPane tab="Parent Details" key="7">
                          <Parent
                            setActiveKey={setActiveKey}
                            bulk={bulk}
                            setBulk={setBulk}
                          />
                        </TabPane>
                        <TabPane tab="Preview" key="8">
                          <Preview setActiveKey={setActiveKey} bulk={bulk} />
                        </TabPane>
                        <TabPane tab="Thank you" key="9">
                          <Thank setActiveKey={setActiveKey} />
                        </TabPane>
                      </Tabs>
                    </div>
                    <div className="Tabs-2">
                      <ProgressBar activeKey={activeKey} />
                    </div>
                  </>
                }
              />
              <Route path="/Signin" element={<Signin />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
