import React from 'react'
import clock from "../assets/clock.jpeg"
import computer from "../assets/computer.jpeg"
import security from "../assets/security.jpeg"
import horn from "../assets/horn.jpeg"
const WhyCampusConnect = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-36 mt-8 sm:mt-12 md:mt-16 lg:mt-20 w-full'>
      <div className='flex overflow-x-scroll gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-32 scroller pb-4 sm:pb-6 w-full'>
        <div className='shrink-0 w-64 sm:w-72 md:w-80 h-auto min-h-[18rem] sm:min-h-[20rem] md:h-96 flex flex-col gap-2 sm:gap-3 items-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300 shadow-lg hover:scale-[1.02] sm:hover:scale-110'>
          <img
            className='w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-cover rounded-full border-2 sm:border-3 md:border-4 border-[#2563EB] o shadow-md'
            src={security}
            alt='Privacy First'
          />
          <h1 className='text-center text-lg sm:text-xl md:text-2xl font-semibold text-[#1E3A8A]'>
            Privacy First
          </h1>
          <h3 className='text-center text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed'>
            Campus Connect ensures complete privacy for every student. No personal information is shared with faculty or other students unless explicitly permitted. Your identity stays protected at every step.
          </h3>
        </div>

        <div className='shrink-0 w-64 sm:w-72 md:w-80 h-auto min-h-[18rem] sm:min-h-[20rem] md:h-96 flex flex-col gap-2 sm:gap-3 items-center bg-white shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-110'>
          <img
            className='w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-cover rounded-full border-2 sm:border-3 md:border-4 border-[#2563EB] shadow-md'
            src={computer}
            alt='User Friendly Interface'
          />
          <h1 className='text-center text-lg sm:text-xl md:text-2xl font-semibold text-[#1E3A8A]'>
            User Friendly Interface
          </h1>
          <h3 className='text-center text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed'>
            Campus Connect is designed with simplicity and clarity in mind. Every feature is intuitive, making it easy for students to submit issues, track progress, and communicate with the administration.
          </h3>
        </div>

        <div className='shrink-0 w-64 sm:w-72 md:w-80 h-auto min-h-[18rem] sm:min-h-[20rem] md:h-96 flex flex-col gap-2 sm:gap-3 items-center bg-white shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-110'>
          <img
            className='w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-cover rounded-full border-2 sm:border-3 md:border-4 border-[#2563EB] shadow-md'
            src={clock}
            alt='Faster Resolution'
          />
          <h1 className='text-center text-lg sm:text-xl md:text-2xl font-semibold text-[#1E3A8A]'>
            Faster Resolution
          </h1>
          <h3 className='text-center text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed'>
            Campus Connect automatically routes issues to the correct department — hostel, academics, library, or administration — ensuring quicker action and reducing delays.
          </h3>
        </div>

        <div className='shrink-0 w-64 sm:w-72 md:w-80 h-auto min-h-[18rem] sm:min-h-[20rem] md:h-96 flex flex-col gap-2 sm:gap-3 items-center bg-white shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-110'>
          <img
            className='w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-cover rounded-full border-2 sm:border-3 md:border-4 border-[#2563EB] shadow-md'
            src={horn}
            alt='Issue Support System'
          />
          <h1 className='text-center text-lg sm:text-xl md:text-2xl font-semibold text-[#1E3A8A]'>
            Issue Support System
          </h1>
          <h3 className='text-center text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed'>
            Students can support existing issues by reposting them. More support means higher priority and faster attention from the administration.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WhyCampusConnect;