import React from "react";
import home from "../assets/house-blank.png";
import search from "../assets/search.png";
import compass from "../assets/compass-alt.png";
import video from "../assets/play-alt.png";
import add from "../assets/add.png";
import campus from "../assets/campus.png"
import setting from "../assets/settings.png"
import profile from "../assets/user.png"
import { NavLink, useLocation } from "react-router-dom";
const Sider = () => {

  return (
    <div className="w-[20%] h-full left-0 z-99 bg-black py-3 flex pl-5 pt-6 fixed border-r-[1px] border-r-gray-900 issues-page">
      <div>
        <div className="flex gap-2 items-center"><img className='w-14' src={campus} alt="" /><p className="font-semibold italic text-white text-3xl">
          Issugram
        </p></div>
        <div className="mt-14 px-2 flex flex-col justify-between w-full h-[80%]">
          <div className="flex flex-col gap-12">
            <NavLink  to={"/issues/home"}  className={`flex gap-2 items-center text-2xl  `}    >
            <img className="w-6" src={home} alt="" /> <p className="text-white text-[18px]">Home</p>
          </NavLink>
          <NavLink  to={"/issues/search"}  className={`flex gap-2 items-center text-2xl  `}    >
            <img className="w-6" src={search} alt="" /> <p className="text-white text-[18px]">Search</p>
          </NavLink>
          <NavLink  to={"/issues/explore"}  className={`flex gap-2 items-center text-2xl  `}    >
            <img className="w-6" src={compass} alt="" /> <p className="text-white text-[18px]">Explore</p>
          </NavLink>
          <NavLink  to={"/issues/videos"}  className={`flex gap-2 items-center text-2xl  `}    >
            <img className="w-6" src={video} alt="" /> <p className="text-white text-[18px]">Videos</p>
          </NavLink>
           <NavLink  to={"/issues/create"}  className={`flex gap-2 items-center text-2xl  `}    >
            <img className="w-6" src={add} alt="" /> <p className="text-white text-[18px]">Create</p>
          </NavLink>
          </div>
          <div className="flex flex-col  gap-8">
            <NavLink  to={"/issues/profile"}  className={`flex gap-2 items-center text-2xl  `}    >
            <img className="w-6" src={profile} alt="" /> <p className="text-white text-[18px]">Profile</p>
          </NavLink>
          <NavLink  to={"/issues/setting"}  className={`flex gap-2 items-center text-2xl  `}    >
            <img className="w-6" src={setting} alt="" /> <p className="text-white text-[18px]">Setting</p>
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sider;
