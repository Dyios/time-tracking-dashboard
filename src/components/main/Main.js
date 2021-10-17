import React from 'react'
import './main.css'
import Person from './person/Person'
import Rate from './rate/Rate'

function Main(props) {
    return (
        <div className='main-container'>
            <Person />
            <Rate rate={props.rate} />
        </div>
    )
}

export default Main
