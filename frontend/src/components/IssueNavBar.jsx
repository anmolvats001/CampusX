import React, { useRef } from 'react'
import campus from "../assets/campus.png"
import water from "../assets/DrinkingWater.png";
import building from "../assets/building.png";
import image from "../assets/image.png"
import computer from "../assets/computer.png"
import safety from "../assets/safety.jpg"
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
const IssueNavBar = () => {
  let zoomer=useRef();
  const navigate=useNavigate();
  const find=async(val)=>{
   await gsap.from(zoomer.current,{
      scale:0,
      opacity:0,
      duration:1.2,
      display:"block"
    })
    navigate("/issues/data")
  }
  return (
    <div className='w-full'>
      <div className='w-full bg-black py-3 flex justify-end pr-20  z-10  rounded-b-2xl'>
      <div className='flex items-center justify-between w-[72%]'>
        <div onClick={()=>find("water")} className=' border-gray-500   w-fit h-fit overflow-hidden flex flex-col items-center'><img className='w-[88px] border-4 p-1 rounded-full' src={water} alt="" /><p  className=' text-gray-400 capitalize'>water</p></div>
       <div className=' border-gray-500   w-fit h-fit overflow-hidden flex flex-col items-center'><img className='w-[88px] border-4 p-1 rounded-full' src={building} alt="" /><p className=' text-gray-400 capitalize'>building</p></div>
       <div className=' border-gray-500   w-fit h-fit overflow-hidden flex flex-col items-center'><img className='w-[88px] border-4 p-1 rounded-full' src={computer} alt="" /><p className=' text-gray-400 capitalize'>technical</p></div>
       <div className=' border-gray-500   w-fit h-fit overflow-hidden flex flex-col items-center'><img className='w-[88px] border-4 p-1 rounded-full' src={safety} alt="" /><p className=' text-gray-400 capitalize'>safety</p></div>
       <div className=' border-gray-500   w-fit h-fit overflow-hidden flex flex-col items-center'><img className='w-[88px] border-4 p-1 rounded-full' src={image} alt="" /><p className=' text-gray-400 capitalize'>Administration</p></div>
        <div className=' border-gray-500   w-fit h-fit overflow-hidden flex flex-col items-center'><img className='w-[88px] border-4 p-1 rounded-full' src="https://img.freepik.com/premium-vector/red-question_1309056-520.jpg?semt=ais_hybrid&w=740&q=80" alt="" /><p className=' text-gray-400 capitalize'>Extra</p></div>
      </div>
      
    </div>
    <div ref={zoomer} className='w-screen h-screen absolute bg-black top-0 z-20 hidden'></div>
    </div>
  )
}

export default IssueNavBar
