import React, { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, []);
  
  const faculty = [
    { name: "Dr. M. R. Panda", role: "Faculty Coordinator", department: "CSE Department" },
    { name: "Dr. Mohit Rastogi", role: "Faculty Coordinator", department: "CSE Department" },
    { name: "Dr. Kanchan Dixit", role: "Faculty Coordinator", department: "CSE Department" },
    { name: "Dr. Rahul Verma", role: "Faculty Coordinator", department: "CSE Department" },
  ];

  const devs = [
    { name: "Anmol Vats", role: "Full Stack Developer", year: "CSE 2nd Year" },
    { name: "Rahul Sharma", role: "Frontend Developer", year: "CSE 2nd Year" },
    { name: "Priya Singh", role: "Backend Developer", year: "CSE 2nd Year" },
  ];

  const img = "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&fm=jpg&q=60&w=400";

  return (
    <div className='px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 mt-24 sm:mt-12 md:mt-16 lg:mt-20 w-full'>
      <div className="font-extrabold uppercase text-center pt-6 sm:pt-12 md:pt-10 pb-8 sm:pb-10 md:pb-12 text-xl sm:text-2xl">
        <div>👨‍💻 Meet Our Team</div>
        <p className="text-base sm:text-lg font-normal normal-case mt-2 text-gray-600 max-w-2xl mx-auto">
          Dedicated faculty and talented developers working together to make campus better
        </p>
      </div>
      
      {/* Faculty Section */}
      <div className="mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-[#1E3A8A]">
          Faculty Coordinators
        </h2>
        <div className='flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 pb-6 w-full'>
          {faculty.map((e, i) => ( 
            <div key={i} className='w-56 sm:w-64 h-auto min-h-[18rem] sm:min-h-[20rem] md:h-72 flex flex-col gap-3 sm:gap-4 items-center bg-white shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105'>
              <img
                className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-full border-2 sm:border-3 md:border-4 border-[#2563EB] shadow-md'
                src={img}
                alt={e.name}
              />
              <div className="text-center">
                <h1 className='text-lg sm:text-xl md:text-2xl font-semibold text-[#1E3A8A]'>
                  {e.name}
                </h1>
                <p className="text-xs sm:text-sm font-medium text-gray-700 mt-1">{e.role}</p>
                <p className="text-xs font-light text-gray-500 mt-0.5">{e.department}</p>
              </div>
              <div className="flex gap-3 mt-2">
                <i className="fi fi-brands-instagram text-gray-600 hover:text-pink-600 cursor-pointer text-base sm:text-lg"></i>
                <i className="fi fi-brands-linkedin text-gray-600 hover:text-blue-700 cursor-pointer text-base sm:text-lg"></i>
                <i className="fi fi-brands-twitter text-gray-600 hover:text-blue-400 cursor-pointer text-base sm:text-lg"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Developers Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-[#1E3A8A]">
          Development Team
        </h2>
        <div className='flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 pb-6 w-full'>
          {devs.map((e, i) => ( 
            <div key={i} className='w-56 sm:w-64 h-auto min-h-[18rem] sm:min-h-[20rem] md:h-72 flex flex-col gap-3 sm:gap-4 items-center bg-white shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105'>
              <img
                className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-full border-2 sm:border-3 md:border-4 border-[#10B981] shadow-md'
                src={img}
                alt={e.name}
              />
              <div className="text-center">
                <h1 className='text-lg sm:text-xl md:text-2xl font-semibold text-[#1E3A8A]'>
                  {e.name}
                </h1>
                <p className="text-xs sm:text-sm font-medium text-gray-700 mt-1">{e.role}</p>
                <p className="text-xs font-light text-gray-500 mt-0.5">{e.year}</p>
              </div>
              <div className="flex gap-3 mt-2">
                <i className="fi fi-brands-github text-gray-600 hover:text-gray-800 cursor-pointer text-base sm:text-lg"></i>
                <i className="fi fi-brands-linkedin text-gray-600 hover:text-blue-700 cursor-pointer text-base sm:text-lg"></i>
                <i className="fi fi-brands-twitter-alt text-gray-600 hover:text-blue-400 cursor-pointer text-base sm:text-lg"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
    </div>
  );
};

export default Team;