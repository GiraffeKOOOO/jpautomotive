// import react
import React from 'react';
// import necessary components
import AnimatedNumber from "animated-number-react";
// import styling
import '../css/components/Tracker.css';

function useOnScreen(options) {
    const [ref, setRef] = React.useState(null);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options)
        
        if(ref) {
            observer.observe(ref);
        }

        return () => {
            if(ref) {
                observer.unobserve(ref);
            }
        };

    }, [ref, options])

    return [setRef, visible];

}

function Tracker(props) {
    const value = props.trackerNumber;
    const [setRef, visible] = useOnScreen({rootMargin: '-210px'})

    return (
        <div 
            id="tracker-container"
            ref={setRef}
        >
            <AnimatedNumber
                value={value}
                duration={2000}
                delay={500}
                formatValue={(n) => n.toFixed(0)}
                className="tracker-number"
                begin={null}
            />
            <h4 id="tracker-name">{props.trackerName}</h4>
            <p>{visible? "visble" : "invisible"}</p>
        </div>
    );
}
 
export default Tracker;