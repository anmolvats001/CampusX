import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/context";
import userphoto from "../assets/user1.png";
import { toast } from "react-toastify";
import axios from "axios";
import Shrimmer from "../components/Shrimmer";

const Incharges = () => {
  const [incharges, setIncharges] = useState([]);
  const { data, dark, setcommvis ,atoken} = useContext(AppContext);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [val, setval] = useState("no");
  const [images,setImages]=useState(null);
  const [loading,setLoading]=useState(false);
  const findAllIncharge=async()=>{
    const {data}=await axios.get(import.meta.env.VITE_BACKEND_URL+"/api/admin/all-incharge",{headers:{atoken}});
    if(data.success){
      console.log(data.incharges)
      setIncharges(data.incharges);
    }
  }
  const deleteIncharge=async(inchargeId)=>{
    const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/admin/deleteincharge",{inchargeId:inchargeId},{headers:{atoken}});
            if(data.success){
              toast.success(data.message);
              findAllIncharge();
            }
            else{
              toast.error(data.message);
            }
            
  }
  useEffect(() => {
    setcommvis(false);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    findAllIncharge();
  }, []);
  
  const removetheincharge = (inchargeId) => {
    toast(
      <div className="flex items-center gap-3">
        <span className="text-xs">Wanna Remove the Incharge:</span>
        <button
          className={`${dark ? "bg-gray-800 text-white" : "bg-gray-200"} px-3 py-1 rounded`}
          onClick={async() => {
            setval("yes");
            setLoading(true);
            await deleteIncharge(inchargeId);
            setLoading(false)
            toast.dismiss();
          }}
        >
          Yes
        </button>
        <button
          className={`${dark ? "bg-gray-800 text-white" : "bg-gray-200"} px-3 py-1 rounded`}
          onClick={() => {
            setval("no");
            toast.dismiss();
          }}
        >
          No
        </button>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
      }
    );
  };


  return (
    <div className={`${dark ? "dark" : "light"} min-h-screen w-full md:w-[45%] border border-gray-800 relative`}>
      {/* Mobile Header Spacing */}
      <div className="h-16 sm:h-0"></div>
      
      <div className="w-full px-4 sm:px-3.5 flex pt-5 items-center">
        <p className="text-xl sm:text-2xl font-semibold capitalize px-3 pt-2 w-full">
          Incharges
        </p>
      </div>
      {loading?<Shrimmer/>:(
      <div className="overflow-y-auto w-full scroller h-full relative pb-10">
        <div className="h-fit flex items-center py-4 sm:py-8 px-4 sm:px-5 flex-col gap-6 sm:gap-10">
          {incharges.length==0?<div className="text-gray-500 font-bold text-xl">No Incharge is found</div>: incharges?.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 p-4 sm:p-6 rounded-xl relative w-full"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img
                  src={item.image}
                  alt="user"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-lg sm:text-xl font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500 capitalize">{item.work}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.college}</p>
                </div>
                
                {/* Menu Button */}
                <div className="absolute top-4 right-4 sm:relative sm:top-auto sm:right-auto">
                  <i
                    className="fi fi-br-menu-dots-vertical cursor-pointer text-lg"
                    onClick={() => {
                      setOpenMenuId(openMenuId === index ? null : index);
                    }}
                  ></i>

                  {openMenuId === index && (
                    <div className={`absolute right-0 top-full mt-2 ${dark ? "bg-black" : "bg-white"} 
                      border border-gray-700 rounded-lg py-2 px-3 min-w-[120px] z-10`}>
                      <p
                        className="text-red-700 cursor-pointer  py-1 px-2 rounded"
                        onClick={() => removetheincharge(item._id)}
                      >
                        Remove
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Basic Details */}
              <div className="mt-4 space-y-2 capitalize">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p className="text-sm sm:text-base">
                    <span className="font-semibold">Gender:</span> {item.gender}
                  </p>
                  <p className="text-sm sm:text-base">
                    <span className="font-semibold">DOB:</span> {item.dob}
                  </p>
                  <p className="text-sm sm:text-base">
                    <span className="font-semibold">Mobile:</span> {item.mobile_no}
                  </p>
                  <p className="text-sm sm:text-base">
                    <span className="font-semibold">Email:</span> {item.email}
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <p className="text-sm sm:text-base font-semibold">Resolved:</p>
                  <p className="text-sm sm:text-base">{item.posts.length}</p>
                </div>
                
                <div>
                  <p className="text-sm sm:text-base font-semibold">Address:</p>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.address}</p>
                </div>
              </div>
              
              {/* Bio */}
              <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                {item.bio}
              </p>
            </div>
          ))}
        </div>
      </div>)}
    </div>
  );
};

export default Incharges;