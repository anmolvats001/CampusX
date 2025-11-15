import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './pages/Login'
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Issues from './pages/Issues'
import Report from './pages/Help'
import {ToastContainer,toast}from "react-toastify"
import Help from './pages/Help'
import MainPage from './pages/MainPage'
import IssueNavBar from './components/IssueNavBar'
import IssueAdder from './components/IssueAdder'
import Sider from './components/Sider'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<><NavBar/><Home/> <Footer/> </>}/>
        <Route path='/login' element={<><NavBar/><Login/> <Footer/> </>}/>
        <Route path='/about' element={<><NavBar/><About/> <Footer/> </>}/>
        <Route path='/team' element={<><NavBar/><Team/> <Footer/> </>}/>
        <Route path='/contact' element={<><NavBar/><Contact/> <Footer/> </>}/>
        <Route path='/issues'>
        <Route path='home'element={<><IssueNavBar/><Sider/><MainPage/><IssueAdder/></>}/>
        </Route>
        <Route path='/help' element={<><NavBar/><Help/> <Footer/> </>}/>
      </Routes>
       <ToastContainer position="top-center" autoClose={3000} />
    </div>
  )
}

export default App
