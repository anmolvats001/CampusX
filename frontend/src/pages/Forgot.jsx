import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast } from "react-toastify";
import login from "../assets/login.jpeg";
import { gsap } from "gsap";
import { AppContext } from '../Context/context';
import { data, useNavigate } from 'react-router-dom';
import axios from "axios";
const Forgot = () => {
  const [otpverify, setotpverify] = useState(false);
  const [who,setWho]=useState("student");
  const {setStudentLogin,setAdminLogin,setInchargelogin,backendUrl,utoken,setuToken,itoken,setiToken,atoken,setaToken,findProfileData}=useContext(AppContext);
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
  const [passwordon,setPasswordOn]=useState(false);
  const [loading,setloading]=useState(false);
  const change = () => setSign(!sign);
  const changePasson=()=>setPasswordOn(!passwordon);
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
      const {data}=await axios.post(backendUrl+"/api/user/forgototp",{email:emailValue});
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
      
      if(who=="student")Change_User();
      else if(who=="incharge")Change_Incharge();
      else if(who=="admin")Change_Admin();
  }
  const Change_User=async()=>{
   if(password!=""){
    setloading(true);
     const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/forgotpass",{email,newPass:password});
     if(data.success){
        toast.success("password changed Successfully");
        navigate("/")
     }
     else{
        toast.error("Password can not be changed")
     }
     setloading(false)
   }
   else{
    toast.error("Some credentials are missing")
   }
    }
  const Change_Incharge=async()=>{
     if(password!=""){
        setloading(true)
     const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/incharge/forgotpass",{email,newPass:password});
     if(data.success){
        toast.success("password changed Successfully");
        navigate("/")
     }
     else{
        toast.error("Password can not be changed")
     }
     setloading(false)
   }
   else{
    toast.error("Some credentials are missing")
   }
    
  }
  const Change_Admin=async()=>{
     if(password!=""){
        setloading(true)
     const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/admin/forgotpass",{email,newPass:password});
     if(data.success){
        toast.success("password changed Successfully");
        navigate("/")
     }
     else{
        toast.error("Password can not be changed")
     }
     setloading(false)
   }
   else{
    toast.error("Some credentials are missing")
   }
    
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setStudentLogin(true);
    if(atoken||utoken||itoken){
      navigate('/issues/home');
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-300 flex justify-center items-center p-4 lg:p-0">
      {/* Mobile View (no blue part) */}
      <div className="w-full max-w-md lg:hidden bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4 text-center w-full">
            <p className="capitalize text-2xl font-bold text-black">
              Welcome Back { <>To Campus Connect</>}
            </p>
            <p className="text-gray-500 text-sm">Enter the credentials to access your account</p>
            
             
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
                    className={" px-4 py-2 bg-blue-500 text-white rounded-lg w-full"}
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
                    className={" px-4 py-2 bg-blue-500 text-white rounded-lg w-full"}
                    onClick={otpverification}
                  >
                    Verify Email
                  </button>
                </div>

                )}
              </div>

            {correctOtp&&<div className="flex border rounded-2xl justify-between pr-2.5 items-center">
              <input onChange={(e)=>setPassword(e.target.value)}
                id="password-mobile" 
                type={!passwordon?"password":"text" }
                placeholder='Enter the password' 
                className=" focus:outline-0 px-3 py-2 flex-1 " 
                value={password}
              />{passwordon?<i className="fi fi-rr-eye"></i>:<i class="fi fi-rs-crossed-eye"></i>}
            </div>}
            <div className='flex justify-center'>{loading?<button  className='w-fit py-1 px-3'>...</button>:<button onClick={handleSubmit} className='w-fit py-1 px-3'>Change</button>}</div>
          </div>
          
           
          </div>
        </div>

      {/* Desktop/Laptop View (EXACTLY as before) */}
      <div className="hidden lg:flex h-screen w-[80%] bg-white">
        <div className="w-[100%] h-full flex flex-col justify-center items-center" ref={mainpart}>
          <div className="flex flex-col items-center jutif gap-10">
            <div className="flex flex-col gap-5 text-center">
                <p className="capitalize text-2xl font-bold text-black">
              Welcome Back { <>To Campus <br /> Connect</>}
            </p>
            
              <p className="text-gray-500 text-sm">Enter the credentials to access your account</p>
              
              <div className='flex justify-center'><div className='border-1 rounded-l-full rounded-r-full flex w-fit'><p className={(who=="student"?"bg-blue-600 text-white":"bg-white")+' rounded-l-full border-r-1  px-3 py-1.5 cursor-pointer'} onClick={()=>{setWho("student");setStudentLogin(true);setInchargelogin(false);setAdminLogin(false);}}>Student</p>
              <p className={(who=="incharge"?"bg-blue-600 text-white":"bg-white")+'  border-r-1  px-3 py-1.5 cursor-pointer'}onClick={()=>{setWho("incharge");setInchargelogin(true);setStudentLogin(false);setAdminLogin(false);}}>Incharge</p>
              <p className={(who=="admin"?"bg-blue-600 text-white":"bg-white")+' rounded-r-full border-l-1  px-3 py-1.5 cursor-pointer'} onClick={()=>{setWho("admin");setAdminLogin(true);setInchargelogin(false);setStudentLogin(false);}}>Admin</p></div></div>
              
            </div>

            <div className="flex flex-col gap-4 w-72">
              
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 relative">
                    <input onChange={(e)=>setemail(e.target.value)} id="email" ref={emaildata} placeholder='Enter the Email' type="email" className="border px-2 focus:outline-0 py-1 rounded-2xl w-full" value={email}/>
                    <button
                      className={" px-3 py-1 bg-blue-500 text-white absolute right-[-70px]"}
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
                      className={" px-3 py-1 bg-blue-500 text-white absolute right-[-70px]"}
                      onClick={otpverification}
                    >
                      verify
                    </button>
                  </div>

                  )}
                </div>
{
              correctOtp&&<div className="flex border rounded-2xl justify-between pr-2.5 items-center">
              <input onChange={(e)=>setPassword(e.target.value)}
                id="password-mobile" 
                type={!passwordon?"password":"text" } 
                placeholder='Enter the password' 
                className=" focus:outline-0 px-3 py-1 flex-1 " 
                value={password}
              />{passwordon?<i onClick={changePasson} className="fi fi-rr-eye"></i>:<i onClick={changePasson} class="fi fi-rs-crossed-eye"></i>}
            </div>}
           <div className='flex justify-center'>{loading?<button  className='w-fit py-1 px-3'>...</button>:<button onClick={handleSubmit} className='w-fit py-1 px-3'>Change</button>}</div>
            </div>
          </div>
        </div>

    </div>
    </div>
  );
}

export default Forgot
