// import react
import React from 'react';
// import styling
import '../../css/components/NavHeader/Logo.css';
// import media
import jplogo from '../../images/jp-logo-1.png';

const Logo = () => {
    return(
        <div id="logo-container">
            <div id="logo-div">
                <img 
                    src={jplogo}
                    alt="jplogo"
                    id="logo-img"
                />
            </div>
            <div id="logo-triangle"/>
        </div>
    )
}

export default Logo;