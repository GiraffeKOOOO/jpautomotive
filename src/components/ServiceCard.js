// import react
import React from 'react';
// import necessary components
import Card from 'react-bootstrap/Card';
// import styling
import '../css/components/ServiceCard.css';

function ServiceCard(props) {
    return (
      <div id="card-div">
          <Card border={"light"} style={{ width: '25rem' }}>
              <Card.Img variant="top" src={props.cardImage} id="card-image"/>
                <Card.Header>{props.cardTitle}</Card.Header>
                <Card.Body>
                    <Card.Text>{props.cardText}</Card.Text>
                </Card.Body>
            </Card>
      </div>
    );
}

export default ServiceCard;