import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {

    const date = new Date()

    return (
        <div className='footer-container' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="logo_footer" className="footer-logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptate qui numquam totam voluptatum officia a expedita voluptatem eveniet deleniti, eligendi placeat recusandae reprehenderit molestiae repellendus, et quibusdam nobis nesciunt?</p>

                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="facebook_icon" />
                        <img src={assets.twitter_icon} alt="twitter_icon" />
                        <img src={assets.linkedin_icon} alt="linkedin_icon" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>MiamChef</h2>
                    <ul>
                        <li>Accueil</li>
                        <li>A propos</li>
                        <li>Livraison</li>
                        <li>Politique de confidentialité</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>Nous contacter</h2>
                    <ul>
                        <li>01 23 45 67 89</li>
                        <li>theod3v@gmail.com</li>
                    </ul>
                </div>
            </div>

            <hr />

            <p className="footer-copyright">Copyright {date.getFullYear()} © MiamChef.fr / TheoDev - Tous droits réservés </p>
        </div>
    )
}

export default Footer