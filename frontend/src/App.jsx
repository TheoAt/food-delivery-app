import React, { useState } from 'react'
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
import Login from './components/Login/Login'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ?
        <Login setShowLogin={setShowLogin} />
        :
        null
      }
      <div className='app-container'>
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/panier' element={<Cart />} />
          <Route path='/commande' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/mescommandes' element={<MyOrders />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App