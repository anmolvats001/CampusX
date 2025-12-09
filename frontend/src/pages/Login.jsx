import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast } from "react-toastify";
import login from "../assets/login.jpeg";
import { gsap } from "gsap";
import { AppContext } from '../Context/context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [sign, setSign] = useState(false);
  const [otpverify, setotpverify] = useState(false);
  const [who,setWho]=useState("student");
  const {setStudentLogin,setAdminLogin,setInchargelogin}=useContext(AppContext);
  const emaildata = useRef();
  const emaildataMobile = useRef();
  const navigate=useNavigate();
  const mainpart=useRef();
  const sidepart=useRef();
  
  const change = () => setSign(!sign);
  
  const moveright = () => { 
    // Only animate on desktop
    if (window.innerWidth >= 1024) {
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
    }
  };
  
  const moveleft = () => { 
    // Only animate on desktop
    if (window.innerWidth >= 1024) {
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
    }
  };

  const handleVerify = () => {
    // Get email value from either desktop or mobile input
    const emailValue = window.innerWidth >= 1024 
      ? emaildata.current?.value 
      : emaildataMobile.current?.value;
    
    if (emailValue && emailValue !== "") {
      setotpverify(true);
    } else {
      toast.error("Enter valid Email");
    }
  };
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setStudentLogin(true)
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-300 flex justify-center items-center p-4 lg:p-0">
      {/* Mobile View (no blue part) */}
      <div className="w-full max-w-md lg:hidden bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4 text-center w-full">
            <p className="capitalize text-2xl font-bold text-black">
              Welcome {!sign ? "Back" : <>To Campus <br /> Connect</>}
            </p>
            <p className="text-gray-500 text-sm">Enter the credentials to access your account</p>
            
            {!sign && (
              <div className='flex justify-center'>
                <div className='border rounded-l-full rounded-r-full flex w-fit text-sm'>
                  <p 
                    className={(who=="student"?"bg-blue-600 text-white":"bg-white")+' rounded-l-full border-r px-3 py-1.5 cursor-pointer'} 
                    onClick={()=>{setWho("student");setStudentLogin(true);setInchargelogin(false);setAdminLogin(false);}}
                  >
                    Student
                  </p>
                  <p 
                    className={(who=="incharge"?"bg-blue-600 text-white":"bg-white")+' border-r px-3 py-1.5 cursor-pointer'}
                    onClick={()=>{setWho("incharge");setInchargelogin(true);setStudentLogin(false);setAdminLogin(false);}}
                  >
                    Incharge
                  </p>
                  <p 
                    className={(who=="admin"?"bg-blue-600 text-white":"bg-white")+' rounded-r-full border-l px-3 py-1.5 cursor-pointer'} 
                    onClick={()=>{setWho("admin");setAdminLogin(true);setInchargelogin(false);setStudentLogin(false);}}
                  >
                    Admin
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 w-full">
            {sign && (
              <div className="flex flex-col gap-1">
                <input 
                  id="name" 
                  type="text" 
                  placeholder='Create Username' 
                  className="border focus:outline-0 px-3 py-2 rounded-2xl" 
                />
              </div>
            )}

            {who=="student" && (
              <div className="flex flex-col gap-1">
                <input 
                  id="admno" 
                  type="text" 
                  placeholder='Enter Admission No.' 
                  className="border focus:outline-0 px-3 py-2 rounded-2xl" 
                />
              </div>
            )}

            {(sign || who=="incharge" || who=="admin") && (
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-2">
                  <input 
                    id="email-mobile" 
                    ref={emaildataMobile} 
                    placeholder='Enter the Email' 
                    type="email" 
                    className="border px-3 focus:outline-0 py-2 rounded-2xl w-full" 
                  />
                  <button
                    className={(!sign&&"hidden")+" px-4 py-2 bg-blue-500 text-white rounded-lg w-full"}
                    onClick={handleVerify}
                  >
                    Verify Email
                  </button>
                </div>

                {otpverify && (
                  <div className="flex flex-col gap-1 mt-2">
                    <input 
                      id="otp-mobile" 
                      type="number" 
                      placeholder='Enter the OTP' 
                      className="border focus:outline-0 px-3 py-2 rounded-2xl" 
                    />
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col gap-1">
              <input 
                id="password-mobile" 
                type="password" 
                placeholder='Enter the password' 
                className="border focus:outline-0 px-3 py-2 rounded-2xl" 
              />
            </div>
          </div>

          <div className='gap-3 w-full flex flex-col items-center'>
            <button 
              className="px-6 py-2.5 bg-blue-600 text-white rounded-xl w-full" 
              onClick={()=>navigate("/issues/home")}
            >
              {sign ? "Sign In" : "Log In"}
            </button>
            
            <p className='text-center text-sm'>
              {sign ? (
                <>Already a user? <span className='text-blue-600 cursor-pointer font-medium' onClick={()=>{change();if(window.innerWidth >= 1024) moveleft();}}> Login</span></>
              ) : (
                <>New user? <span className='text-blue-600 cursor-pointer font-medium' onClick={()=>{change();if(window.innerWidth >= 1024) moveright();}}> Sign Up</span></>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop/Laptop View (EXACTLY as before) */}
      <div className="hidden lg:flex h-screen w-[80%] bg-white">
        <div className="w-[50%] h-full flex flex-col justify-center items-center" ref={mainpart}>
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col gap-5 text-center">
              <p className="capitalize text-3xl font-bold text-black">
                Welcome {!sign ? "Back" : <>To Campus <br /> Connect</>}
              </p>
              <p className="text-gray-500 text-sm">Enter the credentials to access your account</p>
              {
              !sign&&<div className='flex justify-center'><div className='border-1 rounded-l-full rounded-r-full flex w-fit'><p className={(who=="student"?"bg-blue-600 text-white":"bg-white")+' rounded-l-full border-r-1  px-3 py-1.5 cursor-pointer'} onClick={()=>{setWho("student");setStudentLogin(true);setInchargelogin(false);setAdminLogin(false);}}>Student</p>
              <p className={(who=="incharge"?"bg-blue-600 text-white":"bg-white")+'  border-r-1  px-3 py-1.5 cursor-pointer'}onClick={()=>{setWho("incharge");setInchargelogin(true);setStudentLogin(false);setAdminLogin(false);}}>Incharge</p>
              <p className={(who=="admin"?"bg-blue-600 text-white":"bg-white")+' rounded-r-full border-l-1  px-3 py-1.5 cursor-pointer'} onClick={()=>{setWho("admin");setAdminLogin(true);setInchargelogin(false);setStudentLogin(false);}}>Admin</p></div></div>
              }
            </div>

            <div className="flex flex-col gap-4 w-72">
              {sign && (
                <div className="flex flex-col gap-1">
                  <input id="name" type="text" placeholder='Create Username' className="border focus:outline-0 px-2 py-1 rounded-2xl" />
                </div>
              )}

             {who=="student"&& <div className="flex flex-col gap-1">
                <input id="admno" type="text" placeholder='Enter Admission No.' className="border focus:outline-0 px-2 py-1 rounded-2xl" />
              </div>}

              {(sign || who=="incharge"||who=="admin") && (
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 relative">
                    <input id="email" ref={emaildata} placeholder='Enter the Email' type="email" className="border px-2 focus:outline-0 py-1 rounded-2xl w-full" />
                    <button
                      className={(!sign&&" hidden")+" px-3 py-1 bg-blue-500 text-white absolute right-[-70px]"}
                      onClick={handleVerify}
                    >
                      verify
                    </button>
                  </div>

                  {otpverify && (
                    <div className="flex flex-col gap-1 mt-2">
                      <input id="otp" type="number" placeholder='Enter the OTP' className="border focus:outline-0 px-2 py-1 rounded-2xl" />
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-col gap-1">
                <input id="password" type="password" placeholder='Enter the password' className="border focus:outline-0 px-2 py-1 rounded-2xl" />
              </div>
            </div>

            <div className='gap-2 w-full flex flex-col items-center'>
              <button className="px-6 py-2 bg-blue-600 text-white rounded " onClick={()=>navigate("/issues/home")}>
                {sign ? "SignIn" : "LogIn"}
              </button>
              <p className='text-start '>
                {sign ? (
                  <>Already a user? <span className='text-blue-600 cursor-pointer' onClick={()=>{change();moveleft();}}>login</span></>
                ) : (
                  <>New user? <span className='text-blue-600 cursor-pointer' onClick={()=>{change();moveright();}}>signIn</span></>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-full bg-blue-500 flex justify-center items-center" ref={sidepart}>
          <div className="flex flex-col items-center gap-10">
            <p className="text-2xl capitalize font-bold text-center text-white">
              your campus . your voice . <br /> our responsibility
            </p>
            <p className="font-semibold text-white text-center capitalize">
              submit concerns and track resolution- all <br /> in one place
            </p>
            <img src={login} alt="" className="w-[40%] h-[60%] object-cover border-4 border-white rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;