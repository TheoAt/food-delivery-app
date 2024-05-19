import React, { useContext, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

import axios from 'axios'

const Login = ({ setShowLogin }) => {

    const { url, setToken } = useContext(StoreContext)

    const [currentState, setCurrentState] = useState("Se connecter")

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value

        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault()

        let newUrl = url
        if (currentState === 'Se connecter') {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl, data)

        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token', response.data.token)
            setShowLogin(false)
        } else {
            alert(response.data.message)
        }

    }

    return (
        <div className='login-container'>
            <form onSubmit={onLogin} className="login-form">
                <div className="login-form-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="cross_icon" />
                </div>

                <div className="login-form-inputs">
                    {currentState === 'Se connecter' ? null : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Votre nom' required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Votre mail" required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Votre mot de passe" required />
                </div>

                <button type='submit'>{currentState === "S'inscrire" ? 'Créer un compte' : 'Se connecter'}</button>

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