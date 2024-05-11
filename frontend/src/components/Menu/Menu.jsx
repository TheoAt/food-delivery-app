import React from 'react'
import './Menu.css'

//Import menu items from assets
import { menu_list } from '../../assets/assets'

const Menu = ({ category, setCategory }) => {
    return (
        <div className='menu-container' id='menu'>
            <h1>Ouvrez-vous l'appétit</h1>
            <p className="menu-desc">Choisissez parmi un menu varié proposant un éventail de plats délicieux élaborés à partir des meilleurs ingrédients et de notre expertise culinaire. Notre mission est de satisfaire vos envies et d'améliorer votre expérience culinaire, plats après plats.</p>

            <div className="menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)} className="menu-list-item" key={index}>
                            <img className={category === item.menu_name ? 'active-menu' : ''} src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>

            <hr />
        </div>
    )
}

export default Menu