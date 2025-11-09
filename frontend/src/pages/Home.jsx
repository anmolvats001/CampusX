import React from 'react'
import WhyCampusConnect from '../components/WhyCampusConnect'

const Home = () => {
  return (
    <div className='w:[100%] overflow-x-hidden h-fit py-20 '>
      <div>
        <h1 className='capitalize font-extrabold text-7xl text-center [word-spacing:-0.2rem] text-blue-600 '>Welcome to Campus <br /><span className=' transform inline-block animate-[moveX_1.2s_ease-in-out_infinite]'>Connect</span></h1>
        <h3 className='mt-11 text-lg font-semibold text-center text-gray-500 italic'>Speak up without fear - your feedback stays anonymous.<br/>
We connect students and management securely and transparently.</h3>
<div className='flex justify-center mt-9 text-xl '><button className='rounded-full bg-blue-600 px-3 text-white font-bold py-1'>Explore compalints
  </button></div>
      </div>
      <div className='px-36  mt-20'>
        <p className='text-center capitalize font-bold text-blue-300 text-3xl mt-9'>Your voice matters- let's fix ABES Together</p>
        <hr  className='my-6 text-gray-300 mb-9'/>
        <div className='flex flex-col gap-12'>
          <div className='flex items-center '>
            <div className='rounded-full overflow-hidden z-10'><img className='w-44 h-44 object-cover rounded-full' src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" alt="" /></div>
            <div className='border-2 rounded-2xl w-[75%] h-32 relative right-11'></div>
        </div>
        <div className='flex items-center relative left-20'>
            
            <div className='border-2 rounded-2xl w-[75%] h-32 relative left-11'></div>
            <div className='rounded-full overflow-hidden z-10'><img className='w-44 h-44 object-cover rounded-full' src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" alt="" /></div>
        </div>
        <div className='flex items-center '>
            <div className='rounded-full overflow-hidden z-10'><img className='w-44 h-44 object-cover rounded-full' src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" alt="" /></div>
            <div className='border-2 rounded-2xl w-[75%] h-32 relative right-11'></div>
        </div>
        </div>
      </div>
      <div className='px-36  mt-20'>
        <p className='text-center  font-bold text-3xl mt-9 text-blue-300'><span className='text-5xl'>W</span>hy <span className='text-5xl'>C</span>ampus <span className='text-5xl'>C</span>onnect</p>
        <hr  className='my-6 text-gray-300 mb-9'/>
      </div>
      <div><WhyCampusConnect/></div>
    </div>
  )
}

export default Home
