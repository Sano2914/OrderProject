
import { useState } from "react";
import Chart from "chart.js";
import { Spin, Checkbox, Input, DatePicker, TimePicker, Upload, Select } from 'antd';
// react plugin used to create charts
// import Select from "react-select";
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

import { Notepad2, Clock, CalendarCircle } from "iconsax-react";
import Header from "components/Headers/Header.js";

const Electronic = (props) => {
  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container fluid className="pl-4 ml-3">
        <Row>
          <Col xl="8">
            <Card className="bg-white " >
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className=" header-white ls-1 mb-1" style={{color:"#7E7E7E"}}>
                      Request Type
                    </h6>
                  </div>

                </Row>
              </CardHeader>
              <CardBody>
              <Row className="p-2 ">
              <div className='electronic-s'>
              Electronic S and S Request
                </div>
                <div className="electronic-2 mt-1">
                Select this option if you require PDFs to be electronically signed and sealed.
                </div>
                <div className="pt-1 mt-4">
                        <span className='font16'>Sign and Seal Required</span>
                      </div>
              </Row>
              <Row className="p-2">
              <label className="labels-e">State</label>
                  <Select
                  showSearch
                  size= {"large"}
                  style={{  width: '100%'}}
                  
                  
                    placeholder = "Type to Search..."
                 
                  > </Select>
              </Row>
             
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card classNam="" style ={{height:'100%'}}>
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
                  <Select
                  showSearch
                  size= {"large"}
                  style={{  width: '100%'}}
                  
                  
                    placeholder = "Type to Search..."
                 
                  > </Select>
                  
                {/* <select
                  className="inputs"
                  placeholder="Type to Search...">
                    <option value =""></option>
                </select> */}

                  <label for="start" className="labels pt-3">Date/Time Required</label>
                  <div className="pb-3">
                    {/* <Input suffix={<CalendarCircle />} className="inputs" defaultValue="Select..." placeholder="Select" type="inputs" /> */}
                    <DatePicker 
                    name={""} 
                    className = "inputs"
                    suffixIcon = {<CalendarCircle style={{color:"black"}}    />} 
                    placeholder = "Select..."
                    hideTime 
                    format="MM/DD/YYYY" />
                    </div>
                  <div>
                    {/* <Input suffix={<Clock />} className="inputs" defaultValue="00 : 00 PM" type="inputs" /> */}
                    <TimePicker
                    name={""} 
                    suffixIcon = {<Clock style={{color:"black"}} />} 
                    placeholder = "00 : 00 PM"
                    hideSeconds
                    format = "HH:mm A"
                    showTime={{ format: 'HH:mm A', use12Hours:true }}
                    />
                    </div>
                  <label className="labels pt-3">Order For</label>
                  <Select
                  size= {"large"}
                  style={{ width: '100%' }}
                                    showSearch
                    placeholder = "Type to Search..."
                 
                  > </Select>
                 


                </form>
                <label for="images" class="drop-containers p-4" ></label>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default Electronic;
