// import react
import React from 'react';
// import necessary components
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsFillEnvelopeFill } from 'react-icons/bs';
// import styling
import '../../css/components/Footer/FooterCardContact.css';
// import media

function FooterCardContact() {
    return (
      <div>
        <Card id="card">
            <Card.Body>
                <Card.Title className="card-title">Contact Us</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item id="card-body">
                    <Row>
                      <Col><p id="phone-title">Phone</p></Col>
                      <Col><FaPhoneAlt/> <p id="phone-details">07498943120</p></Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item id="card-body">
                    <Row>
                      <Col><p id="email-title">E-mail</p></Col>
                      <Col>
                        <span><BsFillEnvelopeFill/> <p id="email-details">j.pautomotivetec@gmail.com</p> </span>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item id="card-body">
                    <Row>
                      <Col><p id="contact-title">Contact Form</p></Col>
                      <Col>
                        <div>
                          <p id="contact-details">Go to contact us page:</p>
                          <Link class="footer-contact-button" id="nav-link" to="jpautomotive/contact">Contact Us</Link>
                        </div>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
      </div>
    );
}

export default FooterCardContact;