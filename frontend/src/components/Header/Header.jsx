import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <div className="header-filter"></div>
        <div className="header-contents">
            <h2>(Re)Découvrez votre plat préféré</h2>
            <p>Choisissez parmi un menu varié proposant un éventail de plats délicieux élaborés à partir des meilleurs ingrédients et de notre expertise culinaire. Notre mission est de satisfaire vos envies et d'améliorer votre expérience culinaire, plats après plats.</p>
            <button>Notre carte</button>
        </div>
    </div>
  )
}

export default Header