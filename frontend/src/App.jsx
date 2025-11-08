import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<><NavBar/><Home/> <Footer/> </>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard'element={<></>}/>
      </Routes>
    </div>
  )
}

export default App
