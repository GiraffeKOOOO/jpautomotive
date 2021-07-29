// import react
import React from 'react';
// import library components
import { Container, Row, Col } from 'react-bootstrap';
// import custom components
import Logo from './Logo';
import Information from './Information';
import NavButtons from './NavButtons';
// import styling
import '../../css/components/NavHeader/NavHeader.css';
// import media

function NavHeader() {
    return (
        <nav>
            <Container id="nav-container" fluid>
                <Row>
                    <Col id="quadrant-logo">
                        <Logo/>
                    </Col>
                    <Col id="quadrant-info">
                        <Information/>
                    </Col>
                </Row>
                <Row>
                    <Col id="quadrant-logo-below"/>
                    <Col id="quadrant-buttons">
                        <NavButtons/>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}

export default NavHeader;