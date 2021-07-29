// import react
import React from 'react';
import { useState } from 'react';
// import necessary components
import Carousel from 'react-bootstrap/Carousel';
// import styling
import '../css/components/HomeCarousel.css';
// import media
import carMidAir from '../images/car-midair.jpg';
import engineRepair from '../images/repair.jpg';

function HomeCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={carMidAir}
            alt="Car Mid Air"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-img"
            src={engineRepair}
            alt="Engine Repair"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    );
}

export default HomeCarousel;