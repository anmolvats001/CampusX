import React from 'react'
import WhyCampusConnect from '../components/WhyCampusConnect'

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden h-fit py-20 pt-36 bg-[#FFFFFF] text-[#1E293B]">
      <div>
        <h1 className="capitalize font-extrabold text-6xl md:text-7xl text-center [word-spacing:-0.1rem] text-[#1E293B]">
          Welcome to Campus <br />
          <span className="text-[#2563EB] transform inline-block animate-[moveX_1.2s_ease-in-out_infinite]">
            Connect
          </span>
        </h1>
        <h3 className="mt-10 text-lg md:text-xl font-medium text-center text-[#64748B] italic">
          Speak up without fear — your feedback stays anonymous.
          <br />
          We connect students and management securely and transparently.
        </h3>
        <div className="flex justify-center mt-10 text-lg">
          <button className="rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] transition-all duration-300 px-6 py-2 font-semibold text-white shadow-sm hover:shadow-md">
            Explore Complaints
          </button>
        </div>
      </div>
      <div className="px-6 md:px-36 mt-20">
        <p className="text-center capitalize font-bold text-[#1E293B] text-2xl md:text-3xl mt-9">
          Your voice matters — let's fix ABES together 🔊
        </p>
        <hr className="my-6 border-[#E5E7EB] mb-10" />
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="rounded-full overflow-hidden z-10 mb-6 md:mb-0">
              <img
                className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-full border-4 border-[#2563EB]"
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000"
                alt=""
              />
            </div>
            <div className="border-2 border-[#E2E8F0] rounded-2xl w-full md:w-[75%] h-28 md:h-32 relative md:right-11 bg-[#F8FAFC] shadow-sm"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-end">
            <div className="border-2 border-[#E2E8F0] rounded-2xl w-full md:w-[75%] h-28 md:h-32 relative md:left-11 bg-[#F8FAFC] shadow-sm"></div>
            <div className="rounded-full overflow-hidden z-10 mt-6 md:mt-0">
              <img
                className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-full border-4 border-[#2563EB]"
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="rounded-full overflow-hidden z-10 mb-6 md:mb-0">
              <img
                className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-full border-4 border-[#2563EB]"
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000"
                alt=""
              />
            </div>
            <div className="border-2 border-[#E2E8F0] rounded-2xl w-full md:w-[75%] h-28 md:h-32 relative md:right-11 bg-[#F8FAFC] shadow-sm"></div>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-36 mt-24">
        <p className="text-center font-bold text-3xl md:text-4xl mt-9 text-[#1E293B]">
          <span className="text-[#2563EB] text-5xl">W</span>hy{" "}
          <span className="text-[#2563EB] text-5xl">C</span>ampus{" "}
          <span className="text-[#2563EB] text-5xl">C</span>onnect 🤔❓
        </p>
        <hr className="my-6 border-[#E5E7EB] mb-9" />
      </div>
      <div className="px-6">
        <WhyCampusConnect />
      </div>
    </div>
  )
}

export default Home
