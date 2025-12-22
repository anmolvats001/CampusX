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
  const { commvisible, setcommvis, dark, timeAgo, profileon, setDark, postvis, inchargelogin, adminlogin, studentLogin,utoken,itoken,atoken,notificationOn,setNotificationOn } = useContext(AppContext);
  const navigate = useNavigate();
  const [loader,setShowLoader]=useState(true);
  useEffect(() => {
    if(!itoken && !utoken && !atoken)navigate("/login")
      else{
    const timer = setTimeout(() => {
              setShowLoader(false);
            }, 2000); 
        
            return () => {clearTimeout(timer);}
    }
  }, []);
  
  return (
    <div className="w-screen h-screen bg-black">
      {/* Mobile Sider (three-dot menu) - Only shows on mobile */}
      <MobileSider />
      
      {loader?<Shrimmer/>:<div onClick={() => { dark ? setDark(false) : setDark(true) }} className={(dark?"dark":"light")+' fixed bottom-9 right-5 rounded-full px-4 text-2xl py-3 z-100 mb-9 lg:mb-0'}>
        {dark ? <i className="fi fi-ss-moon-stars white text-white"></i> : <i className="fi fi-sr-sun text-yellow-600 text-3xl"></i>}
      </div>
      }
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