import React from "react";

const Team = () => {
  const faculty = [
    { name: "Dr. M. R. Panda" },
    { name: "Dr. Mohit Rastogi" },
    { name: "Dr. Kanchan Dixit" },
    { name: "Dr. Rahul Verma" },
  ];

  const devs = [
    { name: "Anmol Vats" },
    { name: "Rahul Sharma" },
    { name: "Priya Singh" },
  ];

  const img =
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&fm=jpg&q=60&w=400";

  return (
    <div className='px-36 mt-20 w-full'>
      <div className='flex overflow-x-scroll gap-32 scroller pb-6 w-full'>
        {faculty.map((e,i)=>( <div className='shrink-0 w-80 h-80 flex flex-col gap-3 items-center bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition-all duration-300'>
          <img
            className='w-28 h-28 object-cover rounded-full border-4 border-[#2563EB] shadow-md'
            src={img}
            alt=''
          />
          <h1 className='text-center text-2xl font-semibold text-[#1E3A8A]'>
            {e.name}
          </h1>
          <h3 className='text-center text-gray-600 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni molestiae praesentium quas natus ipsam.
            </h3>
        </div>
))
       }
        </div>
        </div>
  );
};

export default Team;
