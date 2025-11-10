import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png';  // if this file is inside src/

const NavBar = () => {
  const navigate=useNavigate();
  const login=()=>{
    navigate("/login");
  }
  return (
    <div className='bg-[#2B2B2B] w-full h-16 items-center flex justify-between px-12 font-semibold text-[#EDE3C8] fixed z-90 border-b-2 border-b-[#B38B59] rounded-b-2xl'>
      <div className=' rounded-full overflow-hidden'><img  src={logo} className='rounded-full w-20' alt="" /></div>
      <div className='flex gap-16 '>
        <div className='flex justify-between gap-8'><NavLink to={"/"}>Home</NavLink><NavLink to={"/issues"}>Issues</NavLink><NavLink to={"/contact"}>Contact Info</NavLink><NavLink to={"/team"}>Our Team</NavLink><NavLink to={"/about"}>About</NavLink></div>
      <div className='flex w-fit justify-between '><button className='rounded-2xl bg-[#B38B59] hover:bg-[#D4AF37] hover:text-[#000000] hover:cursor-pointer text-[#1A1A1A] font-semibold px-5 py-1' onClick={login}>Login / SignUp</button></div>
      </div>
    </div>
  )
}

export default NavBar
