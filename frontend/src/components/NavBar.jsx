import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png';
import { AppContext } from '../Context/context';

const NavBar = () => {
  const navigate = useNavigate();
  const {setStudentLogin, setAdminLogin, setInchargelogin, studentLogin,logout,utoken,itoken,atoken} = useContext(AppContext);
  const {setProfileOn} = useContext(AppContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const login = () => {
    navigate("/login");
  };
  
  const navigator = () => {
    navigate("/");
  };

  return (
    <>
      <div className='bg-white w-screen max-w-[100vw] h-16 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 font-medium text-[#1E293B] fixed top-0 z-50 shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-300 border-b border-gray-100 overflow-hidden'>
        <div className='flex items-center gap-2 sm:gap-3 cursor-pointer' onClick={navigator}>
          <img src={logo} className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover hover:scale-105 transition-transform duration-300' alt="logo" />
          <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-[#2563EB] tracking-tight'>Campus Connect</h1>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-4 lg:gap-8'>
          <div className='flex gap-3 lg:gap-6 text-sm lg:text-base'>
            <NavLink
              to={"/"}
              className='hover:text-[#2563EB] font-semibold transition-all duration-300 whitespace-nowrap'
            >
              Home
            </NavLink>
            <NavLink
              to={"/issues/home"}
              className='hover:text-[#2563EB] font-semibold transition-all duration-300 whitespace-nowrap'
            >
              Issues
            </NavLink>
            <NavLink
              to={"/team"}
              className='hover:text-[#2563EB] font-semibold transition-all duration-300 whitespace-nowrap'
            >
              Our Team
            </NavLink>
            <NavLink
              to={"/help"}
              className='hover:text-[#2563EB] font-semibold transition-all duration-300 whitespace-nowrap'
            >
              Help
            </NavLink>
          </div>

          <div>
            {(!utoken&&!itoken&&!atoken) ? (
              <button
                onClick={login}
                className='ml-2 lg:ml-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white px-3 py-1.5 lg:px-5 lg:py-2 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-xs lg:text-sm'
              >
                Login
              </button>
            ) : (
              <div className="px-1 py-1 lg:px-2 lg:py-2  flex rounded-2xl group">
                <div className="flex gap-1 cursor-pointer items-center">
                  <img 
                    src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80" 
                    className="rounded-full w-7 h-7 lg:w-9 lg:h-9 object-cover" 
                    alt="" 
                  />
                  <div className="hidden lg:block">
                    <p className="font-bold text-xs lg:text-sm whitespace-nowrap">Anmol Vats</p>
                    <p className="text-[6px] lg:text-[8px] text-gray-500">(CSE)</p>
                  </div>
                </div>
                <div className={`hidden group-hover:flex flex-col gap-1 text-xs lg:text-sm absolute right-2 lg:right-8 top-0 bg-white px-3 py-2 rounded-xl shadow-lg z-100 whitespace-nowrap h-44`}>
                  <div className="cursor-pointer hover:opacity-80 px-2 py-1" onClick={()=>{setProfileOn(true); navigate("/issues/profile")}}>View Profile</div>
                  <div className="cursor-pointer hover:opacity-80 text-red-800 px-2 py-1" onClick={()=>logout()}>Logout</div>
                </div>
              </div>
            )}
          </div>
        </div>


        <div className='md:hidden flex items-center'>
          {!studentLogin && (
            <button
              onClick={login}
              className='rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white px-3 py-1.5 font-semibold shadow-md text-xs whitespace-nowrap'
            >
              Login
            </button>
          )}
          <p 
            className="text-xl text-[#2563EB] ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </p>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className='md:hidden fixed top-16 left-0 right-0 w-screen bg-white z-40 shadow-lg py-4 px-6 border-t border-gray-100'>
          <div className='flex flex-col gap-2'>
            <NavLink
              to={"/"}
              className='hover:text-[#2563EB] font-semibold transition-all duration-300 py-2'
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/issues/home"}
              className='hover:text-[#2563EB] font-semibold transition-all duration-300 py-2'
              onClick={() => setMobileMenuOpen(false)}
            >
              Issues
            </NavLink>
            <NavLink
              to={"/team"}
              className='hover:text-[#2563EB] font-semibold transition-all duration-300 py-2'
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Team
            </NavLink>
            <NavLink
              to={"/help"}
              className='hover:text-[#2563EB] font-semibold transition-all duration-300 py-2'
              onClick={() => setMobileMenuOpen(false)}
            >
              Help
            </NavLink>
            
            {studentLogin && (
              <>
                <div className="border-t border-gray-200 pt-3 mt-1">
                  <div className="cursor-pointer hover:opacity-80 py-2 text-sm" onClick={()=>{setProfileOn(true); navigate("/issues/profile"); setMobileMenuOpen(false)}}>
                    View Profile
                  </div>
                  <div className="cursor-pointer hover:opacity-80 text-red-800 py-2 text-sm" onClick={()=>{logout()}}>
                    Logout
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;