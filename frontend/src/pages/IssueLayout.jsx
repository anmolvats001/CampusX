import React from "react";
import { Outlet } from "react-router-dom";
import Sider from "../components/Sider";
import RightSider from "../components/RightSider";
import IssueNavBar from "../components/IssueNavBar";

const IssuesLayout = () => {
  return (
    <div className="h-screen fixed overflow-y-hidden">
      <div className="flex h-full w-screen overflow-y-hidden">
        
      <Sider />
      <div className="w-[45%]"><IssueNavBar/><Outlet /> </div>
      
      <RightSider/> 
    </div>
    </div>
  );
};

export default IssuesLayout;
