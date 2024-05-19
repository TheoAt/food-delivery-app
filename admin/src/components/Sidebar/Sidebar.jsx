import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className="sidebar-options">
                <NavLink to='/add' className="sidebar-option">
                    <img src={assets.add_icon} alt="add_icon" />
                    <p>Ajouter un plat</p>
                </NavLink>

                <NavLink to='/list' className="sidebar-option">
                    <img src={assets.order_icon} alt="cart_icon" />
                    <p>La carte</p>
                </NavLink>

                <NavLink to='/orders' className="sidebar-option">
                    <img src={assets.order_icon} alt="order_icon" />
                    <p>Commandes</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar