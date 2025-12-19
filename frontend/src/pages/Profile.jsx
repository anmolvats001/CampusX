import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../Context/context";
import PostCard from "../components/Postcard";
import { useNavigate } from "react-router-dom";
import Shrimmer from "../components/Shrimmer.jsx"
const Profile = () => {
  const { 
    dark, atoken,itoken,
    profileData,setProfileData, 
    setProfileOn, 
    setPostVis, 
    inchargelogin, 
    setInchargelogin, 
    adminlogin, 
    setAdminLogin, 
    studentLogin, 
    setStudentLogin,  
    setcommvis 
  } = useContext(AppContext);
  
  const [extend, setextend] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const bioRef = useRef(null);
  const [isLong, setIsLong] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    setcommvis(false);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  
  useEffect(() => {
    const el = bioRef.current;
    console.log(profileData)
    setProfileOn(true);
    if (el) {
      const style = window.getComputedStyle(el);
      const lineHeight = parseFloat(style.lineHeight);
      const height = el.clientHeight;
      const lines = Math.round(height / lineHeight);
      setIsLong(lines > 3);
    }
    return () => {
      setProfileOn(false);
    };
  }, []);

  const renderProfileHeader = (data, type = "student") => {
    if (!data) return null;
    
    return (
      <div className="border-b border-gray-800 pb-4">
        <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-7 px-4 sm:px-7 items-center justify-between w-full">
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <img 
              src={data.profile} 
              className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover" 
              alt="Profile" 
            />
            <div className="text-center sm:text-left">
              <p className="text-lg sm:text-xl font-bold">{data.name}</p>
              <p className={dark ? "text-gray-300" : "text-gray-800"}>
                ({(atoken||itoken)?profileData.work:profileData?.branch})
              </p>
              <p className="text-xs pt-2 line-clamp-2 text-gray-500 capitalize w-full sm:w-[90%]">
                {data.address}
              </p>
            </div>
          </div>

          <div
            className={`bg-gray-700 rounded-2xl font-bold px-3 cursor-pointer py-1 mt-2 sm:mt-0 ${
              !dark && "text-white"
            }`}
            onClick={() => navigate("/issues/edit-profile")}
          >
            Edit
          </div>
        </div>

        <div className={`px-4 sm:px-8 pt-3 capitalize text-sm sm:text-base ${dark ? "text-gray-200" : "text-gray-700"}`}>
          {data.college}
        </div>

        {/* BIO SECTION */}
        <div className="px-4 sm:px-8 mt-4 relative">
          <p
            className={(dark ? "text-gray-400 " : "text-gray-800 ") + `${
              extend ? "line-clamp-none" : "line-clamp-3"
            } text-left text-sm sm:text-base`}
            ref={bioRef}
          >
            {data.bio}
          </p>
          {!extend && isLong && (
            <p
              className="cursor-pointer absolute right-3 sm:right-3 bottom-0 text-blue-500 w-fit px-1 mt-1 rounded text-sm"
              onClick={() => setextend(true)}
            >
              more...
            </p>
          )}
        </div>
        
        {(inchargelogin || adminlogin) && (
          <div className="flex flex-col px-4 sm:px-8 py-4 sm:py-5 gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:gap-3.5">
              <p className="capitalize font-semibold text-gray-500 text-sm sm:text-base">Mobile no. :</p>
              <p className="text-sm sm:text-base">+91 {data.phone}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3.5">
              <p className="capitalize font-semibold text-gray-500 text-sm sm:text-base">Email :</p>
              <p className="text-sm sm:text-base break-all">{data.email}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3.5">
              <p className="capitalize font-semibold text-gray-500 text-sm sm:text-base">DOB :</p>
              <p className="capitalize text-sm sm:text-base">{data.dob}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderPosts = () => {
    if (!profileData?.posts) {
      return (
        <div className="flex w-full h-80 justify-center items-center">
          <p className="text-lg sm:text-2xl text-gray-400">Post Something</p>
        </div>
      );
    }

    return (
      <div>
        <div className="border-b-1 border-b-gray-800 items-center flex justify-center">
          <p className="text-gray-400 text-lg sm:text-xl font-bold pb-3.5 mr-0 sm:mr-36">Posts</p>
        </div>
        <div className="flex gap-3 flex-wrap justify-center sm:justify-start px-4 sm:px-8 pb-10 mt-6">
          {profileData.posts.map((e, i) => (
            <PostCard 
            
              key={i} 
              e={e} 
              dark={dark} 
              openMenuId={openMenuId}
              setOpenMenuId={setOpenMenuId}
              index={i}
            />
          ))}
          <div
            className={`${dark ? "bg-gray-700" : "bg-gray-500"} 
            border border-gray-800 
            w-[280px] sm:w-[300px] h-[280px] sm:h-[300px] rounded-2xl flex justify-center items-center relative opacity-40 cursor-pointer`}
            onClick={() => setPostVis(true)}
          >
            <p className="text-4xl sm:text-5xl font-bold">+</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`${dark ? "dark" : "light"} w-full sm:w-[75%] border border-gray-800 relative`}
      style={{ minHeight: 'calc(100vh - 4rem)' }}
    >
      {/* Mobile Header Spacing */}
      <div className="h-16 sm:h-0"></div>
      
      {profileData?(<div className="overflow-y-scroll w-full scroller h-full relative">
        {/* Student Profile */}
        {studentLogin && profileData && (
          <>
            {renderProfileHeader(profileData, "student")}
            <div className="mt-3">
              {renderPosts()}
            </div>
          </>
        )}

        {/* Incharge Profile */}
        {inchargelogin && profileData && (
          <>
            {renderProfileHeader(profileData, "incharge")}
          </>
        )}

        {/* Admin Profile */}
        {adminlogin && profileData && (
          <>
            {renderProfileHeader(profileData, "admin")}
          </>
        )}
      </div>):(<Shrimmer/>)}
    </div>
  );
};

export default Profile;