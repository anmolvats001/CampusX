import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../Context/context";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Shrimmer from "./Shrimmer";

const Post = () => {
  const { postvis, setPostVis, dark, profileData,setProfileData,utoken ,findProfileData} = useContext(AppContext);
  const [words, setWords] = useState(0);
  const textref = useRef();
  const [textdata,setttextdata]=useState(null);
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState(null);
  const [imageFiles,setImageFiles]=useState([]);
  const [floor,setFloor]=useState(null);
  const [problem,setProblem]=useState(null);
  const [loading,setLoading]=useState(false);
  const fileInputRef = useRef();
  const navigate=useNavigate();
  const postData = async () => {
  try {
    setLoading(true)
    const formData = new FormData();

    formData.append("data", textdata);
    formData.append("floor", floor);
    formData.append("problem", problem);
    formData.append("block", location);

    imageFiles.forEach((file) => {
      formData.append("images", file);
    });
    if(!problem||!textdata||!location||imageFiles.length==0){
      toast.error("credential missing")
    }
    else{
      
     
const res = await axios.post( import.meta.env.VITE_BACKEND_URL + "/api/user/post",formData,{headers:{utoken}});
    
    if (res.data.success) {
      toast.success("Post has been posted");
      setLoading(false)
       navigate("/issues/home")
      findProfileData();
     setPostVis(false)
    } else {
      toast.error(res.data.message);
      setLoading(false);
      setPostVis(false)
      navigate("/issues/home")
    }

    }
    
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.message || "Post failed");
  }
};
const deleteimage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setImageFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handlePickImages = () => {
    fileInputRef.current.click();
  };

  const handleImagesSelected = (e) => {
    let files = Array.from(e.target.files);
    if (files.length + images.length > 4) {
      alert("You can upload maximum 4 images.");
      files = files.slice(0, 4 - images.length);
    }
    const urls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...urls]);
    setImageFiles((prev) => [...prev, ...files]);
    console.log(imageFiles)
  };

  let maxwords = 650;
  const findwords = (e) => {
    let val = e.target.value;
    setttextdata(e.target.value)
    let len = val.length;
    setWords(val.length);
    if (len > maxwords) {
      val = val.substring(0, maxwords);
      e.target.value = val;
      setWords(maxwords);
    }
  };

  return (
    <>
      <div
        className="absolute w-screen z-99 h-full top-0 bg-black opacity-70"
        onClick={() => {
          if(!loading)setPostVis(false);
        }}
      ></div>

      <div
        className={`${dark ? "dark" : "light"} 
          absolute w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] 
          h-[80vh] sm:h-[75vh] md:h-[65%]
          left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2
          px-3 sm:px-4 py-2.5 sm:py-3
          border-2 rounded-xl z-100 border-gray-800 bg-inherit`}
      >
        {loading ? (
    <Shrimmer />
  ) : (<div className="h-full overflow-y-scroll w-full pt-3 sm:pt-5 scroller px-2 sm:px-4">
          <div>
            <div className="flex gap-2 px-1 sm:px-2.5 justify-between">
              <div className="flex gap-2">
                <img
                  src={profileData?.profile}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-cover rounded-full"
                  alt=""
                />
                <div>
                  <p className="font-semibold text-xs sm:text-sm">{profileData?.name}</p>
                  <p className="text-xs text-gray-400">({profileData?.branch})</p>
                </div>
              </div>
              <div
                className="rounded-full p-1 cursor-pointer"
                onClick={() => {
                  setPostVis(false);
                }}
              >
                <i
                  className={
                    (dark ? "text-white" : "text-black") + " fi fi-br-cross-small"
                  }
                ></i>
              </div>
            </div>
          </div>
          
          <div className="w-full flex flex-col gap-2 mt-3 sm:mt-3.5">
            <textarea
              ref={textref}
              onChange={(e) => findwords(e)}
              name=""
              placeholder="Enter your thoughts ..."
              className={`border border-gray-800 rounded-lg focus:outline-none w-full h-40 resize-none p-3 scroller text-sm sm:text-base ${
                dark ? "text-gray-300" : "text-gray-800"
              }`}
            ></textarea>
            <div className="flex justify-end">
              <p className="text-gray-500 text-xs">
                ({words}/{maxwords})
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 px-1 sm:px-2 mt-4 sm:mt-7 text-white">
            <div
              onClick={handlePickImages}
              className="flex justify-center items-center bg-gray-600 px-3 py-2 gap-1 rounded-lg text-xs sm:text-sm cursor-pointer"
            >
              <i className="fi fi-sr-add-image"></i>
              <p>Images</p>
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={handleImagesSelected}
              className="hidden"
            />

            <select
              className="capitalize bg-gray-600 px-3 py-2 rounded-lg focus:outline-none text-xs sm:text-sm"
              onChange={(e) => { setLocation(e.target.value); }}
            >
              <option value="Block">Location</option>
              <option value="ground">Ground</option>
              <option value="KC">KC</option>
              <option value="AB">AB</option>
              <option value="bhabha">Bhabha</option>
              <option value="RJ">RJ</option>
            </select>
            
            {location !== "ground" && (
              <select
                className="capitalize bg-gray-600 px-3 py-2 rounded-lg focus:outline-none text-xs sm:text-sm"
              onChange={(e) => { setFloor(e.target.value); }}>
                <option value="0">Floor</option>
                <option value="1">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                {(location === "KC" || !location) && <option value="4">4</option>}
                {(location === "KC" || !location) && <option value="5">5</option>}
                {(location === "KC" || !location) && <option value="6">6</option>}
              </select>
            )}
            
            <select
              className="capitalize bg-gray-600 px-3 py-2 rounded-lg focus:outline-none text-xs sm:text-sm"
            onChange={(e) => { setProblem(e.target.value); }}>
              <option value="Block">Problem</option>
              <option value="food">Food</option>
              <option value="water">Water</option>
              <option value="administration">Administration</option>
              <option value="hygiene">Hygiene</option>
              <option value="security">Security</option>
            </select>
          </div>
          
          <div className="flex flex-wrap gap-3 px-2 sm:px-4 py-3 sm:py-5">
            {images.map((e, i) => (
              <div className="w-20 h-20 sm:w-28 sm:h-28 relative" key={i}>
                <div
                  className="absolute -top-1 -right-1 rounded-full w-5 h-5 flex items-center justify-center bg-red-500 text-white cursor-pointer"
                  onClick={() => {
                    deleteimage(i);
                  }}
                >
                  <i
                    className={
                      (dark ? "text-white" : "text-black") + " fi fi-br-cross-small text-xs"
                    }
                  ></i>
                </div>{console.log(e)}
                <img src={e} className="w-full h-full rounded-lg object-cover" alt="" />
              </div>
            ))}
          </div>
          
          <div className="flex px-4 sm:px-8 justify-end pt-3">
            <p onClick={postData}
              className={
                (dark ? "light" : "dark") +
                " w-fit px-4 py-2 font-semibold rounded-full cursor-pointer text-sm sm:text-base"
              }
            >
              Post
            </p>
          </div>
        </div>)}
      </div>
    </>
  );
};

export default Post;