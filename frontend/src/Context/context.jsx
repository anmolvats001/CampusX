import { createContext, useEffect, useState } from "react";
import userphoto from "../assets/user1.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
// 1️⃣ Create Context
export const AppContext = createContext();

// 2️⃣ Create Provider
export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [dark, setDark] = useState(true);
  const [val, setVal] = useState("home");
  const [commvisible, setcommvis] = useState(false);
  const [comment, setcomment] = useState([]);

  const [profileon, setProfileOn] = useState(false);
  const [postvis, setPostVis] = useState(false);
  const [filter, setFilter] = useState(null);
  const [PostData, setPostdata] = useState({});
  const [data, setData] = useState([]);
  const [onfile, setOnFile] = useState(null);
  const [on, seton] = useState(false);
  const [inchargelogin, setInchargelogin] = useState(
    localStorage.getItem("itoken") ? true : false
  );
  const [adminlogin, setAdminLogin] = useState(
    localStorage.getItem("atoken") ? true : false
  );
  const [studentLogin, setStudentLogin] = useState(
    localStorage.getItem("utoken") ? true : false
  );
  const [profileData, setProfileData] = useState({});
  const [utoken, setuToken] = useState(
    localStorage.getItem("utoken") ? localStorage.getItem("utoken") : false
  );
  const [itoken, setiToken] = useState(
    localStorage.getItem("itoken") ? localStorage.getItem("itoken") : false
  );
  const [atoken, setaToken] = useState(
    localStorage.getItem("atoken") ? localStorage.getItem("atoken") : false
  );
  const [commentData, setcommentData] = useState(null);
  const [currentPost, setCurrentPost] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const logout = () => {
    setInchargelogin(false);
    setStudentLogin(false);
    setAdminLogin(false);
    localStorage.removeItem("utoken");
    localStorage.removeItem("atoken");
    localStorage.removeItem("itoken");
    setuToken(false);
    setiToken(false);
    setaToken(false);
    navigate("/");
  };
  const findProfileData = async () => {
    if(utoken){
      const { data } = await axios.get(
      import.meta.env.VITE_BACKEND_URL + "/api/user/profile",
      { headers: { utoken } }
    );
    if (!data) {
      toast.error("data not found");
    } else {
      setProfileData({
        ...data.UserData,
        posts: [...data.UserData.posts].reverse(),
      });
    }
    }
    else if (atoken){
      const { data } = await axios.get(
      import.meta.env.VITE_BACKEND_URL + "/api/admin/profile",
      { headers: { atoken } }
    );
    if (!data) {
      toast.error("data not found");
      console.log(data)
    } else {
      setProfileData({
        ...data.UserData
      });
    }
    }
    else if (itoken){
       const { data } = await axios.get(
      import.meta.env.VITE_BACKEND_URL + "/api/incharge/profile",
      { headers: { itoken } }
    );
    if (!data) {
      toast.error("data not found");
      console.log(data)
    } else {
      setProfileData({
        ...data.UserData
      });
      console.log(data)
    }
    }
  };
  const findAllPost = async () => {
    if (utoken) {
      const { data } = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/api/post/alluser-post",
        { headers: { utoken } }
      );
      if (data.success) {
        setData([...data.postdata].reverse());
        // console.log(data.postdata)
      } else {
        console.log(data);
      }
    } else if (itoken || atoken) {
      const { data } = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/post/all-post"
      );
      if (data.success) {
        setData([...data.postdata].reverse());
      } else {
        console.log(data);
      }
    }
  };
  const findCommentData = async (id) => {
    if(utoken){
      const { data } = await axios.post(
      import.meta.env.VITE_BACKEND_URL + "/api/post/allcomments",
      { postId: id },
      { headers: { utoken } }
    );
    setCurrentPost(id);
    console.log(data);
    if (data.success) {
      setcommentData([...data.comments].reverse());
    }
  }
  if(itoken|| atoken){
    const { data } = await axios.post(
      import.meta.env.VITE_BACKEND_URL + "/api/post/allcommentforinchargeandadmin",
      { postId: id },
    );
    setCurrentPost(id);
    console.log(data);
    if (data.success) {
      setcommentData([...data.comments].reverse());
    }
  
  }
    };
  useEffect(() => {
    findAllPost();
  }, [utoken, itoken, atoken, profileData,data]);
  useEffect(()=>{
    findProfileData();
  },[utoken, itoken, atoken])
  const timeAgo = (dateString) => {
  const now = Date.now();
  const past = new Date(dateString).getTime();

  const diffMs = now - past;
  if (diffMs < 0) return "Just now";

  const diffSec = Math.floor(diffMs / 1000);
  if (diffSec < 60) return "Just now";

  const diffMin = Math.floor(diffMs / (1000 * 60));
  if (diffMin < 60) return `${diffMin} min ago`;

  const diffHr = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffHr < 24) return `${diffHr} hr ago`;

  const diffDay = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDay === 1) return "Yesterday";

  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};


  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        dark,
        setDark,
        val,
        setVal,
        setcommvis,
        commvisible,
        timeAgo,
        comment,
        setcomment,
        profileon,
        setProfileOn,
        postvis,
        setPostVis,
        filter,
        setFilter,
        PostData,
        setPostdata,
        data,
        setData,
        on,
        onfile,
        seton,
        setOnFile,
        inchargelogin,
        setInchargelogin,
        adminlogin,
        setAdminLogin,
        studentLogin,
        setStudentLogin,
        profileData,
        setProfileData,
        backendUrl,
        utoken,
        setuToken,
        itoken,
        setiToken,
        atoken,
        setaToken,
        logout,
        findProfileData,
        commentData,
        setcommentData,
        findCommentData,
        setCurrentPost,
        currentPost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
