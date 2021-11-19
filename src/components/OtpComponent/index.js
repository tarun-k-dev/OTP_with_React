import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
import {Button ,Container ,Row , Col } from 'react-bootstrap'


export default class OtpComponent extends Component {

  state = { otp: '' };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
        <>
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 4 }}>
                  <OtpInput
                    inputStyle = {{
                        "width": "30px",
                        "height": "50px",
                        "borderBottom": "2px solid black",
                        "borderTop": "none",
                        "borderLeft": "none",
                        "borderRight": "none",
                        "lineHeight": "50px",
                        "textAlign": "center",
                        "fontSize": "24px",
                        "fontFamily": "\"Raleway\", sans-serif",
                        "fontWeight": "200",
                        "color": "black",
                        "margin": "0 5px",
                      }}
                    value={this.state.otp}
                    onChange={this.handleChange}
                    numInputs={6}
                    isInputNum
                />
                </Col>
              </Row>

            </Container>
                
                <br />
                
                <Button 
                variant="outline-primary"
                >Change Number</Button>
                <Button 
                variant="outline-primary"
                >Resend OTP</Button>

        </>

    );
  }
}