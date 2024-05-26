import React from 'react'

//Import components
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

//Import pages
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'

import { Routes, Route } from 'react-router-dom'

//Import Toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const URL = 'http://localhost:4001'

  return (
    <div className='app-container'>
      <ToastContainer />

      <Navbar />
      <hr />

      <div className="app-content">
        <Sidebar />

        <Routes>
          <Route path='/add' element={<Add url={URL} />} />
          <Route path='/list' element={<List url={URL} />} />
          <Route path='/orders' element={<Orders url={URL} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App