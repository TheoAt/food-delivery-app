import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download-container' id='app-download'>
            <p>Pour une meilleure experience, téléchargez l'application <br /> MiamChef</p>

            <div className="app-download-platforms">
                <img src={assets.play_store} alt="play_store_app" />
                <img src={assets.app_store} alt="app_store" />
            </div>
        </div>
    )
}

export default AppDownload