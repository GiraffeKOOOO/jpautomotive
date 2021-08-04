// import react
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import necessary components
import AboutImage from '../components/AboutImage';
// import styling
import '../css/pages/AboutPage.css';

// import media
import carCartoon from '../images/Car-Cartoon.png';
import fillerImage1 from '../images/filler-image-who.jpg';
import fillerImage2 from '../images/car-midair.jpg';
import fillerImage3 from '../images/repair.jpg';

function About() {
    return(
        <div id="about-page-car">

            <div id="car-animation">
                <Container className="page-container" fluid>
                    <Row id="row-car">
                        <Col id='col-car'>
                        <img
                        id="car-image" 
                        src={carCartoon} 
                        alt="Cartoon Car"/>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container className="page-main" fluid>
            <Row id="who-row">
                    <Col id="who-col">
                        <AboutImage
                            image={fillerImage1}
                            position="left"
                        />

                        <div className="image-spacer"/>

                        <AboutImage
                            image={fillerImage2}
                            position="right"
                        />

                        <div className="image-spacer"/>

                        <AboutImage
                            image={fillerImage3}
                            position="left"
                        />
                    </Col>
                </Row>
            </Container>

        </div>   
    )
}




export default About;