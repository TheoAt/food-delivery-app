import React, { useState } from 'react'
import './Navbar.css'

import { assets } from '../../assets/assets'

const Navbar = () => {

    const [currentPage, setCurrentPage] = useState('home')

    return (
        <div className='navbar-container'>
            <img className="logo" src={assets.logo} alt="logo_img" />

            <ul className="navbar-menu">
                <li onClick={() => { setCurrentPage('home') }} className={currentPage === 'home' ? 'active-page' : ''}> <a href="#home">Accueil</a></li>
                <li onClick={() => { setCurrentPage('menu') }} className={currentPage === 'menu' ? 'active-page' : ''}><a href='#menu'>Menu</a></li>
                <li onClick={() => { setCurrentPage('app') }} className={currentPage === 'app' ? 'active-page' : ''}><a href='#app-download'>Application</a></li>
                <li onClick={() => { setCurrentPage('contact') }} className={currentPage === 'contact' ? 'active-page' : ''}><a href='#footer'>Contact</a></li>
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