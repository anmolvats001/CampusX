import { useContext } from "react";
import { AppContext } from "../Context/context";
import campusxwhite from "../assets/campusxwhite.png"
import campusxblack from "../assets/campusxblack.png"
import home from "../assets/house-blank.png"
import search from "../assets/search.png"
import profile from "../assets/user.png"
import setting from "../assets/settings.png"
import { NavLink, useNavigate } from "react-router-dom";
const Sider = () => {
  const {dark,setProfileOn,setFilter,setPostVis,inchargelogin,setInchargelogin,adminlogin,setAdminLogin,studentLogin,setStudentLogin}=useContext(AppContext);
  const navigate=useNavigate();
  
  console.log(dark);
  return(
    <div className={(dark ? "dark":"light") +" pl-32 min-h-screen border-[1px] w-[25%] border-gray-800 "}>
      <div className=" h-full relative">
        <img className="absolute pos right-10" src={!dark ?campusxblack :campusxwhite} alt="" />
        <div className="absolute top-24 text-xl capitalize flex flex-col gap-7 issues-page cursor-pointer">
          <NavLink to={"/issues/home"} className="flex gap-1">{dark ?<i class="fi fi-sr-house-blank text-white"></i>:<i class="fi fi-sr-house-blank"></i>}<p>Home</p></NavLink>
          {inchargelogin&&<NavLink to={"/issues/incharge-dashboard"} className="flex gap-1">{dark ?<i class="fi fi-rr-dashboard-monitor text-white font-bold"></i>:<i class="fi fi-rr-dashboard-monitor font-bold"></i>}<p>DashBoard</p></NavLink>}
          {adminlogin&&<NavLink to={"/issues/adminDashboard"} className="flex gap-1">{dark ?<i class="fi fi-rr-dashboard-monitor text-white font-bold"></i>:<i class="fi fi-rr-dashboard-monitor font-bold"></i>}<p>DashBoard</p></NavLink>}
          <NavLink to={"/issues/search"} className="flex gap-1">{dark ?<i class="fi fi-bs-search text-white"></i>:<i class="fi fi-bs-search"></i>} <p>search</p></NavLink>
          {studentLogin && <div className="flex gap-1" onClick={()=>{setPostVis(true);navigate("/issues/home")}}>{dark ?<i class="fi fi-ss-add text-white"></i>:<i class="fi fi-ss-add"></i>} <p>Report</p></div>}
          {inchargelogin && <div className="flex gap-1" onClick={()=>{navigate("/issues/resolve")}}>{dark ?<i class="fi fi-ss-problem-solving text-white"></i>:<i class="fi fi-ss-problem-solving"></i>} <p>Resolve</p></div>}
          {adminlogin && <div className="flex gap-1" onClick={()=>{navigate("/issues/incharges")}}>{dark ?<i class="fi fi-rr-leadership-alt text-white"></i>:<i class="fi fi-rr-leadership-alt"></i>} <p>Incharges</p></div>}
          {adminlogin && <div className="flex gap-1" onClick={()=>{navigate("/issues/add-incharge")}}>{dark ?<i class="fi fi-sr-person-circle-plus text-white"></i>:<i class="fi fi-ss-problem-solving"></i>} <p> Add Incharges</p></div>}
          <div>
            <div className="group">
  <div className="flex gap-1 items-center cursor-pointer">
    {dark 
      ? <i className="fi fi-sr-play text-white"></i>
      : <i className="fi fi-sr-play"></i>
    }
    <p>Filter</p>
  </div>

  <div
    className="
      flex flex-col gap-3 text-lg text-gray-500 ml-6
      max-h-0 overflow-hidden
      opacity-0
      transition-all duration-300 ease-in-out
      group-hover:max-h-40
      group-hover:opacity-100
      group-hover:my-2
    "
  >
    <div className="hover:text-gray-300" onClick={()=>{ navigate("/issues/home");setFilter("all")}}>All</div>
    <div className="hover:text-gray-300" onClick={()=>{ navigate("/issues/home");setFilter("water")}}>water</div>
    <div className="hover:text-gray-300" onClick={()=>{ navigate("/issues/home");setFilter("administration")}}>administration</div>
    <div className="hover:text-gray-300" onClick={()=>{ navigate("/issues/home");setFilter("building")}}>building</div>
    <div className="hover:text-gray-300" onClick={()=>{ navigate("/issues/home");setFilter("safety")}}>safety</div>
     <div className="hover:text-gray-300" onClick={()=>{ navigate("/issues/home");setFilter("food")}}>food</div>
  </div>
</div>


          </div>
          {studentLogin&&<NavLink to={"/issues/profile"} onClick={()=>setProfileOn(true)} className="flex gap-1">{dark ?<i class="fi fi-sr-user text-white"></i>:<i class="fi fi-sr-user" ></i>} <p>Profile</p></NavLink>}
          <NavLink to={"/issues/setting"} className="flex gap-1">{dark ?<i class="fi fi-sr-settings text-white"></i>:<i class="fi fi-sr-settings"></i>} <p>setting</p></NavLink>
        </div><div className="absolute bottom-6 px-4 py-3 flex border border-gray-800 rounded-2xl group">
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

  <div
    className={`${!dark?"dark":"light"} hidden group-hover:flex flex-col gap-2 text-sm absolute -right-12 bottom-10 px-4 py-3 rounded-xl shadow-lg`}
  >
    <div className="cursor-pointer hover:opacity-80"onClick={()=>{setProfileOn(true);navigate("/issues/profile")}}>View Profile</div>
    <div className="cursor-pointer hover:opacity-80 text-red-800" onClick={()=>{navigate("/");setInchargelogin(false);setStudentLogin(false);setAdminLogin(false)}}>Logout</div>
  </div>
</div>
</div>
    </div>
  )
};

export default Sider;
