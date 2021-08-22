// import react
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import necessary components
import HomeCarousel from '../components/HomeCarousel';
import ServiceCard from '../components/ServiceCard';
import Tracker from '../components/Tracker';
import ContactAccordion from '../components/ContactAccordion';
// import styling
import '../css/pages/HomePage.css';
// import media
import carDiagnostic from '../images/car-diagnostic.png';
import carTire from '../images/car-tire.png';
import carMaintenance from '../images/car-maintenance.png';
import supportIcon from '../images/support-icon.png';

function Home() {
    return(
        <div id="home-page-body">
            <Container className="page-container" fluid>
                <Row id="row-carouself">
                    <Col id="left-col" xs={0}/>
                    <Col id="center-col" xs={12}>
                        <HomeCarousel/>
                    </Col>
                    <Col id="right-col" xs={0}/>
                </Row>
                <Row id="row-services">
                    <Col id="left-col" xs={1}/>
                    <Col id="center-col" xs={10}>
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
                    <Col id="right-col" xs={1}/>
                </Row>
                <Row id="row-trackers">
                    <Col id="col-trackers" xs={12}>
                        <h1 id="trackers-title">Trackers</h1>
                        <Container id="tracker-container" fluid>
                            <Row>
                                <Col className="col-tracker" xs={3}>
                                    <Tracker
                                        trackerNumber={24}
                                        trackerName="Jobs Completed"
                                    />
                                </Col>
                                <Col className="col-tracker" xs={3}>
                                    <Tracker
                                        trackerNumber={13}
                                        trackerName="Tires Changed"
                                    />
                                </Col>
                                <Col className="col-tracker" xs={3}>
                                    <Tracker
                                        trackerNumber={17}
                                        trackerName="Oil Filters Replaced"
                                    />
                                </Col>
                                <Col className="col-tracker" xs={3}>
                                    <Tracker
                                        trackerNumber={11}
                                        trackerName="Cars Diagnosed"
                                    />
                                </Col>           
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row id="row-contact"> 
                    <Col id="left-col" xs={0} md={2}/>
                    <Col id="center-col" xs={12} md={8}>
                        <h1 className="home-page-title"> Contact Information</h1>
                        <Row id="inner-contact-row">
                            <Col className="contact-col" id="info-col" xs={12} md={6}>
                                <ContactAccordion/>
                            </Col>
                            <Col className="contact-col" id="info-col-img" md={6}>
                                <img
                                    src={supportIcon}
                                    alt="support-icon"
                                    id="support-icon"
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col id="right-col" xs={0} md={2}/>
                </Row>
            </Container>
        </div>
    );
}

export default Home;