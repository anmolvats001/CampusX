import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/context'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../assets/logo.png';

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
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center'>
                <img src={logo} className='w-20' alt="" />
                <h1 className='text-center text-[#080601] text-3xl  font-extrabold'>ISSUGRAM</h1>
            </div>
        </div>
        <div className='flex flex-col gap-7 w-full items-center py-12'>
            {
                data.map((e,i)=>{
                   return  <div className='h-96 border-2 border-gray-500 rounded-2xl w-[80%]'>
                    <div className='flex gap-2.5 px-6 py-2 items-center'><img src={logo} className='w-16 rounded-full' alt="" />
                    <div>
                        <h1 className='font-bold text-lg'>Anmol vats</h1>
                        <p className='text-[10px]'>(CSE)</p>
                    </div>
                    </div>
                    <div>
                        <div className='w-full px-7'><img className='h-72 w-48 object-cover' src={e.image} alt="" /></div>
                        <div></div>
                    </div>
                   </div>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Issues
