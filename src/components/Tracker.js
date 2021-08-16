// import react
import React from 'react';
// import necessary components
import AnimatedNumber from "animated-number-react";
// import styling
import '../css/components/Tracker.css';

function useOnScreen(options) {
    const ref = React.useRef();
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting === true) {
                setVisible(true)
            }
        }, options)

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, [])

    return [ref, visible]
}

function Tracker(props) {
    const value = props.trackerNumber;
    const [animatedRef, visible] = useOnScreen({rootMargin: "-100px"});

    return (
        <div 
            id="tracker-container"
            ref={animatedRef}
        >
            {visible?
                <AnimatedNumber
                    value={value}
                    duration={2000}
                    delay={400}
                    formatValue={(n) => n.toFixed(0)}
                    className="tracker-number"

                /> 
                :
                <AnimatedNumber
                    value={0}
                    className="tracker-number"
                />
            }
            <h4 id="tracker-name">{props.trackerName}</h4>
        </div>
    );
}
 
export default Tracker;