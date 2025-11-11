import React from 'react'

const About = () => {
  return (
    <div className='w-full min-h-fit px-20 pt-28 flex justify-center bg-[#F9FAFB]'>
      <div className='border border-[#3B82F6] shadow-lg px-8 py-10 w-[70%] rounded-2xl bg-white h-fit'>
        <h1 className='text-center text-[#1E293B] text-4xl font-extrabold tracking-wide'>
          🏫 About
        </h1>

        <div className='text-[18px] flex flex-col gap-6 mt-8 p-3 text-[#475569]'>
          <h3>
            <span className='font-semibold text-[#2563EB]'>Campus Connect</span> is a digital platform created to make our college a better and more responsive place for everyone. It allows students to easily report any issues they notice on campus — whether it’s a 💧 leaking tap, 🧹 poor hygiene, broken furniture, or any other maintenance problem. Every complaint submitted is sent directly to the concerned faculty or department for quick action.
          </h3>

          <h3>
            Students can also track the status of their complaints 📊 — from submission to recognition and resolution — ensuring full transparency. Faculty members can review, update, and mark issues as ✅ solved once the problem is fixed.
          </h3>

          <h3>
            Our goal is to build a cleaner, safer, and more connected campus through open communication and teamwork between students and staff. 🤝
          </h3>
        </div>
      </div>
    </div>
  )
}

export default About;
