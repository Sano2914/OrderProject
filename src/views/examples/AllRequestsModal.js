import React from "react";
import { useState } from "react";
import { Modal, Row, Col, Select, Card, Input, Checkbox } from "antd";
import { Container} from "reactstrap";
import TextArea from "antd/es/input/TextArea";
import { Trash } from "iconsax-react";

const AllRequestsModal = (props) => {
   const [color, setColor] = useState(false);

    return(
        <>
         <Container className="p-0 m-0">
            <p className="modalTitle p-3 m-0">Print</p>
            <hr className="m-0"/>
            <Card className="mt-4 ml-4 mr-4">
                <Card.Grid hoverable={false} style={{borderRadius:'8px 0px 0px 0px', width:'9%'}} className="gridCardfile p-3 pt-4">
                    Filename.PDF <br></br>128 Bytes
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Discipline
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "Type..."

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'6%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Pages
                    </div>
                    <div>
                        <Input placeholder="20" disabled className="p-1 text-center"/>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Page Size
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "11 X 17"

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                       Copies
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "11 X 17"

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'5.2%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Bind
                    </div>
                    <div>
                        <Card className="text-center p-1">
                        <div className="text-center" >
                            <Checkbox className=""></Checkbox></div>
                        </Card>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                       Printing
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "Type..."

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Binding
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "Type..."

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'6%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Pages
                    </div>
                    <div>
                        <Input type="color" value={color} onChange={setColor}   className="p-1 text-center"/>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'15%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Note
                    </div>
                    <div>
                        <TextArea placeholder="Optional note.."/>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{borderRadius:'0px 8px 0px 0px',width:'3.8%'}} className="gridCard p-3">
                   <div className="text-center pt-3"><Trash style={{color:'#A0A0A0'}}/></div> 
                </Card.Grid>
            </Card>
            <Card className="ml-4 mr-4">
                <Card.Grid hoverable={false} style={{width:'9%'}} className="gridCardfile p-3 pt-4">
                    Filename.PDF <br></br>128 Bytes
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Discipline
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "Type..."

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'6%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Pages
                    </div>
                    <div>
                        <Input placeholder="20" disabled className="p-1 text-center"/>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Page Size
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "11 X 17"

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                       Copies
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "11 X 17"

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'5.2%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Bind
                    </div>
                    <div>
                        <Card className="text-center p-1">
                        <div className="text-center" >
                            <Checkbox className=""></Checkbox></div>
                        </Card>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                       Printing
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "Type..."

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Binding
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "Type..."

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'6%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Pages
                    </div>
                    <div>
                        <Input type="color" value={color} onChange={setColor}   className="p-1 text-center"/>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'15%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Note
                    </div>
                    <div>
                        <TextArea placeholder="Optional note.."/>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'3.8%'}} className="gridCard p-3">
                   <div className="text-center pt-3"><Trash style={{color:'#A0A0A0'}}/></div> 
                </Card.Grid>
            </Card>
            <Card className="ml-4 mr-4">
                <Card.Grid hoverable={false} style={{borderRadius:'0px 0px 0px 8px', width:'9%'}} className="gridCardfile p-3 pt-4">
                    Filename.PDF <br></br>128 Bytes
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Discipline
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "Type..."

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'6%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Pages
                    </div>
                    <div>
                        <Input placeholder="20" disabled className="p-1 text-center"/>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Page Size
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "11 X 17"

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                       Copies
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "11 X 17"

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'5.2%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Bind
                    </div>
                    <div>
                        <Card className="text-center p-1">
                        <div className="text-center" >
                            <Checkbox className=""></Checkbox></div>
                        </Card>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                       Printing
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "Type..."

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'11%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Binding
                    </div>
                    <div>
                    <Select
                        showSearch
                        size= {"large"}
                        style={{  width: '100%'}}
                        placeholder = "Type..."

                    > </Select>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'6%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Pages
                    </div>
                    <div>
                        <Input type="color" value={color} onChange={setColor}   className="p-1 text-center"/>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'15%'}} className="gridCard p-3">
                    <div className="text-left pb-2">
                        Note
                    </div>
                    <div>
                        <TextArea placeholder="Optional note.."/>
                    </div>
                </Card.Grid>
                <Card.Grid hoverable={false} style={{borderRadius:'0px 0px 8px 0px',width:'3.8%'}} className="gridCard p-3">
                   <div className="text-center pt-3"><Trash style={{color:'#A0A0A0'}}/></div> 
                </Card.Grid>
            </Card> 
         </Container>
         <hr className="m-0 mt-4"/>
        </>
    )
}
export default AllRequestsModal;