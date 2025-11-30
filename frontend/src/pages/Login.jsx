import React, { useEffect, useRef, useState } from 'react';
import { toast } from "react-toastify";
import login from "../assets/login.jpeg";
import { gsap } from "gsap";

const Login = () => {
  const [sign, setSign] = useState(false);
  const [otpverify, setotpverify] = useState(false);
  const emaildata = useRef();
  const mainpart=useRef();
  const sidepart=useRef();
  const change = () => setSign(!sign);
const moveright = () => { 
  gsap.to(mainpart.current, {
    xPercent: 100, 
    duration: 1,
    ease: "power2.out"
  });

  gsap.to(sidepart.current, {
    xPercent: -100, 
    duration: 1,
    ease: "power2.out"
  });
};
const moveleft = () => { 
  gsap.to(mainpart.current, {
    xPercent: 0, 
    duration: 1,
    ease: "power2.out"
  });
  gsap.to(sidepart.current, {
    xPercent: 0, 
    duration: 1,
    ease: "power2.out"
  });
};
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="w-full h-screen absolute bottom-0 bg-gray-300 flex justify-center">
      <div className="h-full w-[80%] bg-white flex">
        <div className="w-[50%] h-full flex flex-col justify-center items-center" ref={mainpart}>

          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col gap-5 text-center">
              <p className="capitalize text-3xl font-bold text-black">
                Welcome {!sign ? "Back" : <>To Campus <br /> Connect</>}
              </p>
              <p className="text-gray-500 text-sm">Enter the credentials to access your account</p>
            </div>

            <div className="flex flex-col gap-4 w-72">

              {sign && (
                <div className="flex flex-col gap-1">
                  
                  <input id="name" type="text" placeholder='Enter Name' className="border focus:outline-0 px-2 py-1 rounded" />
                </div>
              )}

              <div className="flex flex-col gap-1">
              
                <input id="admno" type="text" placeholder='Enter Addmission No.' className="border focus:outline-0 px-2 py-1 rounded" />
              </div>

              {sign && (
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 relative">
                    <input id="email" ref={emaildata} placeholder='Enter the Email' type="email" className="border px-2 focus:outline-0 py-1 rounded w-full" />
                    <button
                      className="px-3 py-1 bg-blue-500 text-white  absolute right-[-70px]"
                      onClick={() => {
                        if (emaildata.current.value !== "") setotpverify(true);
                        else toast.error("Enter valid Email");
                      }}
                    >
                      verify
                    </button>
                  </div>

                  {otpverify && (
                    <div className="flex flex-col gap-1 mt-2">
                      
                      <input id="otp" type="number" placeholder='Enter the OTP' className="border focus:outline-0 px-2 py-1 rounded" />
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-col gap-1">
               
                <input id="password" type="password" placeholder='Enter the password' className="border focus:outline-0 px-2 py-1 rounded" />
              </div>
            </div>

          <div className='gap-2 w-full flex flex-col items-center'>
              <button className="px-6 py-2 bg-blue-600 text-white rounded ">
              {sign ? "SignIn" : "LogIn"}
            </button>
            <p className='text-start '>{sign ?<>Already a user ? <span className='text-blue-600 cursor-pointer' onClick={()=>{change();moveleft();}}>login</span></>:<>New user ? <span className='text-blue-600 cursor-pointer'onClick={()=>{change();moveright();}}>signIn</span></>}</p>
          </div>
          
          </div>
        </div>

        <div className="w-[50%] h-full bg-blue-500 flex justify-center items-center" ref={sidepart}>
          <div className="flex flex-col items-center gap-10">
            <p className="text-2xl capitalize font-bold text-center text-white">
              your campus . your voice . <br /> our responsibility
            </p>
            <p className="font-semibold text-white text-center">
              submit concerns and track resolution- all <br /> you one place
            </p>
            <img src={login} alt="" className="w-[40%] h-[60%] object-cover border-4 border-white rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
