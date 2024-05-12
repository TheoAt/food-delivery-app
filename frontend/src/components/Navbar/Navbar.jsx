import React, { useState } from 'react'
import './Navbar.css'

import { assets } from '../../assets/assets'
import { Link }  from 'react-router-dom'

const Navbar = () => {

    const [currentPage, setCurrentPage] = useState('home')

    return (
        <div className='navbar-container'>
            <img className="logo" src={assets.logo} alt="logo_img" />

            <ul className="navbar-menu">
                <Link to='/' onClick={() => { setCurrentPage('home') }} className={currentPage === 'home' ? 'active-page' : ''}> Accueil</Link>
                <a href='#menu' onClick={() => { setCurrentPage('menu') }} className={currentPage === 'menu' ? 'active-page' : ''}>Menu</a>
                <a href='#app-download' onClick={() => { setCurrentPage('app') }} className={currentPage === 'app' ? 'active-page' : ''}>Application</a>
                <a href='#footer' onClick={() => { setCurrentPage('contact') }} className={currentPage === 'contact' ? 'active-page' : ''}>Contact</a>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="search_icon" />

                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="basket_icon" />
                    <div className="dot"></div>
                </div>

                <button className='signup-button'>Se connecter</button>
            </div>
        </div>
    )
}

export default Navbar