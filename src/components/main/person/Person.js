import React from 'react'
import './person.css'

function Person() {
    return (
        <div className="person-container">
            <img className="profilImage" src="images/image-jeremy.png" alt="profil"/>
            <div className="name-container">
                <div className="reportFor">Report for</div>
                <div className="name">Jeremy Robson</div>
            </div>
        </div>
    )
}

export default Person
