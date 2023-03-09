
import { useState } from "react";
import Chart from "chart.js";
import { Spin, Checkbox, Input, DatePicker, TimePicker, Upload, Select, Radio,Modal } from 'antd';
import ChicagoModal from "views/examples/ChicagoModal";
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
    Col,
    Form
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

const ChicagoTreeTown = (props) => {
    const [open, setOpen] = useState(false);
    const handleok = () =>{
        setOpen(false);
      }
      const handleCancel = () => {
        setOpen(false);
      }
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState("data1");
    const Option = Select.Option;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    function handleBlur() {
        console.log('blur');
    }

    function handleFocus() {
        console.log('focus');
    }


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
                        <Card className="bg-white " >
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h6 className=" header-white ls-1 mb-1" style={{ color: "#7E7E7E" }}>
                                            Request Type
                                        </h6>
                                    </div>

                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="px-0" >
                                    <h1 style={{ fontSize: 24, color: '#000000', fontWeight: 500, fontFamily: 'Manrope' }}>
                                        Chicago - Tree Towns Request
                                    </h1>
                                    <span style={{ fontSize: 12, color: '#7E7E7E' }}>
                                        Chicago employees may select this option to have the plots sent to Tree Towns.
                                    </span>
                                </div>
                                <div className='header-2 ls-1 mt-3'>
                                    Chicago - Tree Towns
                                </div>
                                <div className='mt-2'>
                                    <label for="images" class="drop-container p-4">
                                        {/* <img src={require("../assets/img/theme/upload.png")} alt="" className="h-10 w-10 mt-5" /> */}
                                        <div className="note p-4">
                                            <Notepad2 size="40" className="ml-1 mt-1" color="#A0A0A0" />

                                        </div>

                                        <span class="drop-title mt-2">Drag and drop or browse a file from the network to continue.</span>
                                        {/* <button className="choose mt-2 ">Choose File</button> */}
                                        {/* <Upload> */}
                                            <Button className="pl-3 pr-3" onClick={() => setOpen(true)}>Choose File</Button>
                                            {/* </Upload> */}
                                    </label>
                                    <label for="images" class="drop-containers p-4" ></label>
                                </div>
                                <div className="mb-5 mr-10"
                                    style={{ display: "flex", flexDirection: 'row' }}>
                                    <div className="col-4">
                                        <label className="labels font12">Notify contact 1</label>
                                        <Select
                                            showSearch
                                            size={"large"}
                                            style={{ width: '100%' }}
                                            placeholder="Type to search.."
                                        />
                                    </div>

                                    <div className="col-4">
                                        <label className="labels font12">Notify contact 2</label>
                                        <Select
                                            showSearch
                                            size={"large"}
                                            style={{ width: '100%' }}
                                            placeholder="Type to search.."
                                        />
                                    </div>
                                    <div className="col-4">
                                        <label className="labels font12">Notify contact 3</label>
                                        <Select
                                            showSearch
                                            size={"large"}
                                            style={{ width: '100%' }}
                                            placeholder="Type to search.."
                                        />
                                    </div>
                                    {/* </form> */}
                                </div>
                                <div className="ml-2 mb-5">
                                    <Form className="mb-[2px]">
                                    <label 
                                    style={{color: '#7E7E7E', fontSize:'12px', fontFamily:'Manrope'}}
                                    className="labels">Delivery or Pick-Up</label>
                                        <Radio.Group
                                            options={[
                                                { label: "Delivery", value: "a"},
                                                { label: "Pick Up", value: "b" }
                                            ]}
                                        />
                                    </Form>
                                    <Form className="pt-3">
                                    <label 
                                    style={{color: '#7E7E7E', fontSize:'12px', fontFamily:'Manrope'}}
                                    className="labels">Bind or No-Bind</label>
                                        <Radio.Group
                                            options={[
                                                { label: "Bind", value: "a"},
                                                { label: "No-Bind", value: "b" }
                                            ]}
                                        />
                                    </Form>
                                    <Form className="pt-3">
                                    <label 
                                    style={{color: '#7E7E7E', fontSize:'12px', fontFamily:'Manrope'}}
                                    className="labels">Add 11 x 17 record set?</label>
                                        <Radio.Group
                                            options={[
                                                { label: "Yes", value: "a"},
                                                { label: "No", value: "b" }
                                            ]}
                                        />
                                    </Form>
                                </div>
                                <Button className="mt-5" key="submit" >Submit Request</Button>
                                <Modal 
                  // title="Print"
                  centered
                  open={open}
                  onOk={handleok}
                  onCancel={handleCancel}
                  closable={false}
                  footer={[
                    <Row className="p-3">
                    <Col className="ml-2" style={{textAlign:'start'}}>
                        <button className="button-request padding" onClick={handleCancel}>Go Back</button>
                    </Col>
                    <Col>
                        <Button key="submit" onClick={handleok}>Submit Request</Button>
                    </Col>
                    </Row>,
                    
                  ]}
                 
                  width={1300}
                >
                  
                  <ChicagoModal/>
                  
                </Modal>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="4">
                        <Card className="" style={{ height: '100%' }}>
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
                                        size={"large"}
                                        style={{ width: '100%' }}
                                        placeholder="Type to Search..."
                                    > </Select>
                                    <label for="start" className="labels pt-3">Date/Time Required</label>
                                    <div className="pb-3">
                                        <DatePicker
                                            name={""}
                                            className="inputs"
                                            suffixIcon={<CalendarCircle style={{ color: "black" }} />}
                                            placeholder="Select..."
                                            hideTime
                                            format="MM/DD/YYYY" />
                                    </div>
                                    <div>
                                        <TimePicker
                                            name={""}
                                            suffixIcon={<Clock style={{ color: "black" }} />}
                                            placeholder="00 : 00 PM"
                                            hideSeconds
                                            format="HH:mm A"
                                            showTime={{ format: 'HH:mm A', use12Hours: true }}
                                        />
                                    </div>
                                    <label className="labels pt-3">Order For</label>
                                    <Select
                                        size={"large"}
                                        style={{ width: '100%' }}
                                        showSearch
                                        placeholder="Type to Search..."
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
export default ChicagoTreeTown;
