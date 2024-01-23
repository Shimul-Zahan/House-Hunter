import React from 'react'
import bannerImage from '../../public/assets/landing-header-bg.jpg'
import LogIn from './Login2'

export const Home = () => {

    return (
        <div className='py-24 px-10 min-h-screen bg-blend-overlay bg-black bg-opacity-60' style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'cover' }}>
            
            <LogIn />

        </div>
    )
}
