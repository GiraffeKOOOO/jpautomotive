// import react
import React from 'react';
// import necessary components
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from 'react-bootstrap';
// import styling
import '../../css/components/Footer/FooterCardHours.css';
// import media

function FooterCardHours() {
    return (
      <div>
        <Card id="card">
            <Card.Body>
                <Card.Title>Contact Hours</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item id="card-body">
                    <Row>
                      <Col>Monday</Col>
                      <Col>9am - 5pm</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item id="card-body">
                    <Row>
                      <Col>Tuesday</Col>
                      <Col>9am - 5pm</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item id="card-body">
                    <Row>
                      <Col>Wednesday</Col>
                      <Col>9am - 5pm</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item id="card-body">
                    <Row>
                      <Col>Thursday</Col>
                      <Col>9am - 5pm</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item id="card-body">
                    <Row>
                      <Col>Friday</Col>
                      <Col>9am - 5pm</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item id="card-body">
                    <Row>
                      <Col>Saturday</Col>
                      <Col>Not Operational</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item id="card-body">
                    <Row>
                      <Col>Sunday</Col>
                      <Col>Not Operational</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
      </div>
    );
}

export default FooterCardHours;