// import react
import React, {useState } from 'react';
// import necessary components
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Telephone, Envelope } from 'react-bootstrap-icons';
import { Button } from "@react-md/button";
// import styling
import '../css/NavHeader.css';
// import media
import jplogo from '../images/jp-logo-1.png';

function NavHeader() {

    const [navContainerActive, setNavContainerActive] = useState (false);

    return (
        <nav>
            <Container id="nav-container" fluid>
                <Row id="row-left">
                    <Col>
                        <img 
                            src={jplogo}
                            alt="jplgo"
                            id="logo-header"
                        />
                    </Col>
                    <Col id="nav-buttons">
                        <Container id="container-right">
                            <Row id="row-top">
                                {/*information about business here*/}
                                <div className="info-div">
                                    <div>Contact days</div>
                                    <Envelope color="black" size={23}/><p>j.pautomotivetec@gmail.com</p>
                                </div>
                                <div className="info-div">
                                    <Telephone color="black" size={23}/><p>07498 943120</p>
                                </div>
                                <div className="info-div">
                                    <Envelope color="black" size={23}/><p>j.pautomotivetec@gmail.com</p>
                                </div>
                            </Row>
                            <Row id="row-bottom">
                                {/* whilst this is hosted on github pages, the path for the homepage needs to include jpautomotive*/}
                                <Link to='/jpautomotive'>
                                    <Button theme="primary" themeType="outline" className="nav-button">Home</Button>
                                </Link>
                                <Link to='/jpautomotive/about'>
                                    <Button theme="primary" themeType="outline" className="nav-button">About</Button>
                                </Link>
                                <Link to='/jpautomotive/contact'>
                                    <Button theme="primary" themeType="outline" className="nav-button">Contact Us</Button>
                                </Link>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}


export default NavHeader;