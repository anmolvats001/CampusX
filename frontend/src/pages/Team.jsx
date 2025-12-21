import React, { useEffect } from "react";
import anmol from "../assets/anmol.jpg"
import ansh from "../assets/ansh.png"
import anshuman from "../assets/anshuman.png"
const Team = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, []);
  
 
    const Coordinators=[
      { name: "Anmol Vats", role: "Full Stack Developer", year: "CSE 2nd Year",img:anmol, insta:"https://www.instagram.com/anmolvats01/",x:"https://x.com/anmol_vats01",in:"https://www.linkedin.com/in/anmol-vats-821592336/"},
      { name: "Ansh Jain", role: "UI/UX Designer", year: "CSE 2nd Year",img:ansh ,insta:"https://www.instagram.com/ansh._jain_?utm_source=qr&igsh=MWFiaGN2cmEzbmN3bg==",x:"https://x.com/anmol_vats01",in:"https://www.linkedin.com/in/ansh-jain8272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
      { name: "Anshuhman Singh", role: "Project Lead", year: "CSE 2nd Year",img:anshuman,insta:"https://www.instagram.com/anshs4096?igsh=MXgxemY1dnhleWd4",x:"https://x.com/Anshuma20169588",in:"https://www.linkedin.com/in/anshuman-singh-91bb33356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    ]
  

  return (
    <div className='px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 mt-24 sm:mt-12 md:mt-16 lg:mt-20 w-full'>
      <div className="font-extrabold uppercase text-center pt-6 sm:pt-12 md:pt-10 pb-8 sm:pb-10 md:pb-12 text-xl sm:text-2xl">
        <div>The people behind Campus Connect</div>
        
        
      </div>
      
    <div className="mb-12 sm:mb-16 md:mb-20">
        <div className='flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 pb-6 w-full'>
          {Coordinators.map((e, i) => ( 
            <div key={i} className='w-64 sm:w-72 h-auto min-h-[18rem] sm:min-h-[20rem] md:h-72 flex flex-col gap-3 sm:gap-4 items-center bg-white shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105'>
              <img
                className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-full border-2 sm:border-3 md:border-4 border-[#ef1742] shadow-md'
                src={e.img}
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
                <i onClick={()=>window.open(e.insta)} className="fi fi-brands-instagram text-gray-600 hover:text-pink-600 cursor-pointer text-base sm:text-lg"></i>
                <i onClick={()=>window.open(e.in)} className="fi fi-brands-linkedin text-gray-600 hover:text-blue-700 cursor-pointer text-base sm:text-lg"></i>
                <i onClick={()=>window.open(e.x)} className="fi fi-brands-twitter text-gray-600 hover:text-blue-400 cursor-pointer text-base sm:text-lg"></i>
              </div>
            </div>
          ))}
        </div>
      </div> 
      
    </div>
  );
};

export default Team;