import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png';
import { AppContext } from '../Context/context';

const NavBar = () => {
  const navigate = useNavigate();
  const [islogin,setIsLogin]=useState(true);
    const {setProfileOn}=useContext(AppContext);
  
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
          {!islogin ?<button
            onClick={login}
            className='ml-6 rounded-full  from-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white px-6 py-2 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300'
          >
            Login
          </button>:  <div className=" px-2 py-3 flex  rounded-2xl group">
  <div className="flex gap-1.5 cursor-pointer items-center">
    <img 
      src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80" 
      className="rounded-full w-10 object-cover" 
      alt="" 
    />

    <div>
      <p className="bold">Anmol Vats</p>
      <p className="text-[8px] text-gray-500">(CSE)</p>
    </div>

    <div className="h-full flex items-center">
        <i className="fi fi-br-angle-small-right"></i>
    </div>
  </div>

  <div
    className={` hidden group-hover:flex flex-col gap-2 text-sm absolute right-12 top-14 bg-white px-4 py-3 rounded-xl shadow-lg`}
  >
    <div className="cursor-pointer hover:opacity-80"onClick={()=>{setProfileOn(true);navigate("/issues/profile")}}>View Profile</div>
    <div className="cursor-pointer hover:opacity-80 text-red-800" onClick={()=>{setIsLogin(false);navigate("/")}}>Logout</div>
  </div>
</div>}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
