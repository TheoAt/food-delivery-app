import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("S'inscrire")

    return (
        <div className='login-container'>
            <form className="login-form">
                <div className="login-form-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="cross_icon" />
                </div>

                <div className="login-form-inputs">
                    {currentState === 'Se connecter' ? null : <input type="text" placeholder='Votre nom' required />}
                    <input type="email" placeholder="Votre mail" required />
                    <input type="password" placeholder="Votre mot de passe" required />
                </div>

                <button>{currentState === "S'inscrire" ? 'Créer un compte' : 'Se connecter'}</button>

                <div className="login-form-condition">
                    <input type="checkbox" required />
                    <p>En continuant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.</p>
                </div>

                {currentState === 'Se connecter' ?
                    <p>Créer un nouveau compte ? <span onClick={() => setCurrentState("S'inscrire")}>Cliquez ici</span></p>
                    :
                    <p>Vous êtes déjà client chez nous ? <span onClick={() => setCurrentState("Se connecter")}>Connectez-vous</span></p>
                }
            </form>
        </div>
    )
}

export default Login