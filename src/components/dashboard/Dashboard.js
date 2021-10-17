import React, { useState } from 'react'
import './dashboard.css'
import Main from '../main/Main'
import DashboardElement from '../dashboardElement/DashboardElement'

function Dashboard() {
    const types = [{name:'work',color:'hsl(15, 100%, 70%)'}, {name:'play',color:'hsl(195, 74%, 62%)'}, {name:'study',color:'hsl(348, 100%, 68%)'}, {name:'exercise',color:'hsl(145, 58%, 55%)'}, {name:'social',color:'hsl(264, 64%, 52%)'}, {name:'self-care',color:'hsl(43, 84%, 65%)'}];
    const dailyData = [{ current: 5, previous: 7 },
    { current: 1, previous: 2 },
    { current: 0, previous: 1 },
    { current: 1, previous: 1 },
    { current: 1, previous: 3 },
    { current: 0, previous: 1 },
    ];
    const weeklyData = [{ current: 32, previous: 36 },
    { current: 10, previous: 8 },
    { current: 4, previous: 7 },
    { current: 4, previous: 5 },
    { current: 5, previous: 10 },
    { current: 2, previous: 2 },
    ];
    const monthlyData = [{ current: 103, previous: 128 },
    { current: 23, previous: 29 },
    { current: 13, previous: 19 },
    { current: 11, previous: 18 },
    { current: 21, previous: 23 },
    { current: 7, previous: 11 },
    ];

    const [rate, setRate] = useState('weekly');
    const rates = {daily: dailyData, weekly: weeklyData, monthly: monthlyData}

  let dashboardElements = []
    for(let i=0 ; i < types.length; i++ ) {
        dashboardElements.push(<DashboardElement key={types[i].name} type={types[i]} data={rates[rate][i]} />);
    }

    return (
            <div className="dashboardContainer">
                <Main rate={[rate, setRate]} />
                {dashboardElements}
            </div>
        )
}

export default Dashboard
