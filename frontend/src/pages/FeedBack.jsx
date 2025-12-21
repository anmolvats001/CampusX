import axios from 'axios';
import React, { useContext, useState } from 'react'
import { data, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/context';
import { toast } from 'react-toastify';

const FeedBack = () => {
  const [textdata,setData]=useState(null);
  const {utoken}=useContext(AppContext);
  const [loading,setloading]=useState(false);
  const navigate=useNavigate();
  const postfeedback=async()=>{
    if(!textdata||textdata===""){ return toast.error("Write Something")}
    else if(!utoken){
      toast.error("You can Not send the feedback")
    }
    setloading(true)
    const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/feedback",{data:textdata},{headers:{utoken}});
    if(data.success){
      toast.success(data.message);
      navigate("/");
    }
    else{
      toast.error(data.message);
    }
    setloading(false)
  }
  return (
    <div className='px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 mt-24 sm:mt-12 md:mt-16 lg:mt-20 w-full'>
      <div className='text-center text-2xl font-extrabold'>FeedBack</div>
      <div className='flex items-center flex-col pt-8 gap-4'><textarea onChange={(e)=>setData(e.target.value)} className='w-full h-52 px-2.5 py-3 focus:outline-none border-2 border-gray-500 rounded-xl' placeholder='Enter your FeedBack here'/>
      {loading?<p className='px-5 text-lg py-1 bg-blue-600 rounded-2xl text-white text-2xl'>...</p>:<button onClick={postfeedback} className='px-3 text-lg py-1'>Post</button>}</div>
    </div>
  )
}

export default FeedBack
