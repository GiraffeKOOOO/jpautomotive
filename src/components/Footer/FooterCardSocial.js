// import react
import React from 'react';
// import necessary components
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
import { AiFillInstagram } from 'react-icons/ai';
// import styling
import '../../css/components/Footer/FooterCardSocial.css';
// import media

function FooterCardContact() {
    return (
      <div>
        <Card id="card">
            <Card.Body>
                <Card.Title>Find Us On</Card.Title>
                <Row>
                    <Col>
                        <a href="https://www.facebook.com/jpautomotivetec" rel="noopener noreferrer" target="_blank">
                            <FaFacebook 
                                    id="facebook"
                                    size={50}
                                />
                        </a>
                        {/** these links need to be added when they're available */}
                        <a href="https://www.twitter.com/" rel="noopener noreferrer" target="_blank">
                            <AiFillTwitterCircle 
                                id="twitter"
                                size={59}
                            />
                        </a>
                        {/** these links need to be added when they're available */}
                        <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                            <TiSocialYoutubeCircular 
                                id="youtube"
                                size={70}
                            />
                        </a>
                        {/** these links need to be added when they're available */}
                        <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
                            <AiFillInstagram 
                                id="instagram"
                                size={65}
                            />
                        </a>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
      </div>
    );
}

export default FooterCardContact;