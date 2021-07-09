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
                    <Col id="nav-info">
                        {/*information about business here*/}
                        <div className="info-div" id="contact-hours-tbl">
                            <ClockFill color="black" size={21}/>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Contact Hours</td>
                                    </tr>
                                    <tr>
                                        <td>Mon-Fri</td>
                                        <td>9am-5pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="info-div">
                            <TelephoneFill color="black" size={22}/><p>07498943120</p>
                        </div>
                        <div className="info-div">
                            <EnvelopeFill color="black" size={22}/><p>j.pautomotivetec@gmail.com</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}


export default NavHeader;