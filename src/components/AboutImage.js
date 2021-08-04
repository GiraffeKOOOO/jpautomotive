// import react
import React from 'react';
// import necessary components

// import styling
import '../css/components/AboutImage.css';
// import media

function AboutImage(props) {
    return (
        <div id="about-image-container">
            <img 
                className="place-holder"
                src={props.image} 
                alt="place holder"
            />

            <div 
                className="info-circles"
                id={props.position}
            />
        </div>
    );
}

export default AboutImage;