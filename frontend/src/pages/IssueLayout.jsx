import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sider from "../components/Sider";
import MobileSider from "../components/MobileSider";
import RightSider from "../components/RightSider";
import { AppContext } from "../Context/context";
import Comment from "../components/Comment";
import Post from "../components/Post";
import Notification from "../components/Notification";
import Shrimmer from "../components/Shrimmer";

const IssuesLayout = () => {
  const { commvisible, dark, profileon, setDark, postvis, utoken, itoken, atoken, notificationOn } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!itoken && !utoken && !atoken) {
      navigate("/login");
    }
  }, [itoken, utoken, atoken]);
  
  return (
    <div className={`w-screen h-screen ${dark ? "bg-[#0B0F17] text-slate-100" : "bg-[#F8FAFC] text-slate-800"}`}>
      {/* Mobile Sider (three-dot menu) - Only shows on mobile */}
      <MobileSider />
      
      <div 
        onClick={() => setDark(!dark)} 
        className={`${
          dark 
            ? "bg-slate-800/90 text-amber-400 border border-slate-700 hover:bg-slate-700" 
            : "bg-white text-amber-500 border border-slate-200 shadow-md hover:bg-slate-50"
        } fixed bottom-9 right-5 rounded-full p-3.5 z-100 mb-9 lg:mb-0 cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center`}
        title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {dark ? <i className="fi fi-ss-moon-stars text-xl"></i> : <i className="fi fi-sr-sun text-xl"></i>}
      </div>

      <div className="h-screen fixed overflow-y-hidden">
        <div className="flex h-full w-screen overflow-y-hidden relative">
          <Sider />
          <Outlet />
          {!profileon && <RightSider />}
          {commvisible && <Comment />}
          {notificationOn && <Notification/>}
          {postvis && <Post />}
        </div>
      </div>
    </div>
  );
};

export default IssuesLayout;