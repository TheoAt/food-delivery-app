import React from 'react'
import './App.css'

//Import components
import Navbar from './components/Navbar/Navbar'

//Import React Router
import { Routes, Route } from 'react-router-dom'

//Import Pages
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <div className='app-container'>
        <Navbar />

        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/panier' element={<Cart />} />
          <Route path='/commande' element={<PlaceOrder />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App