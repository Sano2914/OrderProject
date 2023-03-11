import React from "react";
import { useState } from "react";
import { Modal, Row, Col, Select, Card, Input, Checkbox } from "antd";
import { Container } from "reactstrap";
import TextArea from "antd/es/input/TextArea";
import { More2 } from "iconsax-react";

const ProcessPopUp = (props) => {
    const [color, setColor] = useState(false);

    return (
        <>
            <hr className="m-0" />
            <div className="mt-5 ml-5 mr-5">
            <More2 className="popupIcon mb-3 ml-7 " color="#264B5D" />
                <div className="mt-3 PopUpBoldText" >
                Order Submission in Progress
                </div>

                <div className="mt-2 PopUpNormalText1">
                Your order has been successfully placed and is currently being progressed.<br></br>
                </div>
            </div>
           
        </>
    )
}
export default ProcessPopUp;