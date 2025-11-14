import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png';

const NavBar = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };
  const navigator = () => {
    navigate("/");
  };

  return (
    <div className='bg-white w-full h-16 flex items-center justify-between px-12 font-medium text-[#1E293B] fixed top-0 z-50 shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-300 border-b border-gray-100'>
      <div className='flex items-center gap-3 cursor-pointer' onClick={navigator}>
        <img src={logo} className='w-12 h-12 rounded-full object-cover hover:scale-105 transition-transform duration-300' alt="logo" />
        <h1 className='text-2xl font-bold text-[#2563EB] tracking-tight'>Campus Connect</h1>
      </div>

      <div className='flex items-center gap-10'>
        <div className='flex gap-8 text-[1.05rem]'>
          <NavLink
            to={"/"}
            className='hover:text-[#2563EB] font-semibold transition-all duration-300'
          >
            Home
          </NavLink>
          <NavLink
            to={"/issues/home"}
            className='hover:text-[#2563EB] font-semibold transition-all duration-300'
          >
            Issues
          </NavLink>
          <NavLink
            to={"/team"}
            className='hover:text-[#2563EB] font-semibold transition-all duration-300'
          >
            Our Team
          </NavLink>
          <NavLink
            to={"/help"}
            className='hover:text-[#2563EB] font-semibold transition-all duration-300'
          >
            Help
          </NavLink>
        </div>

        <div>
          <button
            onClick={login}
            className='ml-6 rounded-full  from-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white px-6 py-2 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300'
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
