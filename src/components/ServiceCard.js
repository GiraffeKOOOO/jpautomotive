// import react
import React from 'react';
// import necessary components
import Card from 'react-bootstrap/Card';
// import styling
import '../css/components/ServiceCard.css';

function ServiceCard(props) {
    return (
      <div id="card-div">
          <Card id="service-card">
              <Card.Img variant="top" src={props.cardImage} id="card-image"/>
                <Card.Header id="service-card-header">{props.cardTitle}</Card.Header>
                <Card.Body id="service-card-body">
                    <Card.Text>{props.cardText}</Card.Text>
                </Card.Body>
            </Card>
      </div>
    );
}

export default ServiceCard;