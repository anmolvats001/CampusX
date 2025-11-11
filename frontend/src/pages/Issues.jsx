import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/context'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Issues = () => {
    const {user}=useContext(AppContext);
    const data=[{
        image:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        video:null,
        id:"water-01",
        hading:"Hello ji",
        Content:"the data that is given to you is very importnat",
        resolved:true,
        checked:true
    },{
        image:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        video:null,
        id:"water-01",
        hading:"Hello ji",
        Content:"the data that is given to you is very importnat",
        resolved:true,
        checked:true
    },{
        image:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        video:null,
        id:"water-01",
        hading:"Hello ji",
        Content:"the data that is given to you is very importnat",
        resolved:true,
        checked:true
    },{
        image:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        video:null,
        id:"water-01",
        hading:"Hello ji",
        Content:"the data that is given to you is very importnat",
        resolved:true,
        checked:true
    },{
        image:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        video:null,
        id:"water-01",
        hading:"Hello ji",
        Content:"the data that is given to you is very importnat",
        resolved:true,
        checked:true
    },{
        image:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        video:null,
        id:"water-01",
        hading:"Hello ji",
        Content:"the data that is given to you is very importnat",
        resolved:true,
        checked:true
    },{
        image:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        video:null,
        id:"water-01",
        hading:"Hello ji",
        Content:"the data that is given to you is very importnat",
        resolved:true,
        checked:true
    }]
    const navigate=useNavigate();
    useEffect(()=>{
        if(user){
             navigate("/login")
            toast.warn("Login First")
        }
    },[])
  return (
    <div className='w-full h-fit  pt-16 flex justify-center '>
      <div className=' px-11 py-6 w-full  rounded-2xl'>
        <h1 className='text-center text-[#EDE3C8] text-3xl  font-extrabold'>⚠️ ISSUES</h1>
        <div className='flex flex-wrap gap-11 w-full'>
            {
                data.map((e,i)=>{
                   return  <div className='w-[40%] h-44 border-2 border-amber-200'>
                    
                   </div>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Issues
