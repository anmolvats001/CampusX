import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../Context/context";
import PostCard from "../components/Postcard";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const { dark, userData ,setProfileOn} = useContext(AppContext);
  const [extend, setextend] = useState(false);
    const [openMenuId, setOpenMenuId] = useState(null);
const bioRef = useRef(null);
const [isLong, setIsLong] = useState(false);
const navigate=useNavigate();
useEffect(() => {
  const el = bioRef.current;
  setProfileOn(true);
  if (el) {
    const style = window.getComputedStyle(el);
    const lineHeight = parseFloat(style.lineHeight);
    const height = el.clientHeight;

    const lines = Math.round(height / lineHeight);

    setIsLong(lines > 3);
  }
  return()=>{
    setProfileOn(false);
  
  }
}, []);

  return (
    <div
      className={`${dark ? "dark" : "light"} h-screen w-[75%] border border-gray-800 relative`}
    >
      <div className="overflow-y-scroll w-full scroller h-full relative">
        
        {/* Profile Header */}
        <div className="border-b border-gray-800 pb-4">
          <div className="flex gap-4 pt-7 px-7 items-center justify-between w-[90%]">

            <div className="flex gap-4 items-center">
              <img src={userData.image} className="w-28 h-28 rounded-full object-cover" alt="" />
              <div>
                <p className="text-xl font-bold">{userData.name}</p>
                <p className={dark ? "text-gray-300" : "text-gray-800"}>
                  ({userData.branch})
                </p>
                <p className="text-xs pt-2.5 line-clamp-2 text-gray-500 capitalize w-[90%]">
                  {userData.address}
                </p>
              </div>
            </div>

            <div
              className={`bg-gray-700 rounded-2xl font-bold px-3 cursor-pointer py-1 ${
                !dark && "text-white"
              } `} onClick={()=>{navigate("/issues/edit-profile")}}
            >
              Edit
            </div>
          </div>

          <div className={`px-8 pt-3 capitalize ${dark ? "text-gray-200" : "text-gray-700"}`}>
            {userData.college}
          </div>

          {/* BIO SECTION */}
          <div className="px-8 mt-4 relative">
            <p
              className={(dark?"text-gray-400 ":"text-gray-800 ")+`${
                extend ? "line-clamp-none" : "line-clamp-3"
              } text-left `}ref={bioRef}
            >
              {userData.bio}
            </p>
            {!extend && isLong && (
              <p
                className="cursor-pointer absolute right-3 bottom-0 text-blue-500 w-fit px-1 mt-1 rounded"
                onClick={() => setextend(true)}
              >
                more...
              </p>
            )}
          </div>
        </div>

        {/* POSTS */}
        <div className="mt-3">
          {userData.posts ? (
            <div>
              <div className="border-b-1 border-b-gray-800 items-center flex justify-center"><p className=" text-gray-400 text-xl font-bold pb-3.5  mr-36">Posts</p></div>
            <div className="flex gap-3 flex-wrap justify-start px-8 pb-10 mt-6">
              {userData.posts.map((e, i) => (
                <PostCard key={i} e={e} dark={dark} openMenuId={openMenuId}
          setOpenMenuId={setOpenMenuId}
          index={i}/>
          
              ))}
              <div
      className={`${dark ? "bg-gray-700" : "bg-gray-500"} 
      border border-gray-800 
      w-[300px] h-[300px] rounded-2xl flex justify-center items-center relative opacity-40`}
    ><p className="text-5xl font-bold">+</p></div>
            </div>
            </div>
          ) : (
            <div className="flex w-full h-80 justify-center items-center ">
              <p className="text-2xl text-gray-400">Post Something</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;
