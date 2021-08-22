// import react
import React from 'react';
// import necessary components
import { Container, Row, Col } from 'react-bootstrap';
import { TelephoneFill, EnvelopeFill, ClockFill } from 'react-bootstrap-icons';
// import styling
import '../../css/components/NavHeader/Information.css';
// import media


const Information = () => {
    return(
        <Container id="info-container">
            <Row>
                <Col id="info-time">
                    <ClockFill color="#03b6fc" size={21}/>
                    <p>Mon-Fri <br/> 9am-5pm</p>
                </Col>
                <Col id="info-number">
                    <TelephoneFill color="#03b6fc" size={22}/>
                    <p>07498943120</p>
                </Col>
                <Col id="info-email">
                    <EnvelopeFill color="#03b6fc" size={22}/>
                    <p>j.pautomotivetec@gmail.com</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Information;