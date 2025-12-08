import React, { useContext, useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sider from "../components/Sider";
import RightSider from "../components/RightSider";
import IssueNavBar from "../components/IssueNavBar";
import { AppContext } from "../Context/context";
import Comment from "../components/Comment";
import Post from "../components/Post";

const IssuesLayout = () => {
  const { commvisible, setcommvis, dark,timeAgo ,profileon,setDark,postvis,inchargelogin,adminlogin,studentLogin} = useContext(AppContext);
const navigate=useNavigate();
useEffect(()=>{
  (!inchargelogin&&!adminlogin&&!studentLogin)&& navigate("/login")
},[])

  
  return (
    <div className="w-screen h-screen bg-black">
    <div onClick={()=>{dark?setDark(false):setDark(true)}} className={'fixed bottom-9 right-5 rounded-full  px-4 text-2xl py-3 z-100'}>{dark?<i class="fi fi-ss-moon-stars white text-white"></i>:<i class="fi fi-sr-sun text-yellow-600 text-3xl"></i>}</div>
    <div className="h-screen fixed overflow-y-hidden">
      
      <div className="flex h-full w-screen overflow-y-hidden relative">
        <Sider />
          
          <Outlet />{" "}

        {!profileon&& <RightSider/>}
        {commvisible && (
         <Comment/>
        )}
        {
          postvis && (<Post/>)
        }
      </div>
    </div>
    </div>
  );
};

export default IssuesLayout;
