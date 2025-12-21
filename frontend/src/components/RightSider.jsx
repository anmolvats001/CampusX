import React, { useContext } from 'react'
import { AppContext } from '../Context/context'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RightSider = () => {
    const {dark,setDark,data,notificationOn,setNotificationOn,utoken}=useContext(AppContext);
    const [siderData,setSiderData]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
      findData();
    },[data]);
    const findData=()=>{
      setSiderData(data.slice(0,4))
    }
  return (
   <div className={(dark ? "dark":"light") +" h-full w-[30%] border-[1px] border-gray-800 relative hidden lg:block"}>
    <div className='pt-10 px-4'>
      <div className='py-2.5 px-3.5 outfit border-1 border-gray-800 rounded-3xl'>
        <div className=' flex justify-between'>
          <p className='text-2xl  font-semibold'>What's happening ?</p>
          {dark?utoken&&<i onClick={()=>setNotificationOn(true)} class="fi fi-ss-bell text-white text-2xl"></i>:utoken&&<i onClick={()=>setNotificationOn(true)} class="fi fi-ss-bell text-2xl"></i>}
        </div>
        <div className=' mt-6 flex flex-col gap-3'>
          {!siderData|| siderData.length==0?<div className='text-center text-gray-500 '>---Nothing to Show---</div>:
          siderData.map((e,i)=>(
              <div key={i} className='cursor-pointer' onClick={()=>{navigate(`/issues/post-data/${e._id}`)}}>
                <p className='line-clamp-1'>{e.data}</p>
                <p className='text-[13px] text-gray-500'>({e.block} Block)</p>
              </div>
            ))
          }
          </div>
          
      </div>
      <div className='py-2.5 px-3.5 outfit text-gray-600 text-sm flex gap-2 mt-4'><a href="tel:+91 7983704504">+91 7983704504</a><p>|</p> <a href="mailto:campusconnect0611@gmail.com">campusconnect0611@gmail.com</a><p>|</p> <a href="">policy</a></div>
      <div className='py-2.5 px-3.5 outfit text-gray-600 text-sm flex justify-center'><p>© 2025 CampusX</p></div>
    </div>
    </div>
  )
}

export default RightSider
