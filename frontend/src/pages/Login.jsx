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
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='bg-amber-200 w-[30%] px-5 py-8 rounded-xl'>
        <div className='text-center text-3xl font-bold '>Please {!sign?<span>Sign</span>:<span>Login</span>} In </div>
        <div className='mt-10 flex flex-col items-center gap-4'><div className='flex gap-3'><p>Email :</p><input type="email" placeholder='Enter your email' className='border-2 rounded-2xl px-2 capitalize w-64'/></div>
        {!sign&&<div className='flex gap-3'><p>Name :</p><input type="text" placeholder='Enter your name' className='border-2 rounded-2xl px-2 capitalize w-64'/></div>}
        <div className='flex  '><p className='relative right-4'>Password :</p><input className='relative right-1 border-2 rounded-2xl px-2 capitalize w-64' type="password" placeholder='Enter your password' /></div></div>
        <div className='flex justify-center w-full  pt-7'>
          {!sign?<button className='bg-amber-300 rounded-2xl px-5 py-1.5'>Signin</button>:<button className='bg-amber-300 rounded-2xl px-5 py-1.5'>Login</button>}
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
