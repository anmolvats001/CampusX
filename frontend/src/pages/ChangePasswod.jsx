import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/context";
import { toast } from "react-toastify";

const ChangePasswod = () => {
        const {profileon, setProfileOn,dark}=useContext(AppContext);
    const navigate=useNavigate();
    const inputref=useRef();
    const newpassref=useRef();
    const [password,setpassword]=useState("0000000");
    const [verified,setverified]=useState(false);
    const submit=()=>{
        toast.success("changed the password successfully");
        navigate("/issues/home");
    }
    const verify=()=>{
        if(inputref.current.value===password){
            setverified(true);
        }
        else{
            toast.error("wrong password")
        }
    }
  return (
    <div
      className={`${
        dark ? "dark" : "light"
      } h-screen w-[45%] border border-gray-800 relative`}
    >
           {" "}
      <div className="overflow-y-scroll w-full scroller h-full relative">
        <p className="text-2xl font-bold pt-6 px-8">Change your password</p>
        <div className="flex flex-col gap-3 px-12 py-7">
            <div className="flex gap-3"><p className="text-lg ">Addmission No. :</p><input placeholder="Enter Your Add. No." type="text" className={"border-1  focus:outline-none border-gray-800 w-[60%] rounded-xl py-1 px-1.5 "+(dark?"text-gray-200":"")}/></div>
            <div className="flex gap-3"><p className="text-lg ">Current Password :</p><input placeholder="Enter Your Current Password" type="text" className={"border-1  focus:outline-none border-gray-800 w-[50%] rounded-xl py-1 px-1.5 "+(dark?"text-gray-200":"")} ref={inputref}/> <p className="px-2 py-1 bg-gray-600 text-white rounded-2xl" onClick={verify}>verify</p></div>
            {
                verified?<div className="flex gap-3"><p className="text-lg "> New Password:</p><input placeholder="Enter New Password" type="text" className={"border-1  focus:outline-none border-gray-800 w-[60%] rounded-xl py-1 px-1.5 "+(dark?"text-gray-200":"")} ref={newpassref}/></div>:""
            }
            <div className="px-2"><p onClick={submit} className={(dark?"light":"dark")+" w-fit rounded-2xl font-semibold px-3 py-1"}>Submit</p></div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswod;
