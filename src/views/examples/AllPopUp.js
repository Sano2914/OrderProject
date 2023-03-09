import React from "react";
import { useState } from "react";
import { Modal, Row, Col, Select, Card, Input, Checkbox } from "antd";
import { Container } from "reactstrap";
import TextArea from "antd/es/input/TextArea";
import { Box1, Trash, InfoCircle } from "iconsax-react";

const AllPopUpModel = (props) => {
    const [color, setColor] = useState(false);

    return (
        <>
            <hr className="m-0" />
            <div className="mt-4 ml-4 mr-4">
            <InfoCircle  className="logoicon mt-3 ml-7 " color="#264B5D" />
                <div className="mt-2 modelBoldText" >
                Unsaved Changes Detected
                </div>

                <div className="mt-3 modelText">
                Are you sure you wish to proceed? We have
                </div>

                <div className="mt-1 modelText">
                detected some unsaved changes that will be 
                </div>

                <div className="mt-1 modelText">
                discarded if you leave this window.
                </div>

            </div>
           
        </>
    )
}
export default AllPopUpModel;