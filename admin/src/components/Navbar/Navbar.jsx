import React from 'react'
import './Navbar.css'

import { assets } from '../../assets/assets.js'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <img className='logo' src={assets.logo} alt="logo_navbar" />
            <img className='profile' src={assets.profile_image} alt="profile_picture" />
        </div>
    )
}

export default Navbar