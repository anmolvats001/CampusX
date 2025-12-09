import { useContext, useState } from "react";
import { AppContext } from "../Context/context";
import campusxwhite from "../assets/campusxwhite.png"
import campusxblack from "../assets/campusxblack.png"
import { NavLink, useNavigate } from "react-router-dom";

const MobileSider = () => {
  const { dark, setProfileOn, setFilter, setPostVis, inchargelogin, adminlogin, studentLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  
  return (
    <>
      {/* Three-dot menu - exactly matching your theme */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <p 
          onClick={() => setMenuOpen(!menuOpen)}
          className={`p-3 ${dark ? 'text-white' : 'text-black'} cursor-pointer`}
        >
          <i className="fi fi-br-menu-dots-vertical text-xl"></i>
        </p>
      </div>
      
      {/* Mobile Menu Overlay - EXACTLY like your Sider */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-70"
            onClick={() => setMenuOpen(false)}
          ></div>
          
          {/* Menu Panel - EXACTLY like your Sider */}
          <div className={`absolute top-0 left-0 h-full w-72 ${dark ? 'dark' : 'light'} pl-8 border-[1px] border-gray-800`}>
            <div className="h-full relative">
              {/* Logo - exactly like your Sider */}
              <img 
                className="absolute pos right-4 w-32" 
                src={!dark ? campusxblack : campusxwhite} 
                alt="" 
              />
              
              {/* Navigation Links - EXACTLY like your Sider */}
              <div className="absolute top-24 text-xl capitalize flex flex-col gap-7 issues-page cursor-pointer">
                <NavLink 
                  to="/issues/home" 
                  className="flex gap-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {dark ? <i className="fi fi-sr-house-blank text-white"></i> : <i className="fi fi-sr-house-blank"></i>}
                  <p className={dark ? "text-white" : "text-black"}>Home</p>
                </NavLink>
                
                {inchargelogin && (
                  <NavLink 
                    to="/issues/incharge-dashboard" 
                    className="flex gap-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    {dark ? <i className="fi fi-rr-dashboard-monitor text-white font-bold"></i> : <i className="fi fi-rr-dashboard-monitor font-bold"></i>}
                    <p className={dark ? "text-white" : "text-black"}>DashBoard</p>
                  </NavLink>
                )}
                
                {adminlogin && (
                  <NavLink 
                    to="/issues/adminDashboard" 
                    className="flex gap-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    {dark ? <i className="fi fi-rr-dashboard-monitor text-white font-bold"></i> : <i className="fi fi-rr-dashboard-monitor font-bold"></i>}
                    <p className={dark ? "text-white" : "text-black"}>DashBoard</p>
                  </NavLink>
                )}
                
                <NavLink 
                  to="/issues/search" 
                  className="flex gap-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {dark ? <i className="fi fi-bs-search text-white"></i> : <i className="fi fi-bs-search"></i>}
                  <p className={dark ? "text-white" : "text-black"}>search</p>
                </NavLink>
                
                {studentLogin && (
                  <p 
                    className="flex gap-1 cursor-pointer"
                    onClick={() => { setPostVis(true); navigate("/issues/home"); setMenuOpen(false); }}
                  >
                    {dark ? <i className="fi fi-ss-add text-white"></i> : <i className="fi fi-ss-add"></i>}
                    <p className={dark ? "text-white" : "text-black"}>Report</p>
                  </p>
                )}
                
                {inchargelogin && (
                  <p 
                    className="flex gap-1 cursor-pointer"
                    onClick={() => { navigate("/issues/resolve"); setMenuOpen(false); }}
                  >
                    {dark ? <i className="fi fi-ss-problem-solving text-white"></i> : <i className="fi fi-ss-problem-solving"></i>}
                    <p className={dark ? "text-white" : "text-black"}>Resolve</p>
                  </p>
                )}
                
                {adminlogin && (
                  <p 
                    className="flex gap-1 cursor-pointer"
                    onClick={() => { navigate("/issues/incharges"); setMenuOpen(false); }}
                  >
                    {dark ? <i className="fi fi-rr-leadership-alt text-white"></i> : <i className="fi fi-rr-leadership-alt"></i>}
                    <p className={dark ? "text-white" : "text-black"}>Incharges</p>
                  </p>
                )}
                
                {adminlogin && (
                  <p 
                    className="flex gap-1 cursor-pointer"
                    onClick={() => { navigate("/issues/add-incharge"); setMenuOpen(false); }}
                  >
                    {dark ? <i className="fi fi-sr-person-circle-plus text-white"></i> : <i className="fi fi-ss-problem-solving"></i>}
                    <p className={dark ? "text-white" : "text-black"}>Add Incharges</p>
                  </p>
                )}
                
                {/* Filter Section - EXACTLY like your Sider */}
                <div className="group">
                  <p className="flex gap-1 items-center cursor-pointer">
                    {dark ? <i className="fi fi-sr-play text-white"></i> : <i className="fi fi-sr-play"></i>}
                    <p className={dark ? "text-white" : "text-black"}>Filter</p>
                  </p>
                  
                  <div className="flex flex-col gap-3 text-lg text-gray-500 ml-6 max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-40 group-hover:opacity-100 group-hover:my-2">
                    <p className="hover:text-gray-300 cursor-pointer" onClick={() => { navigate("/issues/home"); setFilter("all"); setMenuOpen(false); }}>All</p>
                    <p className="hover:text-gray-300 cursor-pointer" onClick={() => { navigate("/issues/home"); setFilter("water"); setMenuOpen(false); }}>water</p>
                    <p className="hover:text-gray-300 cursor-pointer" onClick={() => { navigate("/issues/home"); setFilter("administration"); setMenuOpen(false); }}>administration</p>
                    <p className="hover:text-gray-300 cursor-pointer" onClick={() => { navigate("/issues/home"); setFilter("building"); setMenuOpen(false); }}>building</p>
                    <p className="hover:text-gray-300 cursor-pointer" onClick={() => { navigate("/issues/home"); setFilter("safety"); setMenuOpen(false); }}>safety</p>
                    <p className="hover:text-gray-300 cursor-pointer" onClick={() => { navigate("/issues/home"); setFilter("food"); setMenuOpen(false); }}>food</p>
                  </div>
                </div>
                
                {studentLogin && (
                  <NavLink 
                    to="/issues/profile" 
                    className="flex gap-1"
                    onClick={() => { setProfileOn(true); setMenuOpen(false); }}
                  >
                    {dark ? <i className="fi fi-sr-user text-white"></i> : <i className="fi fi-sr-user"></i>}
                    <p className={dark ? "text-white" : "text-black"}>Profile</p>
                  </NavLink>
                )}
                
                <NavLink 
                  to="/issues/setting" 
                  className="flex gap-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {dark ? <i className="fi fi-sr-settings text-white"></i> : <i className="fi fi-sr-settings"></i>}
                  <p className={dark ? "text-white" : "text-black"}>setting</p>
                </NavLink>
              </div>
              
              {/* User Profile - EXACTLY like your Sider */}
              <div className="absolute bottom-6 left-4 right-4 px-4 py-3 flex border border-gray-800 rounded-2xl group">
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
                    {dark ? (
                      <i className="fi fi-br-angle-small-right text-white"></i>
                    ) : (
                      <i className="fi fi-br-angle-small-right"></i>
                    )}
                  </div>
                </div>
                
                <div className={`${!dark ? "dark" : "light"} hidden group-hover:flex flex-col gap-2 text-sm absolute -right-12 bottom-10 px-4 py-3 rounded-xl shadow-lg`}>
                  <p className="cursor-pointer hover:opacity-80" onClick={() => { setProfileOn(true); navigate("/issues/profile"); setMenuOpen(false); }}>View Profile</p>
                  <p className="cursor-pointer hover:opacity-80 text-red-800" onClick={() => { navigate("/"); setMenuOpen(false); }}>Logout</p>
                </div>
              </div>
              
              {/* Close button for mobile */}
              <p 
                className="absolute top-4 right-4 text-2xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSider;