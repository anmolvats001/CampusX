import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AppContext } from '../Context/context';

const NavBar = () => {
  const navigate = useNavigate();
  const {
    studentLogin,
    logout,
    utoken,
    itoken,
    atoken,
    profileData,
    dark,
    setDark,
    setProfileOn
  } = useContext(AppContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const login = () => {
    navigate("/login");
  };
  
  const navigator = () => {
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    `px-3.5 py-1.5 rounded-xl font-semibold transition-all duration-200 text-sm lg:text-[15px] ${
      isActive
        ? 'text-[#2563EB] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 shadow-sm'
        : dark
        ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-xl font-semibold transition-all duration-200 text-base ${
      isActive
        ? 'text-[#2563EB] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50'
        : dark
        ? 'text-slate-300 hover:text-white'
        : 'text-slate-700 hover:text-slate-900'
    }`;

  return (
    <>
      <div className={`w-screen max-w-[100vw] h-16 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 font-medium fixed top-0 z-50 transition-colors duration-200 border-b backdrop-blur-md ${
        dark 
          ? 'bg-[#0B0F17]/90 border-slate-800/80 text-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
          : 'bg-white/90 border-slate-200/80 text-slate-800 shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
      }`}>
        <div className='flex items-center gap-2.5 sm:gap-3 cursor-pointer group' onClick={navigator}>
          <img 
            src={logo} 
            className='w-8 h-8 sm:w-10 sm:h-10 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform duration-300 ring-2 ring-blue-500/20' 
            alt="logo" 
          />
          <h1 className='text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight'>
            Campus Connect
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-4 lg:gap-6'>
          <nav className='flex gap-1.5 lg:gap-3'>
            <NavLink to={"/"} className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to={"/issues/home"} className={navLinkClass}>
              Issues
            </NavLink>
            <NavLink to={"/team"} className={navLinkClass}>
              Our Team
            </NavLink>
            <NavLink to={"/help"} className={navLinkClass}>
              Help
            </NavLink>
          </nav>

          <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
            {(!utoken && !itoken && !atoken) ? (
              <button
                onClick={login}
                className='ml-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-1.5 lg:px-5 lg:py-2 font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-xs lg:text-sm'
              >
                Login
              </button>
            ) : (
              <div className="relative group">
                <div className={`flex gap-2.5 cursor-pointer items-center p-1.5 rounded-2xl transition-all duration-200 ${
                  dark ? 'hover:bg-slate-800/80' : 'hover:bg-slate-100'
                }`}>
                  <img 
                    src={profileData?.profile || 'https://via.placeholder.com/40'} 
                    className="rounded-full w-8 h-8 lg:w-9 lg:h-9 object-cover ring-2 ring-blue-500/30" 
                    alt={profileData?.name || "profile"} 
                  />
                  <div className="hidden lg:block text-left">
                    <p className="font-bold text-xs lg:text-sm whitespace-nowrap leading-snug">
                      {profileData?.name || "User"}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 capitalize leading-tight">
                      {profileData?.branch || profileData?.work || "Member"}
                    </p>
                  </div>
                </div>

                {/* Dropdown Menu */}
                <div className={`hidden group-hover:flex flex-col gap-1 absolute right-0 top-full mt-1.5 p-1.5 rounded-2xl shadow-xl z-50 whitespace-nowrap min-w-[170px] border backdrop-blur-md transition-all ${
                  dark 
                    ? 'bg-[#151D2A]/95 border-slate-800 text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
                    : 'bg-white/95 border-slate-200 text-slate-700 shadow-[0_10px_30px_rgba(0,0,0,0.08)]'
                }`}>
                  <div 
                    className="cursor-pointer flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs lg:text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" 
                    onClick={() => { setProfileOn(true); navigate("/issues/profile"); }}
                  >
                    <i className="fi fi-rr-user text-xs"></i>
                    <span>View Profile</span>
                  </div>
                  <div 
                    className="cursor-pointer flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs lg:text-sm font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors" 
                    onClick={() => logout()}
                  >
                    <i className="fi fi-rr-sign-out-alt text-xs"></i>
                    <span>Logout</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className='md:hidden flex items-center gap-2'>
          {(!utoken && !itoken && !atoken) && (
            <button
              onClick={login}
              className='rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 font-semibold shadow-sm text-xs whitespace-nowrap'
            >
              Login
            </button>
          )}
          <button 
            className={`w-9 h-9 flex items-center justify-center rounded-xl transition-colors ${
              dark ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-700'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="text-lg leading-none">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={`md:hidden fixed top-16 left-0 right-0 w-screen z-40 shadow-2xl py-4 px-6 border-b backdrop-blur-md ${
          dark 
            ? 'bg-[#0B0F17]/95 border-slate-800 text-slate-100' 
            : 'bg-white/95 border-slate-200 text-slate-800'
        }`}>
          <div className='flex flex-col gap-1.5'>
            <NavLink
              to={"/"}
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/issues/home"}
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Issues
            </NavLink>
            <NavLink
              to={"/team"}
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Team
            </NavLink>
            <NavLink
              to={"/help"}
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Help
            </NavLink>
            
            {(utoken || itoken || atoken) && (
              <div className="border-t border-slate-200 dark:border-slate-800 pt-3 mt-2 flex flex-col gap-1">
                <div 
                  className="cursor-pointer flex items-center gap-2 py-2 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 text-sm font-medium" 
                  onClick={() => { setProfileOn(true); navigate("/issues/profile"); setMobileMenuOpen(false); }}
                >
                  <i className="fi fi-rr-user text-xs"></i>
                  <span>View Profile ({profileData?.name || 'User'})</span>
                </div>
                <div 
                  className="cursor-pointer flex items-center gap-2 py-2 px-3 rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-sm font-medium" 
                  onClick={() => { logout(); setMobileMenuOpen(false); }}
                >
                  <i className="fi fi-rr-sign-out-alt text-xs"></i>
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;