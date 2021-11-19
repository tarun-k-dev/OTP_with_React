import React, { useState } from "react";
import { Button, Card, Form, Col, Row } from 'react-bootstrap';
import './App.css';
import PopupComponent from "./components/PopupComponent";


function App() {

  const [modalShow, setModalShow] = useState(false);

  const [data, setData] = useState(null)

  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength)
    }
  }

  function getData(val) {
    setData(val.target.value)
  }


  return (
    <>
        <div className="content">
          <Card style={{ width: '35rem' }}>
            <Card.Body>
              <Card.Title>Phone Verification</Card.Title>
              <hr />
              <Form>
                <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label column sm="5">
                    Enter your Phone Number
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control 
                    type="number"
                    maxLength = "10" 
                    onInput={maxLengthCheck}
                    onChange={getData}
                    placeholder="Phone Number" />
                  </Col>
                </Form.Group>
                <Button 
                variant="danger"
                className="text-center"
                onClick={() => setModalShow(true)}
                >Phone Verification via OTP</Button>
              </Form>
            </Card.Body>
      
          </Card>          
        </div>
        


      <PopupComponent
        show={modalShow}
        data={data}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;


