import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../Context/context';
import Shrimmer from './Shrimmer';
import CommentShrimmer from './CommentShrimmer';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Notification = () => {
      const textareaRef = useRef();
const { notificationOn,setNotificationOn, dark,utoken} = useContext(AppContext);
const navigate=useNavigate();
const [data,setData]=useState(null);
const findData=async()=>{
    const {data}=await axios.get(import.meta.env.VITE_BACKEND_URL+"/api/user/getNotification",{headers:{utoken}});
    if(data.success){
        setData(data.notification);
    }
}
useEffect(()=>{
    findData();
},[])
const deleteData=async()=>{
    const {data}=await axios.get(import.meta.env.VITE_BACKEND_URL+"/api/user/deleteNotifications",{headers:{utoken}});
    console.log("hello")
        setData([]);
}
  return (
    <>
      <div
        className={`${
          dark ? "dark" : "light"
        } fixed lg:absolute w-full lg:w-[30%] z-50 h-full right-0 top-0 px-3 sm:px-4 py-2.5 flex justify-center items-center border-l border-gray-800`}
      >
        <div className="h-full overflow-y-scroll w-full pt-7 lg:pt-5 scroller">
          <div className="lg:hidden flex justify-between items-center mb-3">
            <p className="font-bold text-xl pl-5 lg:pl-0">Notification ...</p>
            <div 
              className="text-2xl cursor-pointer p-2"
              onClick={() => setNotificationOn(false)}
            >
              ×
            </div>
          </div>
          
          <p className="font-bold text-xl hidden lg:block">Notifications ...</p>
          
    
          {(!data)?<CommentShrimmer/>:
        data.length==0?(<div className="h-full overflow-y-scroll w-full pt-4 lg:pt-5 text-2xl font-bold scroller flex justify-center text-gray-500">No Notifications Yet</div>):(<div className="mt-4 flex flex-col gap-3">
            {data.map((e, i) => (
              <div onClick={()=>navigate(`/issues/profile`)}
                key={i}
                className="w-full border-gray-800 border rounded-xl lg:rounded-2xl h-fit px-3 lg:px-3.5 py-2.5"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex gap-2 px-1 lg:px-2.5">
                      <img
                        src={e.files[0].src}
                        className="w-20 h-24 lg:w-10 lg:h-10 object-cover rounded-xl"
                        alt={`Profile picture of ${e.creator.name}`}
                      />
                      <div className="min-w-0 flex flex-col">
                        <p className='line-clamp-2'>{e.data}</p>
                        <p className='bg-green-400 text-white rounded-2xl w-fit px-2'>Resolved</p>
                      </div>
                      
                    </div>
                  </div>
                  </div>
              </div>
            ))}
          </div>)}
        </div>
      </div>
      <div
        className="fixed lg:absolute w-screen z-40 h-full top-0 bg-black opacity-70"
        onClick={() => {
             deleteData();
          setNotificationOn(false);
         
        }}
      ></div>
    </>)
}

export default Notification
