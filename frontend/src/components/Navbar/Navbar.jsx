import React, { useContext, useState } from 'react'
import './Navbar.css'

import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

    const [currentPage, setCurrentPage] = useState('home')
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

    return (
        <div className='navbar-container'>
            <Link to='/'>
                <img className="logo" src={assets.logo} alt="logo_img" />
            </Link>

            <ul className="navbar-menu">
                <Link to='/' onClick={() => { setCurrentPage('home') }} className={currentPage === 'home' ? 'active-page' : ''}> Accueil</Link>
                <a href='#menu' onClick={() => { setCurrentPage('menu') }} className={currentPage === 'menu' ? 'active-page' : ''}>Menu</a>
                <a href='#app-download' onClick={() => { setCurrentPage('app') }} className={currentPage === 'app' ? 'active-page' : ''}>Application</a>
                <a href='#footer' onClick={() => { setCurrentPage('contact') }} className={currentPage === 'contact' ? 'active-page' : ''}>Contact</a>
            </ul>

            <div className="navbar-right">
                {/* <img src={assets.search_icon} alt="search_icon" /> */}

                <div className="navbar-search-icon">
                    <Link to='/panier'>
                        <img src={assets.basket_icon} alt="basket_icon" />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
                </div>

                {!token ?
                    <button onClick={() => setShowLogin(true)} className='signup-button'>Se connecter</button>
                    :
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} alt="profile_icon" />
                        <ul className="navbar-profile-dropdown">
                            <li onClick={() => navigate('/mescommandes')}>
                                <img src={assets.bag_icon} alt="bag_icon" />
                                <p>Commandes</p>
                            </li>

                            <hr />

                            <li onClick={logout}>
                                <img src={assets.logout_icon} alt="logout_icon" />
                                <p>Déconnexion</p>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar