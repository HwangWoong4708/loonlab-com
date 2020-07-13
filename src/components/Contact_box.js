import React from "react";
import "./Contact_box.css";
import { Button, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";

function Contactbox() {
  return (
    <body>
      <div className="Contact_Us">
        <div id="grid">
          <div className="Contact_name">Contact</div>
          <div className="Contact_input">
            <div className="g__Formname">Name *</div>
            <Form>
              <FormGroup>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Input type="text" name="firstname" id="first_name" />
                      <Label for="exampleEmail">First Name</Label>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input type="text" name="Lastname" id="last_name" />
                      <Label for="Last_name">Last Name</Label>
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label for="EmailAddress" className="g__Formname">
                  E-mail Address *
                </Label>
                <Input type="text" name="Emailaddress" id="Email_Address" />
              </FormGroup>
              <FormGroup>
                <Label for="Subject" className="g__Formname">
                  Subject *
                </Label>
                <Input type="text" name="Subject" id="subject" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText" className="g__Formname">
                  Message *
                </Label>
                <Input type="textarea" name="text" id="Text_area" />
              </FormGroup>
            </Form>
            <Button
              color="secondary"
              size="lg"
              active
              className="Submit_Button"
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
      <div className="Copyright">© 2020, LOON LAB INC.</div>
    </body>
  );
}

export default Contactbox;
