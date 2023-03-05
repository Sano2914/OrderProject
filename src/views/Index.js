
import { useState } from "react";
import Chart from "chart.js";
import { Spin, Checkbox, Input } from 'antd';
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  NavbarBrand,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";
import { Notepad2, Clock, CalendarCircle } from "iconsax-react";
import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container fluid className="pl-4 ml-3">
        <Row>
          <Col xl="8">
            <Card className="bg-white ">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className=" header-white ls-1 mb-1">
                      Request Type
                    </h6>
                  </div>

                </Row>
              </CardHeader>
              <CardBody>
                <div className="">
                  <h6 className=" text-black font12 text-left ls-1 mb-1">
                    Sign & Seal
                  </h6>
                </div>

                <Row className="align-items-center">
                  <Col lg="5">
                    <Checkbox className=""></Checkbox> <span className='font14  pl-2'>Sign and Seal Required</span>
                  </Col>
                  <Col lg="7" className=' header-3 font12'>
                    Select this option if you need PDF / Word document printed with the option of requesting a sign and seal of the documents printed
                    </Col>
                </Row>
                <div className='header-2 ls-1 mt-3'>
                  Print
                </div>
                <div className='mt-2'>
                  <label for="images" class="drop-container p-4">
                    {/* <img src={require("../assets/img/theme/upload.png")} alt="" className="h-10 w-10 mt-5" /> */}
                    <div className="note p-4">
                      <Notepad2 size="40" className="ml-1 mt-1" color="#A0A0A0" />

                    </div>

                    <span class="drop-title mt-2">Drag and drop or browse a file from the network to continue.</span>
                    <button className="choose mt-2 ">choose file</button>
                  </label>
                  <label for="images" class="drop-containers p-4">

                  </label>
                </div>
                <Button type="submit" className=" button-request">
                  Submit Request
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-black header-white ls-1 mb-1 ls-1 mb-1">
                      General Information
                    </h6>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <form className="p-2">

                  <label className="labels">Project Number</label>
                  <select
                    className="inputs"
                    placeholder="Type to Search">

                  </select>

                  <label for="start" className="labels pt-3">Date/Time Required</label>
                  <div className="pb-3"><Input suffix={<CalendarCircle />} className="inputs" defaultValue="select.." placeholder="Select" type="date" /></div>
                  <div><Input suffix={<Clock />} className="inputs" defaultValue="select.." type="time" /></div>
                  <label className="labels pt-3">Order For</label>
                  <select style={{}}
                    className="inputs"
                    placeholder="Type to Search">
                    <option value="">US</option>
                    <option value="">CANADA</option>
                    <option value="">EUROPE</option>

                  </select>


                </form>
                <label for="images" class="drop-containers p-5 mt-6 m-5" ></label>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default Index;
