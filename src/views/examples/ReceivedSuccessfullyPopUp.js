import React from "react";
import { useState } from "react";
import { Modal, Row, Col, Select, Card, Input, Checkbox } from "antd";
import { Container } from "reactstrap";
import TextArea from "antd/es/input/TextArea";
import { I3DCubeScan } from "iconsax-react";

const ReceivedSuccessfullyPopUp = (props) => {
    const [color, setColor] = useState(false);

    return (
        <>
            <hr className="m-0" />
            <div className="mt-3 ml-4 mr-5">
            <I3DCubeScan className="popupIcon mt-3 ml-7" color="#264B5D" />
                <div className="mt-4 PopUpBoldText" >
                Order Received Successfully
                </div>

                <div className="mt-2 PopUpNormalText">
                We have received your order and will begin processing it as soon as possible.
                Confirmation email has been sent to you. Emails have also been copied to any
                Sign and Sealers who were specified.<br></br>
                </div>
               
            </div>
           
        </>
    )
}
export default ReceivedSuccessfullyPopUp;