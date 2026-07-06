import React from 'react';

function SecondsCounter(props) {
    return (
        <div 
            className="big-counter" 
            style={{ 
                display: "flex", 
                flexDirection: "row", 
                justifyContent: "center", 
                alignItems: "center", 
                fontSize: "80px", 
                backgroundColor: "black", 
                height: "100vh", 
                color: "white", 
                gap: "20px" 
            }}
        >
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{Math.floor(props.seconds / 10000) % 10}</div>
            <div className="three">{Math.floor(props.seconds / 1000) % 10}</div>
            <div className="two">{Math.floor(props.seconds / 100) % 10}</div>
            <div className="one">{Math.floor(props.seconds / 10) % 10}</div>
            <div className="zero">{props.seconds % 10}</div>
        </div>
    );
}

export default SecondsCounter;