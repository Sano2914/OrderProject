import React from "react";
import { useState } from "react";
import { Modal, Row, Col, Select, Card, Input, Checkbox } from "antd";
import { Container } from "reactstrap";
import TextArea from "antd/es/input/TextArea";
import { Danger } from "iconsax-react";

const PopUpFailed = (props) => {
    const [color, setColor] = useState(false);

    return (
        <>
            <hr className="m-0" />
            <div className="mt-3 ml-4 mr-5">
            <Danger className="popupIcon mt-3 ml-8 " color="#264B5D" left="5.18%" right="5.16%" top="7.67%" bottom="7.67%" />
                <div className="mt-4 ml-4 PopUpBoldText" >
                Order Submission Failed
                </div>

                <div className="mt-2 ml-4 PopUpNormalText1">
                It looks like something went wrong. Please try again or check back later.<br></br>
                </div>
                
            </div>
           
        </>
    )
}
export default PopUpFailed;
