import React from 'react'
import campus from "../assets/campus.png"
import water from "../assets/DrinkingWater.png";
import building from "../assets/building.png";
import image from "../assets/image.png"
import computer from "../assets/computer.png"
import safety from "../assets/safety.jpg"
const IssueNavBar = () => {
  return (
    <div className='w-full bg-black py-3 flex justify-end pr-20  z-10  rounded-b-2xl'>
      <div className='flex items-center justify-between w-[72%]'>
        <div className=' border-gray-500   w-fit h-fit overflow-hidden flex flex-col items-center'><img className='w-[88px] border-4 p-1 rounded-full' src={water} alt="" /><p  className=' text-gray-400 capitalize'>water</p></div>
       <div className=' border-gray-500   w-fit h-fit overflow-hidden flex flex-col items-center'><img className='w-[88px] border-4 p-1 rounded-full' src={building} alt="" /><p className=' text-gray-400 capitalize'>building</p></div>
       <div className=' border-gray-500   w-fit h-fit overflow-hidden flex flex-col items-center'><img className='w-[88px] border-4 p-1 rounded-full' src={computer} alt="" /><p className=' text-gray-400 capitalize'>technical</p></div>
       <div className=' border-gray-500   w-fit h-fit overflow-hidden flex flex-col items-center'><img className='w-[88px] border-4 p-1 rounded-full' src={safety} alt="" /><p className=' text-gray-400 capitalize'>safety</p></div>
       <div className=' border-gray-500   w-fit h-fit overflow-hidden flex flex-col items-center'><img className='w-[88px] border-4 p-1 rounded-full' src={image} alt="" /><p className=' text-gray-400 capitalize'>Administration</p></div>
        <div className=' border-gray-500   w-fit h-fit overflow-hidden flex flex-col items-center'><img className='w-[88px] border-4 p-1 rounded-full' src="https://img.freepik.com/premium-vector/red-question_1309056-520.jpg?semt=ais_hybrid&w=740&q=80" alt="" /><p className=' text-gray-400 capitalize'>Extra</p></div>
      </div>
    </div>
  )
}

export default IssueNavBar
