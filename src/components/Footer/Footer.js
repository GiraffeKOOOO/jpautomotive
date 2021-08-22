// import react
import React from 'react';
// import necessary components
import { Container, Row, Col } from 'react-bootstrap';
import FooterCardContact from './FooterCardContact';
import FooterCardHours from './FooterCardHours';
import FooterCardSocial from './FooterCardSocial';
import FooterButtons from './FooterButtons';
// import styling
import '../../css/components/Footer/Footer.css';
// import media
import jpLogoWhite from '../../images/jp-logo-1-white.png';

function Footer() {
    return (
      <div>
          <Container id="footer-container" fluid>
            <Row id="footer-nav-row">
              <Col id="logo" md={3}>
                <img 
                      src={jpLogoWhite}
                      alt="jplogowhite"
                      id="footer-logo-img"
                      onClick={() => window.location = '/jpautomotive'}
                />
              </Col>
              <Col id="nav-buttons" md={6}>
                <FooterButtons/>
              </Col>
              <Col md={3}/>
            </Row>
            <Row id="info-row">
              <Col id="col-left" xs={0} md={0} lg={1}></Col>
              <Col id="col-center" xs={12} md={12} lg={10}>
                <Row>
                  <Col md={5}><FooterCardContact/></Col>
                  <Col md={4}><FooterCardHours/></Col>
                  <Col md={3}><FooterCardSocial/></Col>
                </Row>
              </Col>
              <Col id="col-right" xs={0} md={0} lg={1}></Col>
            </Row>
            <Row id="copyright-row">
              <Col>
                Copyright and trademark.
              </Col>
            </Row>
          </Container>
      </div>
    );
}

export default Footer;