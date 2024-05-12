import React, { useState } from 'react'
import './Home.css'

//Import components
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import FoodList from '../../components/FoodList/FoodList'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

    const [category, setCategory] = useState("All")

    return (
        <div className='home-container'>
            <Header />
            <Menu category={category} setCategory={setCategory} />
            <FoodList category={category} />
            <AppDownload />
        </div>
    )
}

export default Home