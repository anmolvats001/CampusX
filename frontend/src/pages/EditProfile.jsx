import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/context';
import upload_icon from "../assets/upload_icon.png"
import { useNavigate } from 'react-router-dom';
const EditProfile = () => {
    const [image,setimage]=useState(false);
    const {userData,setUserData,dark,setProfileOn}=useContext(AppContext);
    const navigate=useNavigate();
    const updateUserProfileData=async ()=>{
    try {
      const formData= new FormData();
      formData.append('name',userData.name);
      formData.append("phone",userData.phone);
      formData.append("address",JSON.stringify(userData.address));
      formData.append("gender",userData.gender);
      formData.append("dob",userData.dob);

      image && formData.append("image",image);
    }
    catch(err){
        console.log(err);
    }
  }
  useEffect(()=>{
    setProfileOn(true);
    return()=>setProfileOn(false);
  },[])
  return (
    <div
      className={`${dark ? "dark" : "light"} h-screen w-[75%] border border-gray-800 relative`}
    >
      <div className="overflow-y-scroll w-full scroller h-full relative">
        <div className="border-b border-gray-800 pb-4">
          <div className="flex gap-4 pt-7 px-7 items-center justify-between w-[90%]">

            <div className="flex gap-4 items-center">
               <label htmlFor="image">
                  <div className='inline-block relative cursor-pointer  '>
                    <img className='w-36 rounded opacity-75 rounded-full' src={image ? URL.createObjectURL(image):userData.image} alt="" />
                    <img className='w-10 absolute bottom-12 right-12' src={image ?' ':`${upload_icon}`} alt="" />
                  </div>
                  <input onChange={(e)=>setimage(e.target.files[0])} type="file" id='image'hidden/>
                </label>
                <div>
                <div className='flex flex-col gap-1'>
                    <input type="text" className="text-xl rounded-lg font-bold border-1 border-gray-700 px-1.5  focus:outline-0 w-fit" value={userData.name} onChange={(e)=>setUserData(prev=>({...prev,name:e.target.value}))}/>
                <input type='text' className={(dark ? "text-gray-300" : "text-gray-800")+" w-fit border-1 border-gray-700 px-1.5  focus:outline-0"}
                value={userData.branch} onChange={(e)=>setUserData(prev=>({...prev,branch:e.target.value}))}/>
                <textarea className="text-xs mt-2.5  text-gray-500 capitalize w-[500px]  border-1 border-gray-700 px-1.5  focus:outline-0 focus:text-white resize-none scroller" value={userData.address} onChange={(e)=>setUserData(prev=>({...prev,address:e.target.value}))}>
                  
                </textarea>
                </div>
              </div>
            </div>
          </div>
       </div>
       <div className="grid grid-cols-[150px_auto] gap-y-3 gap-x-2 px-8 pt-3">

        <div ><p className='text-lg font-semibold capitalize'>College :</p></div><input type="text" value={'ABES Engineering College'} className=" w-fit border-1 border-gray-700 px-1.5 rounded-lg  focus:outline-0" />
        <div ><p className='text-lg font-semibold capitalize'>Mobile No. :</p></div><input type="text"onChange={(e)=>setUserData(prev=>({...prev,mobile_no:e.target.value}))} value={userData.mobile_no} className=" w-fit border-1 border-gray-700 px-1.5 rounded-lg  focus:outline-0" />
        <div ><p className='text-lg font-semibold capitalize'>Email :</p></div><input type="text"onChange={(e)=>setUserData(prev=>({...prev,email:e.target.value}))} value={userData.email} className=" w-fit border-1 border-gray-700 px-1.5 rounded-lg  focus:outline-0" />
        <div>
  <p className="text-lg font-semibold capitalize">Gender :</p>
</div>

<select
  value={userData.gender}
  onChange={(e) =>
    setUserData(prev => ({ ...prev, gender: e.target.value }))
  }
  className={(dark?"dark":"light")+" w-fit border border-gray-700 px-1.5 rounded-lg focus:outline-none bg-transparent"}
>
  <option value="">Select</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>

        <div ><p className='text-lg font-semibold capitalize'>DOB:</p></div>
            <input
  type="date"
  onChange={(e) =>
    setUserData(prev => ({ ...prev, dob: e.target.value }))
  }
  className="w-fit border border-gray-700 px-1.5 rounded-lg focus:outline-none"
  style={{ colorScheme: dark ? "dark" : "light" }}/>

        <div ><p className='text-lg font-semibold capitalize'>Bio :</p></div><textarea type="text"onChange={(e)=>setUserData(prev=>({...prev,bio:e.target.value}))} value={userData.bio} className="w-[100%] border-1 border-gray-700 px-1.5 h-[100px] resize-none scroller rounded-lg focus:outline-0" ></textarea>
        
       </div>
       <div className='flex justify-center w-[80%] mt-4'><p className={`${dark?"light":"dark"} px-3.5  cursor-pointer py-1 rounded-3xl w-fit`} onClick={()=>{image &&  setUserData(prev => ({ ...prev, image:URL.createObjectURL(image)})) ;navigate("/issues/profile")}}>Apply the changes</p></div>
        </div>
        </div>
  )
}

export default EditProfile
