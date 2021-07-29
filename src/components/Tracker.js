// import react
import React from 'react';
import { useState } from 'react';
// import necessary components
import AnimatedNumber from "animated-number-react";
// import styling
import '../css/components/Tracker.css';

function Tracker(props) {
    const [value, setValue] = useState(props.trackerNumber);
    const formatValue = value => `${Number(value).toFixed(0)}`;
    return (
        <div id="tracker-container">
            <AnimatedNumber
                value={value}
                duration={2000}
                delay={500}
                formatValue={formatValue}
                className="tracker-number"
            />
            <h4 id="tracker-name">{props.trackerName}</h4>
        </div>
    );
}

export default Tracker;