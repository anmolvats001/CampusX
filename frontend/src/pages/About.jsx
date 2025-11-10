import React from 'react'

const About = () => {
  return (
    <div className='w-full h-fit px-20 py-28 flex justify-center '>
      <div className='border-2 px-4 py-6 w-[70%] rounded-2xl'>
        <h1 className='text-center text-blue-500 text-3xl  font-extrabold'>🏫 ABOUT</h1>
        <div className=' text-[17px] flex flex-col gap-6 mt-7 p-3'>
            <h2 >Campus Connect is a digital platform created to make our college a better and more responsive place for everyone. It allows students to easily report any issues they notice on campus — whether it’s a leaking tap, poor hygiene, broken furniture, or any other maintenance problem. Every complaint submitted is sent directly to the concerned faculty or department for quick action.</h2>
            <h2>Students can also track the status of their complaints, from submission to recognition and resolution, ensuring full transparency. Faculty members can review, update, and mark issues as solved once the problem is fixed.</h2>
            <h2>Our goal is to build a cleaner, safer, and more connected campus through open communication and teamwork between students and staff.</h2>
        </div>
      </div>
    </div>
  )
}

export default About
