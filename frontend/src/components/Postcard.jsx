import React, { useState, useContext } from "react";
import { AppContext } from "../Context/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const PostCard = ({ e, dark, openMenuId, setOpenMenuId, index }) => {
  const { setcommvis ,setPostdata,utoken,findProfileData} = useContext(AppContext);
  const navigate=useNavigate()
  const isOpen = openMenuId === index;
  const deletePost=async(postId)=>{
    const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/deletePost",{postId},{headers:{utoken}});
    if(data.success){
      findProfileData();
      navigate("/issues/home")
      toast.success("post Deleted Successfully");
      
    }
    else{
      toast.error(data.message);
    }
  }
  const resolvePost=async(postId)=>{
    try {
      const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/resolvepost",{postId},{headers:{utoken}});
      if(data.success){
        findProfileData();
      navigate("/issues/home")
        toast.success(data.message)
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(data.message);
    }
  }
  return (
    <div
      className={`${dark ? "bg-black" : "bg-white"} 
      px-1.5 py-0.5 border border-gray-800 
      w-[300px] h-[300px] rounded-2xl relative`}
   >
      {e.files[0]&&<img
        src={e.files[0].src}
        className="rounded-xl object-cover w-full h-[70%]"
        alt=""  onClick={()=>{setPostdata(e);navigate(`/issues/post-data/${index}`)}}
      />}

      <p className="line-clamp-2 text-sm text-gray-500 pt-1.5"  onClick={()=>{setPostdata(e);navigate(`/issues/post-data/${index}`)}}>{e.data}</p>

      <div className="flex mt-2 px-2 gap-8"  onClick={()=>{setPostdata(e);navigate(`/issues/post-data/${index}`)}}>
        {/* Likes */}
        <div
          className={`${dark ? "text-gray-500" : "text-gray-700"} 
          flex cursor-pointer items-center rounded-3xl hover:text-red-800 
          ${e.liked && "text-red-800"}`}
        >
          <i className="fi fi-ss-social-network"></i>
          <p className="text-xs ml-1">{e.likes.length}</p>
        </div>

        {/* Comments */}
        <div
          className={`${dark ? "text-gray-500" : "text-gray-700"} 
          flex items-center rounded-3xl gap-1 cursor-pointer hover:text-blue-500`}
          onClick={() => setcommvis(true)}
        >
          <i className="fi fi-ts-comment-dots text-sm"></i>
          <p className="text-sm">{e.comments.length}</p>
        </div>

        {/* Agree */}
        <div
          className={`${dark ? "text-gray-500" : "text-gray-700"} 
          group flex items-center rounded-3xl gap-1 cursor-pointer hover:text-orange-600 relative`}
        >
          <i className="fi fi-tr-heart-partner-handshake"></i>
          <p className="text-sm">{e.comments.length}</p>

          <div className="absolute px-3 py-1 bottom-8 left-6 bg-white rounded shadow hidden group-hover:block">
            agree
          </div>
        </div>

        {/* Share */}
        <div
          className={`${dark ? "text-gray-500" : "text-gray-700"} 
          flex items-center rounded-3xl cursor-pointer hover:text-green-700 gap-1`}
        >
          <i className="fi fi-rr-share-square text-sm"></i>
          <p className="text-xs">share</p>
        </div>
      </div>

      {/* OPTIONS MENU BUTTON */}
      <div className="absolute right-3 top-3.5">
        <i
          className="fi fi-bs-menu-dots-vertical cursor-pointer text-white"
          onClick={() => setOpenMenuId(isOpen ? null : index)}
        ></i>
      </div>
      {isOpen && (
        <div className={(dark ? "dark" : "light") + " absolute right-3 top-10 w-24 rounded-2xl shadow p-2"}>
          
          {!e.resolvedByStudent&&<p className="cursor-pointer hover:bg-gray-900 p-1 text-green-600"onClick={()=>resolvePost(e._id)} >Resolved</p>}
          <p className="cursor-pointer hover:bg-gray-900 p-1 text-red-900" onClick={()=>deletePost(e._id)}>Delete</p>
        </div>
      )}
    </div>
  );
};

export default PostCard;
