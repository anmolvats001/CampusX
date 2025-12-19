import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/context";
import { toast } from "react-toastify";
import axios from "axios";

const ChangePassword = () => {
    const { dark ,utoken,itoken,atoken} = useContext(AppContext);
    const navigate = useNavigate();
    const [verified, setverified] = useState(false);
    const [add_no,setAddno]=useState(null);
    const [password,setPass]=useState(null);
    const [newPass,setNewPass]=useState(null);
    const submit = async() => {
        if(!newPass){
            toast.error("New Password is missing")
        }
        else{
            if(utoken){
                const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/changePass",{newPass},{headers:{utoken}});
       if(data.success){
        toast.success(data.message);
        navigate("/issues/home");
       }
       else{
        toast.error(data.message);
       }
       
            }
            if(itoken){
                const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/incharge/changePass",{newPass},{headers:{itoken}});
       if(data.success){
        toast.success(data.message);
        navigate("/issues/home");
       }
       else{
        toast.error(data.message);
       }
       
            }
            if(atoken){
                const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/admin/changePass",{newPass},{headers:{atoken}});
       if(data.success){
        toast.success(data.message);
        navigate("/issues/home");
       }
       else{
        toast.error(data.message);
       }
       
            }
        }
    }
    const verify = async() => {
         if(utoken){
            const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/checkpass",{add_no,password},{headers:{utoken}});
        if (data.success) {
            setverified(true);
            submit();
        } else {
            toast.error("Wrong password");
        }
         }
         if(itoken){
            const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/incharge/checkpass",{password},{headers:{itoken}});
        if (data.success) {
            setverified(true);
            submit();
        } else {
            toast.error("Wrong password");
        }
         }
         if(atoken){
            const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/admin/checkpass",{password},{headers:{atoken}});
        if (data.success) {
            setverified(true);
            submit();
        } else {
            toast.error("Wrong password");
        }
         }
    }
    
    return (
        <div
            className={`${
                dark ? "dark" : "light"
            } h-screen w-full lg:w-[45%] border border-gray-800 relative`}
        >
            <div className="overflow-y-scroll w-full scroller h-full relative">
                {/* Header */}
                <p className="text-xl sm:text-2xl font-bold pt-6  px-12 ">
                    Change your password
                </p>
                
                {/* Form */}
                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-7 px-4 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-7">
                    {/* Admission Number */}
                    {utoken&&<div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
                        <p className="text-base sm:text-lg w-full sm:w-1/3">Admission No. :</p>
                        <input 
                            placeholder="Enter Your Admission No." 
                            type="text" onChange={(e)=>setAddno(e.target.value)}
                            className={`border focus:outline-none border-gray-800 w-full sm:w-2/3 rounded-lg sm:rounded-xl py-2 sm:py-1 px-2.5 sm:px-1.5 ${dark ? "text-gray-200 bg-gray-900" : "bg-white"} text-sm sm:text-base`}
                        />
                    </div>}
                    
                    {/* Current Password */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
                        <p className="text-base sm:text-lg w-full sm:w-1/3">Current Password :</p>
                        <div className="flex gap-2 w-full sm:w-2/3">
                            <input  onChange={(e)=>setPass(e.target.value)}
                                placeholder="Enter Current Password" 
                                type="password" 
                                className={`border focus:outline-none border-gray-800 w-full rounded-lg sm:rounded-xl py-2 sm:py-1 px-2.5 sm:px-1.5 ${dark ? "text-gray-200 bg-gray-900" : "bg-white"} text-sm sm:text-base`} 
                                
                            />
                            <p 
                                className="px-3 sm:px-2 py-2 sm:py-1 bg-gray-600 hover:bg-gray-700 text-white rounded-lg sm:rounded-2xl cursor-pointer transition-colors whitespace-nowrap text-xs sm:text-sm flex items-center"
                                onClick={verify}
                            >
                                Verify
                            </p>
                        </div>
                    </div>
                    
                    {/* New Password (shown after verification) */}
                    {verified && (
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
                            <p className="text-base sm:text-lg w-full sm:w-1/3">New Password :</p>
                            <input onChange={(e)=>setNewPass(e.target.value)}
                                placeholder="Enter New Password" 
                                type="password" 
                                className={`border focus:outline-none border-gray-800 w-full sm:w-2/3 rounded-lg sm:rounded-xl py-2 sm:py-1 px-2.5 sm:px-1.5 ${dark ? "text-gray-200 bg-gray-900" : "bg-white"} text-sm sm:text-base`} 
                            
                            />
                        </div>
                    )}
                    
                    {/* Success message */}
                    {verified && (
                        <div className={`px-3 py-2 rounded-lg ${dark ? "bg-green-900/30 text-green-300" : "bg-green-100 text-green-800"} text-sm`}>
                            ✓ Password verified. You can now set a new password.
                        </div>
                    )}
                    
                    {/* Submit Button */}
                    <div className="px-2 mt-2">
                        <p 
                            onClick={submit} 
                            className={`${dark ? "light bg-blue-600 hover:bg-blue-700" : "dark bg-blue-600 hover:bg-blue-700"} w-full sm:w-fit rounded-lg sm:rounded-2xl font-semibold px-4 py-2.5 sm:px-3 sm:py-1 text-white cursor-pointer transition-colors text-center text-sm sm:text-base`}
                        >
                            Submit
                        </p>
                    </div>
                    
                    {/* Back Button */}
                    <div className="px-2  lg:hidden">
                        <p 
                            onClick={() => navigate(-1)} 
                            className={`${dark ? "text-gray-400 hover:text-gray-300" : "text-gray-600 hover:text-gray-800"} w-full sm:w-fit rounded-lg sm:rounded-2xl font-medium px-4 py-2.5 sm:px-3 sm:py-1 cursor-pointer transition-colors text-center text-sm sm:text-base border border-gray-700`}
                        >
                            ← Back to Settings
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;