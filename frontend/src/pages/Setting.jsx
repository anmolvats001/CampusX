import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/context'
import { useNavigate } from 'react-router-dom';

const Setting = () => {
    const {profileon, setProfileOn,dark}=useContext(AppContext);
    const navigate=useNavigate();

  return (
    <div
      className={`${dark ? "dark" : "light"} h-screen w-[45%] border border-gray-800 relative`}
    >
      <div className="overflow-y-scroll w-full scroller h-full relative">
        <p className='text-3xl font-bold pt-6 px-8'>Settings</p>
        <div className='flex flex-col gap-3.5 px-10 capitalize pt-6 font-semibold'>
        <div></div><div className={'flex justify-between  py-2 px-3 rounded-lg cursor-pointer border-b-2 border-b-gray-800 '+(dark? "hover:bg-gray-900":"hover:bg-gray-400")} onClick={()=>navigate("/issues/edit-profile")}><p>edit profile</p><i class="fi fi-br-angle-small-right"></i></div>
        <div onClick={()=>navigate("/issues/change-pass")} className={'flex justify-between  py-2 px-3 rounded-lg border-b-2 border-b-gray-800 '+(dark? "hover:bg-gray-900":"hover:bg-gray-400")}><p>change password</p><i class="fi fi-br-angle-small-right"></i></div>
                    <div className="group">

  <div className={'flex justify-between  py-2 px-3 rounded-lg border-b-2 border-b-gray-800 '+(dark? "hover:bg-gray-900":"hover:bg-gray-400")}><p>contact</p><i class="fi fi-br-angle-small-right"></i></div>
        
  <div
    className="
      flex flex-col gap-3  text-gray-500 ml-6
      max-h-0 overflow-hidden
      opacity-0
      transition-all duration-300 ease-in-out
      group-hover:max-h-40
      group-hover:opacity-100
      group-hover:my-2
      text-sm
    "
  >
    <div className="hover:text-gray-300" > <a href="mailto:vatsanmol4@gmailcom">vatsanmol4@gmailcom</a> </div>
    <div className="hover:text-gray-300" > <a href="tel:+91 7983704504">+91 7983704504</a> </div>
    <div className="hover:text-gray-300" > <a href="">facebook</a> </div>
    <div className="hover:text-gray-300" > <a href="">Instagram</a> </div>
  </div>
</div>
<div className={'flex justify-between  py-2 px-3 rounded-lg border-b-2 border-b-gray-800 '+(dark? "hover:bg-gray-900":"hover:bg-gray-400")} onClick={()=>navigate("/help")}><p>help</p><i class="fi fi-br-angle-small-right"></i></div>
        <div className={'flex justify-between  py-2 px-3 rounded-lg border-b-2 border-b-gray-800 '+(dark? "hover:bg-gray-900":"hover:bg-gray-400")} ><p>give feedback</p><i class="fi fi-br-angle-small-right"></i></div>
        
        </div>
        <div className='px-20 py-7 flex justify-end'><p className=' font-bold px-3 py-1 bg-red-600 text-white rounded-2xl cursor-pointer'onClick={()=>navigate("/")} >logout</p></div>
   </div>
   </div>
  )
}

export default Setting
