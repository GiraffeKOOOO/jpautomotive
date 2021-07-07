// import react
import React from 'react';
// import necessary components
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { TelephoneFill, EnvelopeFill, ClockFill } from 'react-bootstrap-icons';
import { Button } from "@react-md/button";
// import styling
import '../css/components/NavHeader.css';
// import media
import jplogo from '../images/jp-logo-1.png';

function NavHeader() {
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
                                    <table id="contact-hours-table">
                                        <tbody>
                                            <tr>
                                                <td>Contact hours</td>
                                                <td>Monday-Friday</td>
                                            </tr>
                                            <tr>
                                                <td id="clock-svg"><ClockFill color="black" size={19}/></td>
                                                <td id="top-line">9am-5pm</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="info-div">
                                    <TelephoneFill color="black" size={19}/><p>07498 943120</p>
                                </div>
                                <div className="info-div">
                                    <EnvelopeFill color="black" size={19}/><p>j.pautomotivetec@gmail.com</p>
                                </div>
                            </Row>
                            <Row id="row-bottom">
                                {/* whilst this is hosted on github pages, the path for the homepage needs to include jpautomotive*/}
                                <Link to='/jpautomotive'>
                                    <Button theme="secondary" themeType="contained" className="nav-button">Home</Button>
                                </Link>
                                <Link to='/jpautomotive/about'>
                                    <Button theme="secondary" themeType="contained" className="nav-button">About</Button>
                                </Link>
                                <Link to='/jpautomotive/contact'>
                                    <Button theme="secondary" themeType="contained" className="nav-button">Contact Us</Button>
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