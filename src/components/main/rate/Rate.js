import React from 'react'
import './rate.css'

function Rate(props) {
    const [rate, setRate] = props.rate;

    return (
        <div className="rate-container">
            <div className={rate === 'daily' ? 'selected' : ''} onClick={()=>setRate('daily')}>Daily</div>
            <div className={rate === 'weekly' ? 'selected' : ''} onClick={()=>setRate('weekly')}>Weekly</div>
            <div  className={rate === 'monthly' ? 'selected' : ''} onClick={()=>setRate('monthly')}>Monthly</div>
        </div>
    )
}

export default Rate
