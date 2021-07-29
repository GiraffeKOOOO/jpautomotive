// import react
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import necessary components
import HomeCarousel from '../components/HomeCarousel';
import ServiceCard from '../components/ServiceCard';
import Tracker from '../components/Tracker';
// import styling
import '../css/pages/HomePage.css';
// import media
import carDiagnostic from '../images/car-diagnostic.png';
import carTire from '../images/car-tire.png';
import carMaintenance from '../images/car-maintenance.png';

function Home() {
    return(
        <div id="home-page-body">
            <Container className="page-container" fluid>
                <Row id="row-carouself">
                    <Col id="left-col" md={1}/>
                    <Col id="center-col" md={10}>
                        <HomeCarousel/>
                    </Col>
                    <Col id="right-col" md={1}/>
                </Row>
                <Row id="row-services">
                    <Col id="left-col" md={1}/>
                    <Col id="center-col" md={10}>
                        <h1 className="home-page-title"> Our Services</h1>
                        <Container id="services-container" fluid>
                            <Row>
                                <Col className="col-service-card">
                                    <ServiceCard
                                        cardImage={carTire}
                                        cardTitle={"Tire Checks"}
                                        cardText={"Quick brown fox Quick brown fox Quick brown fox Quick brown fox Quick brown fox Quick brown fox Quick brown fox Quick brown fox "}
                                    />
                                </Col>
                                <Col className="col-service-card">
                                    <ServiceCard
                                        cardImage={carDiagnostic}
                                        cardTitle={"Diagnostics"}
                                        cardText={"Quick brown fox Quick brown fox Quick brown fox Quick brown fox Quick brown fox Quick brown fox Quick brown fox Quick brown fox "}
                                    />
                                </Col>
                                <Col className="col-service-card">
                                    <ServiceCard
                                        cardImage={carMaintenance}
                                        cardTitle={"Car Maintenance"}
                                        cardText={"Quick brown fox Quick brown fox Quick brown fox Quick brown fox Quick brown fox Quick brown fox Quick brown fox Quick brown fox "}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col id="right-col" md={1}/>
                </Row>
                <Row id="row-trackers">
                    <Col id="col-trackers">
                        <h1 id="trackers-title">Trackers</h1>
                        <Container id="tracker-container" fluid>
                            <Row>
                                <Col className="col-tracker">
                                    <Tracker
                                        trackerNumber={400}
                                        trackerName="Tires changed"
                                    />
                                </Col>
                                <Col className="col-tracker">1</Col>
                                <Col className="col-tracker">1</Col>
                                <Col className="col-tracker">1</Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row id="row-temp">
                    <Col id="col-temp">
                        1
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;