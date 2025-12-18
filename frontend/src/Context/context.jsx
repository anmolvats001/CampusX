import { createContext, useEffect, useState } from "react";
import userphoto from "../assets/user1.png"
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import axios from "axios"
// 1️⃣ Create Context
export const AppContext = createContext();

// 2️⃣ Create Provider
export const AppProvider = ({ children }) => {
  const navigate=useNavigate();
  const [user, setUser] = useState(null);
  const [dark,setDark]=useState(true);
  const [val,setVal]=useState("home");
  const [commvisible,setcommvis]=useState(false);
  const [comment,setcomment]=useState([]);
  
  const [profileon, setProfileOn] = useState(false);
  const [postvis,setPostVis]=useState(false);
  const [filter,setFilter]=useState(null);
  const [PostData,setPostdata]=useState({});
  const [data,setData]=useState([]);
  const [onfile, setOnFile] = useState(null);
  const [on, seton] = useState(false);
  const [inchargelogin,setInchargelogin]=useState(localStorage.getItem("itoken")?true:false);
  const [adminlogin,setAdminLogin]=useState(localStorage.getItem("atoken")?true:false);
  const [studentLogin,setStudentLogin]=useState(localStorage.getItem("utoken")?true:false);
 const [profileData,setProfileData]=useState({});
  const [utoken,setuToken]=useState(localStorage.getItem("utoken")?localStorage.getItem("utoken"):false);
  const [itoken,setiToken]=useState(localStorage.getItem("itoken")?localStorage.getItem("itoken"):false);
  const [atoken,setaToken]=useState(localStorage.getItem("atoken")?localStorage.getItem("atoken"):false);
  const [commentData,setcommentData]=useState(null);
  const [currentPost,setCurrentPost]=useState(null);
  const backendUrl=import.meta.env.VITE_BACKEND_URL;
  const logout=()=>{
    setInchargelogin(false);setStudentLogin(false);setAdminLogin(false);
    localStorage.removeItem("utoken")
    localStorage.removeItem("atoken")
    localStorage.removeItem("itoken")
    setuToken(false)
    setiToken(false)
    setaToken(false)
    navigate("/");
  }
  const findProfileData=async()=>{
    const {data}=await axios.get(import.meta.env.VITE_BACKEND_URL+"/api/user/profile",{headers:{utoken}});
    if(!data){
      toast.error("data not found");
    }
    else{
      setProfileData({...data.UserData,posts:[...data.UserData.posts].reverse()});
    }
  }
  const findAllPost=async()=>{
    const {data}=await axios.get(import.meta.env.VITE_BACKEND_URL+"/api/post/alluser-post",{headers:{utoken}});
    if(data.success){
      setData([...data.postdata].reverse());
      // console.log(data.postdata)
    }
    else{
      console.log(data)
    }
  }
 const findCommentData=async(id)=>{
  const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/post/allcomments",{postId:id});
  setCurrentPost(id);
  if(data.success){
    setcommentData([...data.comments].reverse());
  }
 }
  useEffect(()=>{
    findProfileData();
    findAllPost();
},[utoken,itoken,atoken,profileData])
    const timeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now - past;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);

    if (diffSec < 60) return "Just now";
    if (diffMin < 60) return `${diffMin} min ago`;
    if (diffHr < 24) return `${diffHr} hr ago`;
    if (diffDay === 1) return "Yesterday";

    return past.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <AppContext.Provider value={{ user, setUser,dark,setDark,val,setVal,setcommvis,commvisible,timeAgo,comment,setcomment,profileon,setProfileOn,postvis,setPostVis,filter,setFilter,PostData,setPostdata,data,setData,on,onfile,seton,setOnFile,inchargelogin,setInchargelogin,adminlogin,setAdminLogin,studentLogin,setStudentLogin,profileData,setProfileData,backendUrl,utoken,setuToken,itoken,setiToken,atoken,setaToken,logout,findProfileData,commentData,setcommentData,findCommentData,setCurrentPost,currentPost}}>
      {children}
    </AppContext.Provider>
  );
};
