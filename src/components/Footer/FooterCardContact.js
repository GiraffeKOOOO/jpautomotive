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
                      <Col>Phone</Col>
                      <Col><FaPhoneAlt/> 07498943120</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item id="card-body">
                    <Row>
                      <Col>E-mail</Col>
                      <Col>
                        <span><BsFillEnvelopeFill/> j.pautomotivetec@gmail.com </span>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item id="card-body">
                    <Row>
                      <Col>Contact Form</Col>
                      <Col>
                        <div>
                          <p>Go to contact us page:</p>
                          <Link id="nav-link" to="jpautomotive/contact">Contact Us</Link>
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