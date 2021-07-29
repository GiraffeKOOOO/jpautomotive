// import react
import React from 'react';
// import necessary components
import Button from 'react-bootstrap/Button';
// import styling
import '../../css/components/NavHeader/NavButtons.css';
// import media


const NavButtons = () => {
    return(
        <div id="button-container">
            <div id="button-wrapper">
                <Button id="nav-button">Home</Button>
                <Button id="nav-button">Services</Button>
                <Button id="nav-button">About</Button>
                <Button id="nav-button">Contact Us</Button>
            </div>
        </div>
    )
}

export default NavButtons;