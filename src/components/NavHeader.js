// import react
import React from 'react';
// import necessary components
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Telephone, Envelope } from 'react-bootstrap-icons';
import { Button } from "@react-md/button";
// import styling
import '../css/NavHeader.css';
// import media
import jplogo from '../images/jp-logo-1.png';

export default function NavHeader() {
    return (
        <nav>
            <Container id="nav-container" fluid>
                <Row>
                    <Col>
                        <img 
                            src={jplogo}
                            alt="jplgo"
                            id="logo-header"
                        />
                    </Col>
                    <Col id="nav-buttons">
                    {/*
                        <Row>
                             nformation about business here
                            <div className="info-div">
                                <Telephone color="white" size={20} style={{marginRight: '5px', marginTop: '3px',}}/><p>07498 943120</p>
                            </div>
                            <div className="info-div">
                                <Envelope color="white" size={20} style={{marginRight: '5px', marginTop: '5px',}}/><p>j.pautomotivetec@gmail.com</p>
                            </div>
                        </Row>
                    
                        <Row>
                            */}
                            {/* whilst this is hosted on github pages, the path for the homepage needs to include jpautomotive*/}
                            <Link to='/jpautomotive'>
                                <Button theme="primary" themeType="outline" className="nav-button">Home</Button>
                            </Link>
                            <Link to='/about'>
                                <Button theme="primary" themeType="outline" className="nav-button">About</Button>
                            </Link>
                            <Link to='/contact'>
                                <Button theme="primary" themeType="outline" className="nav-button">Contact Us</Button>
                            </Link>
                           {/* 
                        </Row>
                        */} 
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}