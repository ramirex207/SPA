import React from 'react'
import '../styles/ProfileCard.css'
import { ProfileCardBotton } from './ProfileCardBotton'
import { ProfileCardTop } from './ProfileCardTop'

function ProfileCard() {
    return (
        <div className='profile-card'>
            <ProfileCardTop/>
            <ProfileCardBotton/>
        </div>
    )
}

export {ProfileCard}
