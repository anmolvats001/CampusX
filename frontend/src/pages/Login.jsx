import React, { useState } from 'react'

const Login = () => {
  let [sign,putsign]=useState(true);
  const change=()=>{
    if(sign){
      putsign(false);
    }
    else{
      putsign(true);
    }
  }
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#1A1A1A]'>
      <div className='bg-[#2B2B2B] w-[30%] px-5 py-8 rounded-xl border-2 sha border-[#B38B59] text-[#EDE3C8]'>
        <h1 className='text-center text-3xl font-bold '>Please {!sign?<span>Sign</span>:<span>Login</span>} In </h1>
        <div className='mt-10 flex flex-col items-center gap-4'><div className='flex gap-3'><p>Email :</p><input  type="email" placeholder='Enter your email' className='border-[#B38B59] focus:outline-0 border-2 rounded-lg px-2 capitalize w-64 bg-[#3A3A3A]'/></div>
        {!sign&&<div className='flex gap-3'><p>Name :</p><input type="text" placeholder='Enter your name' className='border-2 focus:outline-0 border-[#B38B59] rounded-lg px-2 capitalize w-64 bg-[#3A3A3A]'/></div>}
        <div className='flex  '><p className='relative right-4'>Password :</p><input className='relative right-1 border-[#B38B59] border-2 rounded-lg px-2 capitalize focus:outline-0 shadow-[#D4AF37] w-64 bg-[#3A3A3A] ' type="password" placeholder='Enter your password' /></div></div>
        <div className='flex justify-center w-full  pt-7'>
          {!sign?<button className='bg-[#7F0909] rounded-2xl px-5 py-1.5 hover:text-gray-700 font-semibold hover:bg-[#D4AF37]'>Signin</button>:<button className='bg-[#7F0909] hover:bg-[#D4AF37] hover:text-gray-700 font-semibold rounded-2xl px-5 py-1.5'>Login</button>}
        </div>
        <div className='mt-3'>
          {
            sign ? <div className='flex justify-center gap-1.5 '><span>Already have an account ? </span><p onClick={change} className='text-blue-500 hover:cursor-pointer'>login</p></div>:
            <div className='flex justify-center gap-1.5'><span>New User ? </span><p onClick={change} className='text-blue-500 hover:cursor-pointer'>SignIn</p></div>
          }
        </div>
      </div>
    </div>
  )
}

export default Login
