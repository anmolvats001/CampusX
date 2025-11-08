import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png';  // if this file is inside src/

const NavBar = () => {
  return (
    <div className='bg-amber-200 w-full h-16 items-center flex justify-between px-12'>
      <div className='w-32'><img src={logo} alt="" /></div>
      <div className='flex justify-between w-[30%]'><NavLink to={"/"}>Home</NavLink><NavLink to={"/about"}>About</NavLink><NavLink to={"/issues"}>Issues</NavLink></div>
      <div className='flex w-fit justify-between '><button className='rounded-2xl bg-amber-400 px-5 py-1'>Login / SignUp</button></div>
    </div>
  )
}

export default NavBar
