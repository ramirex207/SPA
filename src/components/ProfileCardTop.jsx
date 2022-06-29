import React from 'react'
import foto from '../Assets/Ellipse.png'
import '../styles/ProfileCardTop.css'

function ProfileCardTop() {
    return (
        <div className = 'profile-card-top'>
            <img src={foto} alt=""/>
        </div>
    )
}

export { ProfileCardTop }
