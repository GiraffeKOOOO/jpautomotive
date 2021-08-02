// import react
import React from 'react';
// import necessary components
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
// import styling
import '../../css/components/NavHeader/NavButtons.css';
// import media


const NavButtons = () => {
    return(
        <div id="button-container">
            <div id="button-wrapper">
                <Link id="nav-link" to="/jpautomotive">Home</Link>
                <Link id="nav-link">Services</Link>
                <Link id="nav-link" to="/jpautomotive/about">About</Link>
                <Link id="nav-link">Contact Us</Link>
            </div>
        </div>
    )
}

export default NavButtons;