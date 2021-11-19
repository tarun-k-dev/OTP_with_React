import React from 'react'
import { Modal , Button } from 'react-bootstrap';  
import OtpComponent from '../OtpComponent';


function PopupComponent(props) {


    return (
        <div>
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Phone Verification
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <p>Enter the OTP you received on <span>{props.data}</span></p>
                <OtpComponent />
                <br />
            </Modal.Body>
            <Modal.Footer>

                <Button variant="success">Verify Phone Number</Button>
            
            </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PopupComponent
