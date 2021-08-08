// import react
import React from 'react';
// import necessary components
import AnimatedNumber from "animated-number-react";
import { InView } from 'react-intersection-observer';
// import styling
import '../css/components/Tracker.css';

function Tracker(props) {
    const value = props.trackerNumber;
    const formatValue = value => `${Number(value).toFixed(0)}`;

    return (
        <div id="tracker-container">
            <InView>
                {( {inView, ref, entry } ) => (
                    <div ref={ref}>
                    <AnimatedNumber
                        value={value}
                        duration={2000}
                        delay={500}
                        formatValue={formatValue}
                        className="tracker-number"
                        begin={props.begin}
                    />
                    <h4 id="tracker-name" className={inView}>{props.trackerName}</h4>
                    </div>
                )}
            
            </InView>
        </div>
    );
}

export default Tracker;