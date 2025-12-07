import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/context";
import { useNavigate } from "react-router-dom";

const InchargeDashboard = () => {
    const {dark,inchargeData,setInchargeData,setPostdata}=useContext(AppContext);
    let [resolved,setresolved]=useState(0);
    let [inprocess,setinprocess]=useState(0);
    let [pending,setpending]=useState(0);
    const navigate=useNavigate();
    useEffect(()=>{
      let pendingdata=0;
      let process=0;
      let resolve=0;
      inchargeData?.yourwork?.map((e,i)=>{
        if(e.resolvedByStudent)resolve++;
        else if(!e.resolvedByStudent&&e.resolvedByIncharge)process++;
        else pendingdata++;
      })
      setpending(pendingdata);
      setinprocess(process);
      setresolved(resolve);

    },[]);
  return (
    <div
      className={`${
        dark ? "dark" : "light"
      } h-screen w-[45%] border border-gray-800 relative`}
    >
           {" "}
      <div className="overflow-y-scroll w-full scroller h-full relative">
        <div className="px-9 py-5 "><p className="captilaize text-2xl font-bold ">DashBoard</p></div>
        <div className="flex justify-between px-12 py-6"><div className="flex flex-col gap-3 items-center"><p className={(!dark&&"hover:text-white")+" px-14 py-12 rounded-full hover:bg-gray-800 border-4 border-gray-800 text-2xl font-bold"}>{resolved}</p><p className="font-bold">Resolved</p></div>
        <div className="flex flex-col gap-3 items-center"><p className={(!dark&&"hover:text-white")+" px-14 py-12 rounded-full hover:bg-gray-800 border-4 border-gray-800 text-2xl font-bold"}>{inprocess}</p><p className="font-bold">In Process</p></div>
        <div className="flex flex-col gap-3 items-center"><p className={(!dark&&"hover:text-white")+" px-14 py-12 rounded-full hover:bg-gray-800 border-4 border-gray-800 text-2xl font-bold"}>{pending}</p><p className="font-bold">Pending</p></div></div>
        <div className="px-12 pt-10 p-6"><p className="text-xl font-bold">Posts Resolved By You</p>
        <div className="flex flex-col gap-4 px-3.5 py-3.5">
            {
                inchargeData?.yourwork?.map((e,index)=>{
                    return <div
      className={`${dark ? "bg-black" : "bg-white"} 
      px-1.5 py-0.5 border border-gray-800 h-[170px] rounded-2xl relative flex items-center gap-5`}
   >
      <img
        src={e.files[0].src}
        className="rounded-xl object-cover w-full h-[70%]"
        alt=""  onClick={()=>{setPostdata(e);navigate(`/issues/post-data/${index}`)}}
      />
      <p className=" text-sm text-gray-500 pt-1.5 px-2 line-clamp-5"  onClick={()=>{setPostdata(e);navigate(`/issues/post-data/${index}`)}}>{e.data}</p>
      
    </div>
  
                })
            }
        </div>
        </div>
      </div>
    </div>
  );
};

export default InchargeDashboard;
