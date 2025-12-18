import React, { useContext } from 'react'
import { AppContext } from '../Context/context';

const CommentShrimmer = () => {
    const {dark}=useContext(AppContext)
  return (
<div
      className={`${dark ? "dark" : "light"} 
       w-full h-[80%] 
      flex justify-center items-center`}
    >
      <div
        className={`flex flex-col items-center text-4xl font-bold ${
          dark ? "animate-shimmer-text-white" : "animate-shimmer-text-black"
        }`}
      >
        <p>CampusX</p>
        <p>...</p>
      </div>
    </div>
  
  )
}

export default CommentShrimmer;
