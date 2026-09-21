import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png';
import { AppContext } from '../Context/context';

const NavBar = () => {
  const navigate = useNavigate();
  const {setStudentLogin, setAdminLogin, setInchargelogin, studentLogin,logout,utoken,itoken,atoken,profileData,dark} = useContext(AppContext);
  const {setProfileOn} = useContext(AppContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const login = () => {
    navigate("/login");
  };
  
  const navigator = () => {
    navigate("/");
  };

  return (
    <>
      <div className={`w-screen max-w-[100vw] h-16 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 font-medium fixed top-0 z-50 transition-all duration-300 border-b ${
        dark 
          ? 'bg-black text-white border-gray-800 shadow-[0_2px_10px_rgba(0,0,0,0.3)]' 
          : 'bg-white text-[#1E293B] border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)]'
      }`}>
        <div className='flex items-center gap-2 sm:gap-3 cursor-pointer' onClick={navigator}>
          <img src={logo} className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover hover:scale-105 transition-transform duration-300' alt="logo" />
          <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-[#2563EB] tracking-tight'>Campus Connect</h1>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-4 lg:gap-8'>
          <div className='flex gap-3 lg:gap-6 text-sm lg:text-base'>
            <NavLink
              to={"/"}
              className={({ isActive }) => `hover:text-[#2563EB] font-semibold transition-all duration-300 whitespace-nowrap ${
                isActive ? 'text-[#2563EB]' : (dark ? 'text-gray-200' : 'text-[#1E293B]')
              }`}
            >
              Home
            </NavLink>
            <NavLink
              to={"/issues/home"}
              className={({ isActive }) => `hover:text-[#2563EB] font-semibold transition-all duration-300 whitespace-nowrap ${
                isActive ? 'text-[#2563EB]' : (dark ? 'text-gray-200' : 'text-[#1E293B]')
              }`}
            >
              Issues
            </NavLink>
            <NavLink
              to={"/team"}
              className={({ isActive }) => `hover:text-[#2563EB] font-semibold transition-all duration-300 whitespace-nowrap ${
                isActive ? 'text-[#2563EB]' : (dark ? 'text-gray-200' : 'text-[#1E293B]')
              }`}
            >
              Our Team
            </NavLink>
            <NavLink
              to={"/help"}
              className={({ isActive }) => `hover:text-[#2563EB] font-semibold transition-all duration-300 whitespace-nowrap ${
                isActive ? 'text-[#2563EB]' : (dark ? 'text-gray-200' : 'text-[#1E293B]')
              }`}
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
              <div 
                className="px-1 py-1 lg:px-2 lg:py-2 flex rounded-2xl relative cursor-pointer"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              >
                <div className="flex gap-2 items-center">
                  <img 
                    src={`${profileData?.profile || 'https://via.placeholder.com/40'}`} 
                    className="rounded-full w-7 h-7 lg:w-9 lg:h-9 object-cover" 
                    alt="" 
                  />
                  <div className="hidden lg:block">
                    <p className="font-bold text-xs lg:text-sm whitespace-nowrap">{profileData?.name}</p>
                    <p className="text-[6px] lg:text-[8px] text-gray-500">({profileData?.branch||profileData?.work})</p>
                  </div>
                </div>
                {profileDropdownOpen && (
                  <div 
                    className={`flex flex-col gap-1 text-xs lg:text-sm absolute right-0 top-full mt-1 ${
                      dark ? 'bg-black text-white border-gray-800' : 'bg-white text-gray-800 border-gray-100'
                    } border px-3 py-2 rounded-xl shadow-lg z-50 whitespace-nowrap min-w-[130px]`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div 
                      className="cursor-pointer hover:text-[#2563EB] px-2 py-1 transition-colors" 
                      onClick={() => {
                        setProfileOn(true); 
                        navigate("/issues/profile");
                        setProfileDropdownOpen(false);
                      }}
                    >
                      View Profile
                    </div>
                    <div 
                      className="cursor-pointer hover:opacity-80 text-red-600 px-2 py-1 transition-colors" 
                      onClick={() => {
                        logout();
                        setProfileDropdownOpen(false);
                      }}
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className='md:hidden flex items-center'>
          {(!utoken ||!itoken||!atoken) && (
            <button
              onClick={login}
              className='rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white px-3 py-1.5 font-semibold shadow-md text-xs whitespace-nowrap'
            >
              Login
            </button>
          )}
          <p 
            className="text-xl text-[#2563EB] ml-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </p>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={`md:hidden fixed top-16 left-0 right-0 w-screen ${
          dark ? 'bg-[#0B0F17] text-white border-gray-800' : 'bg-white text-[#1E293B] border-gray-100'
        } z-40 shadow-lg py-4 px-6 border-t`}>
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
            
            {(utoken || itoken || atoken) && (
              <>
                <div className={`border-t ${dark ? 'border-gray-800' : 'border-gray-200'} pt-3 mt-1`}>
                  <div className="cursor-pointer hover:text-[#2563EB] py-2 text-sm" onClick={()=>{setProfileOn(true); navigate("/issues/profile"); setMobileMenuOpen(false)}}>
                    View Profile
                  </div>
                  <div className="cursor-pointer hover:opacity-80 text-red-600 py-2 text-sm" onClick={()=>{logout(); setMobileMenuOpen(false)}}>
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