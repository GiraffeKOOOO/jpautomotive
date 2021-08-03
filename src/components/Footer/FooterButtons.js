// import react
import React from 'react';
// import necessary components
import { Link } from "react-router-dom";
// import styling
import '../../css/components/Footer/FooterButtons.css';
// import media

function FooterButtons() {
    return (
      <div id="footer-button-container">
        <Link id="footer-link" to="/jpautomotive">Home</Link>
        <Link id="footer-link" to="/jpautomotive/services">Services</Link>
        <Link id="footer-link" to="/jpautomotive/about">About</Link>
        <Link id="footer-link" to="/jpautomotive/contact">Contact Us</Link>
      </div>
    );
}

export default FooterButtons;