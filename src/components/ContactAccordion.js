// import react
import React from 'react';
// import necessary components
import { Accordion, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
// import styling
import '../css/components/ContactAccordion.css';
// import media

function ContactAccordion() {
    return (
      <div>
        <Accordion defaultActiveKey="0" id="accordion">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" id="call-header">Call Us <AiFillCaretDown className="AiFillCaretDown"/></Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p>
                        If you have any questions regarding the services we provide, or if you would like to book our services, please do not hesitate to give us a call.
                        We strive to provide the best service we can over the phone.
                        If we don't manage to respond to your call, please understand we may be slightly busy, so please leave us a message or try again in a short while.
                      </p>
                      <p>
                        Our open hours for calling are: 9am-5pm, Monday to Friday. 
                      </p>
                      <p>
                        Our contact number is: 07498943120
                      </p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1" id="email-header">Email Us<AiFillCaretDown className="AiFillCaretDown"/></Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <p>
                        If you have any questions regarding the services we provide, or if you would like to book our services, please do not hesitate to contact us by email.
                        We strive to provide the best service we can over email.
                        If we don't manage to respond to your email straight away, please understand we may be slightly busy, we aim to respond at the latest within 1 business week.
                      </p>
                      <p>
                        Our open hours for receiving and responding are: 9am-5pm, Monday to Friday. 
                      </p>
                      <p>
                        Our contact email is: j.pautomotivetec@gmail.com
                      </p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2" id="form-header">Contact Us<AiFillCaretDown className="AiFillCaretDown"/></Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <p>
                        If you have any questions regarding the services we provide, or if you would like to book our services, please do not hesitate to contact us using our contact form.
                        The contact form can be found on the 'Contact Us' page.
                        Please click on the button below to be taken to the 'Contact Us' page.
                      </p>
                      <p id="accordion-contact-text">
                        Navigate to the 'Contact Us' page:
                      </p>
                      <Link id="nav-link" to="jpautomotive/contact">Contact Us</Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
      </div>
  );
}

export default ContactAccordion;