import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast } from "react-toastify";
import login from "../assets/login.jpeg";
import { gsap } from "gsap";
import { AppContext } from '../Context/context';
import { data, useNavigate } from 'react-router-dom';
import axios from "axios";
const Login = () => {
  const [sign, setSign] = useState(false);
  const [otpverify, setotpverify] = useState(false);
  const [who,setWho]=useState("student");
  const {setStudentLogin,setAdminLogin,setInchargelogin,backendUrl,utoken,setuToken,itoken,setiToken,atoken,setaToken}=useContext(AppContext);
  const emaildata = useRef();
  const emaildataMobile = useRef();
  const navigate=useNavigate();
  const mainpart=useRef();
  const sidepart=useRef();
  const [email,setemail]=useState("");
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [addno,setAddNo]=useState("");
  const [otp,setOtp]=useState(0);
  const [correctOtp,setCorrectOpt]=useState(false);
  const [otpfromback,setotpfromback]=useState(56);
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
  const otpverification=async()=>{
    console.log(otpfromback,otp)
     if(otpfromback==otp){
          setCorrectOpt(true);
          toast.success("OTP verified")
        }
        else{
          toast.error(data.message)
        }
  }
  const handleVerify = async() => {
    // Get email value from either desktop or mobile input
    const emailValue = window.innerWidth >= 1024 
      ? emaildata.current?.value 
      : emaildataMobile.current?.value;
    
    if (emailValue && emailValue !== "") {
      setotpverify(true);
      const {data}=await axios.post(backendUrl+"/api/user/otp",{email:emailValue});
      if(!data.success){
        toast.error(data.message);
      }
      else{

       setotpfromback(data.otp);
       toast.success("OTP sent successfully");
      }
    } else {
      toast.error(data.message);
    }
  };
  const handleSubmit=async()=>{
    if(!sign){
      
      if(who=="student")login_User();
      else if(who=="incharge")login_Incharge();
      else if(who=="admin")login_Admin();
    }
    else{
      
      register_User();
    }
  }
  const login_User=async()=>{
    let {data}=await axios.post(backendUrl+"/api/user/login",{add_no:addno,password});
    if(data.success){
      localStorage.setItem("utoken",data.utoken);
      setuToken(data.utoken);
      toast.success(data.message);
      navigate("/issues/home")
    }
    else{
      toast.error(data.message)
    }
  }
  const login_Incharge=async()=>{

  }
  const login_Admin=async()=>{

  }
  const register_User=async()=>{
    try {
      if(correctOtp){
    const {data}=await axios.post(backendUrl+"/api/user/register",{add_no:addno,email,password,name});
    if(data.success){
      localStorage.setItem("utoken",data.utoken);
      setuToken(data.utoken);
      // toast.success("Registered successfully")
      toast.success(data.message);
      navigate("/issues/home")
    }
    else{
      toast.error(data.message);
    }
  }
    else{
      toast.error("Verify otp first");
    }
    } catch (error) {
      console.log(error)
      toast.error(data.message)
    }
  }
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
                <input  onChange={(e)=>{setName(e.target.value)}}
                  id="name" 
                  type="text" 
                  placeholder='Create Username' 
                  className="border focus:outline-0 px-3 py-2 rounded-2xl" 
                  value={name}
                />
              </div>
            )}

            {(who=="student"||sign) && (
              <div className="flex flex-col gap-1">
                <input onChange={(e)=>{
                  setAddNo(e.target.value);
                }} 
                  id="admno" 
                  type="text" 
                  placeholder='Enter Admission No.' 
                  className="border focus:outline-0 px-3 py-2 rounded-2xl" 
                  value={addno}
                />
              </div>
            )}

            {(sign || who=="incharge" || who=="admin") && (
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-2">
                  <input onChange={(e)=>setemail(e.target.value)}
                    id="email-mobile" 
                    ref={emaildataMobile} 
                    placeholder='Enter the Email' 
                    type="email" 
                    className="border px-3 focus:outline-0 py-2 rounded-2xl w-full" 
                    value={email}
                  />
                  <button
                    className={(!sign&&"hidden")+" px-4 py-2 bg-blue-500 text-white rounded-lg w-full"}
                    onClick={handleVerify}
                  >
                    Verify Email
                  </button>
                </div>

                {otpverify && (
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1 mt-2">
                    <input onChange={(e)=>setOtp(e.target.value.toString().replace(/\s+/g, ""))}
                      id="otp-mobile" 
                      type="number" 
                      placeholder='Enter the OTP' 
                      className="border focus:outline-0 px-3 py-2 rounded-2xl" 
                    />
                  </div>
                  <button
                    className={(!sign&&"hidden")+" px-4 py-2 bg-blue-500 text-white rounded-lg w-full"}
                    onClick={otpverification}
                  >
                    Verify Email
                  </button>
                </div>

                )}
              </div>
            )}

            <div className="flex flex-col gap-1">
              <input onChange={(e)=>setPassword(e.target.value)}
                id="password-mobile" 
                type="password" 
                placeholder='Enter the password' 
                className="border focus:outline-0 px-3 py-2 rounded-2xl" 
                value={password}
              />
            </div>
          </div>

          <div className='gap-3 w-full flex flex-col items-center'>
            <button 
              className="px-6 py-2.5 bg-blue-600 text-white rounded-xl w-full" 
              onClick={handleSubmit}
            >
              {sign ? "Sign In" : "Log In"}
            </button>
            
            <p className='text-center text-sm'>
              {sign ? (
                <>Already a user? <span className='text-blue-600 cursor-pointer font-medium' onClick={()=>{change();if(window.innerWidth >= 1024) moveleft();setAddNo("");setemail("");setPassword(""),setCorrectOpt("");setName("");}}> Login</span></>
              ) : (
                <>New user? <span className='text-blue-600 cursor-pointer font-medium' onClick={()=>{change();if(window.innerWidth >= 1024) moveright();setAddNo("");setemail("");setPassword(""),setCorrectOpt("");setName("");}}> Sign Up</span></>
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
                  <input onChange={(e)=>setName(e.target.value)} id="name" type="text" placeholder='Create Username' className="border focus:outline-0 px-2 py-1 rounded-2xl" value={name}/>
                </div>
              )}

             {(who=="student"||sign) && <div className="flex flex-col gap-1">
                <input onChange={(e)=>setAddNo(e.target.value)} id="admno" type="text" placeholder='Enter Admission No.' className="border focus:outline-0 px-2 py-1 rounded-2xl" value={addno}/>
              </div>}

              {(sign || who=="incharge"||who=="admin") && (
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 relative">
                    <input onChange={(e)=>setemail(e.target.value)} id="email" ref={emaildata} placeholder='Enter the Email' type="email" className="border px-2 focus:outline-0 py-1 rounded-2xl w-full" value={email}/>
                    <button
                      className={(!sign&&" hidden")+" px-3 py-1 bg-blue-500 text-white absolute right-[-70px]"}
                      onClick={handleVerify}
                    >
                      verify
                    </button>
                  </div>

                  {otpverify && (
                    
                    <div className="flex gap-2 relative">
                      <div className="flex flex-col gap-1 mt-2">
                      <input onChange={(e)=>setOtp(e.target.value.toString().replace(/\s+/g, ""))} id="otp" type="number" placeholder='Enter the OTP' className="border px-2 focus:outline-0 py-1 rounded-2xl w-full"  />
                    </div>
                    <button
                      className={(!sign&&" hidden")+" px-3 py-1 bg-blue-500 text-white absolute right-[-70px]"}
                      onClick={otpverification}
                    >
                      verify
                    </button>
                  </div>

                  )}
                </div>
              )}

              <div className="flex flex-col gap-1">
                <input onChange={(e)=>setPassword(e.target.value)} id="password" type="password" placeholder='Enter the password' className="border focus:outline-0 px-2 py-1 rounded-2xl" value={password}/>
              </div>
            </div>

            <div className='gap-2 w-full flex flex-col items-center'>
              <button className="px-6 py-2 bg-blue-600 text-white rounded " onClick={()=>{handleSubmit()}}>
                {sign ? "SignIn" : "LogIn"}
              </button>
              <p className='text-start '>
                {sign ? (
                  <>Already a user? <span className='text-blue-600 cursor-pointer' onClick={()=>{change();moveleft();setAddNo("");setemail("");setPassword(""),setCorrectOpt("");setName("");}}>login</span></>
                ) : (
                  <>New user? <span className='text-blue-600 cursor-pointer' onClick={()=>{change();moveright();setAddNo("");setemail("");setPassword(""),setCorrectOpt("");setName("");}}>signIn</span></>
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