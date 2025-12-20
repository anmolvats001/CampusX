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
import Sider from './components/Sider'
import Data from './components/Data'
import IssuesLayout from './pages/IssueLayout'
import Info from './pages/Info'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import PostData from './components/PostData'
import Search from './pages/Search'
import Setting from './pages/Setting'
import ChangePasswod from './pages/ChangePasswod'
import Resolve from './pages/Resolve'
import InchargeDashboard from './pages/InchargeDashboard'
import AdminDashBoard from './pages/AdminDashBoard'
import Incharges from './pages/Incharges'
import AddIncharge from './pages/AddIncharge'
import FeedBack from './pages/FeedBack'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<><NavBar/><Home/> <Footer/> </>}/>
        <Route path='/login' element={<><NavBar/><Login/> </>}/>
        <Route path='/about' element={<><NavBar/><About/> <Footer/> </>}/>
        <Route path='/team' element={<><NavBar/><Team/> <Footer/> </>}/>
        <Route path='/contact' element={<><NavBar/><Contact/> <Footer/> </>}/>
        <Route path='/feedback'element={<><NavBar/><FeedBack/> <Footer/> </>}/>
        <Route path="/issues" element={<IssuesLayout />}>
        
           <Route path="home" element={<><MainPage /></>} />
           <Route path="data" element={<Data />} />
           <Route path='info/:id'element={<Info/>}/>
           <Route path='profile' element={<Profile/>}/>
           <Route path='setting'element={<Setting/>}/>
           <Route path='edit-profile' element={<EditProfile/>}/>
           <Route path='post-data/:id' element={<PostData/>}/>
           <Route path='search'element={<Search/>}/>
           <Route path='change-pass'element={<ChangePasswod/>}/>
           <Route path='resolve' element={<Resolve/>}/>
           <Route path='incharge-dashboard'element={<InchargeDashboard/>}/>
           <Route path='adminDashboard'element={<AdminDashBoard/>}/>
           <Route path='incharges'element={<Incharges/>}/>
           <Route path='add-incharge'element={<AddIncharge/>}/>
        </Route>
        <Route path='/help' element={<><NavBar/><Help/> <Footer/> </>}/>
      </Routes>
       <ToastContainer position="top-center" autoClose={3000} />
    </div>
  )
}
export default App