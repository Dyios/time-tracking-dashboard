import React, { useState } from 'react'
import './dashboardElement.css'
import CountUp from 'react-countup';

function DashboardElement({ type, data }) {
    const [ellipseFill, setEllipseFill] = useState('#BBC0FF');

    return (
        <div className="container" style={{ background: `linear-gradient(${type.color} 80%, transparent 0)` }}>
            <div className="iconContainer">
                <img className="icon" src={`images/icon-${type.name}.svg`} alt={type.name} />
            </div>
            <div className="informations">
                <div className="header">
                    <div>{type.name}</div>
                    <svg width="21" height="5" onMouseEnter={() => setEllipseFill('hsl(0, 0%, 100%)')} onMouseLeave={() => setEllipseFill('#BBC0FF')}>
                        <path fill={ellipseFill} fillRule="evenodd" d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
                    </svg>
                </div>
                <div className="hrs-container">
                    <div className="data" >
                        <CountUp end={data.current} duration={1} />hrs
                    </div>
                    <div className="previousData" >
                        Last Week - {data.previous}hrs
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardElement
