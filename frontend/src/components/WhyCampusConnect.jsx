import React from 'react'

const WhyCampusConnect = () => {
  return (
    <div className='px-36 mt-20 w-full'>
      <div className='flex overflow-x-scroll gap-32 scroller pb-6 w-full'>
        <div className='shrink-0 w-80 h-80 flex flex-col gap-3 items-center bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition-all duration-300'>
          <img
            className='w-28 h-28 object-cover rounded-full border-4 border-[#2563EB] shadow-md'
            src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&fm=jpg&q=60&w=3000'
            alt=''
          />
          <h1 className='text-center text-2xl font-semibold text-[#1E3A8A]'>
            Privacy First
          </h1>
          <h3 className='text-center text-gray-600 text-sm'>
            Campus Connect ensures complete privacy for every student. No personal information is shared with faculty or other students unless explicitly permitted. Your identity stays protected at every step.
          </h3>
        </div>

        <div className='shrink-0 w-80 h-80 flex flex-col gap-3 items-center bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition-all duration-300'>
          <img
            className='w-28 h-28 object-cover rounded-full border-4 border-[#2563EB] shadow-md'
            src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&fm=jpg&q=60&w=3000'
            alt=''
          />
          <h1 className='text-center text-2xl font-semibold text-[#1E3A8A]'>
            User Friendly Interface
          </h1>
          <h3 className='text-center text-gray-600 text-sm'>
            Campus Connect is designed with simplicity and clarity in mind. Every feature is intuitive, making it easy for students to submit issues, track progress, and communicate with the administration.
          </h3>
        </div>

        <div className='shrink-0 w-80 h-80 flex flex-col gap-3 items-center bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition-all duration-300'>
          <img
            className='w-28 h-28 object-cover rounded-full border-4 border-[#2563EB] shadow-md'
            src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&fm=jpg&q=60&w=3000'
            alt=''
          />
          <h1 className='text-center text-2xl font-semibold text-[#1E3A8A]'>
            Faster Resolution
          </h1>
          <h3 className='text-center text-gray-600 text-sm'>
            Campus Connect automatically routes issues to the correct department — hostel, academics, library, or administration — ensuring quicker action and reducing delays.
          </h3>
        </div>

        <div className='shrink-0 w-80 h-80 flex flex-col gap-3 items-center bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition-all duration-300'>
          <img
            className='w-28 h-28 object-cover rounded-full border-4 border-[#2563EB] shadow-md'
            src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&fm=jpg&q=60&w=3000'
            alt=''
          />
          <h1 className='text-center text-2xl font-semibold text-[#1E3A8A]'>
            Issue Support System
          </h1>
          <h3 className='text-center text-gray-600 text-sm'>
            Students can support existing issues by reposting them. More support means higher priority and faster attention from the administration.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WhyCampusConnect;
