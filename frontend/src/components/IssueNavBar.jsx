import React from 'react'
import campus from "../assets/campus.png"
const IssueNavBar = () => {
  return (
    <div className='w-full bg-black py-3 flex justify-center'>
      <div className='flex items-center gap-1'><img className='w-14' src={campus} alt="" /><p className='text-white font-extrabold text-2xl italic'>Issugram</p></div>
    </div>
  )
}

export default IssueNavBar
