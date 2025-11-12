import React, { useState } from 'react'

const Login = () => {
  const [sign, setSign] = useState(true);
  const change = () => setSign(!sign);

  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#F4F5F7]'>
      <div className='bg-gray-800 w-[40%] px-8 py-10 rounded-2xl border border-[#3B82F6] shadow-2xl text-[#EAEAEA]'>
        <p className='text-center text-3xl font-bold text-[#60A5FA] mb-8'>
          🔐 Please {!sign ? <span>Sign</span> : <span>Login</span>} In
        </p>

        <div className='mt-4 flex flex-col items-center gap-6'>
          <div className='flex gap-3 items-center w-full justify-center'>
            <p className='font-medium w-24 text-right text-gray-200'>Email :</p>
            <input
              type='email'
              placeholder='Enter your email'
              className='border border-[#3B82F6] focus:ring-2 focus:ring-[#60A5FA] rounded-lg px-3 py-2 w-64 bg-[#F3F4F6] text-gray-800 transition-all duration-200'
            />
          </div>

          {!sign && (
            <div className='flex gap-3 items-center w-full justify-center'>
              <p className='font-medium w-24 text-right text-gray-200'>Name :</p>
              <input
                type='text'
                placeholder='Enter your name'
                className='border border-[#3B82F6] focus:ring-2 focus:ring-[#60A5FA] rounded-lg px-3 py-2 w-64 bg-[#F3F4F6] text-gray-800 transition-all duration-200'
              />
            </div>
          )}

          <div className='flex gap-3 items-center w-full justify-center'>
            <p className='font-medium w-24 text-right text-gray-200'>Password :</p>
            <input
              type='password'
              placeholder='Enter your password'
              className='border border-[#3B82F6] focus:ring-2 focus:ring-[#60A5FA] rounded-lg px-3 py-2 w-64 bg-[#F3F4F6] text-gray-800 transition-all duration-200'
            />
          </div>
        </div>

        <div className='flex justify-center w-full pt-8'>
          {!sign ? (
            <button className='bg-[#3B82F6] text-white rounded-2xl px-6 py-2 hover:bg-[#2563EB] font-semibold transition-all duration-200'>
              Sign In
            </button>
          ) : (
            <button className='bg-[#3B82F6] text-white rounded-2xl px-6 py-2 hover:bg-[#2563EB] font-semibold transition-all duration-200'>
              Login
            </button>
          )}
        </div>

        <div className='mt-5 text-center text-gray-300'>
          {!sign ? (
            <div className='text-sm'>
              <span>Already have an account ❓ </span>
              <p onClick={change} className='text-[#60A5FA] hover:underline cursor-pointer inline'>
                Login
              </p>
            </div>
          ) : (
            <div className='text-sm'>
              <span>New User ❓ </span>
              <p onClick={change} className='text-[#60A5FA] hover:underline cursor-pointer inline'>
                Sign In
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
