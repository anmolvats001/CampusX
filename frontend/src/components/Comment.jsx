import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../Context/context';
import Shrimmer from './Shrimmer';
import CommentShrimmer from './CommentShrimmer';
import axios from 'axios';
import { toast } from 'react-toastify';
const Comment = () => {
      const textareaRef = useRef();
      const [data,setData]=useState([]);
      const [inputData,setInputData]=useState(null);
      const [loading,setLoading]=useState(false);
const { commvisible, setcommvis, dark,timeAgo ,profileon,setDark,commentData,setcommentData,findCommentData,utoken,setCurrentPost,currentPost,itoken,atoken,findAllPost} = useContext(AppContext);

    const handleInput = () => {
  const textarea = textareaRef.current;

  textarea.style.height = "auto";
  const newHeight = Math.max(textarea.scrollHeight, 30);

  textarea.style.height = `${Math.min(newHeight, 100)}px`;
};
const postComment=async(id)=>{
  if(inputData){
    setLoading(true);
  const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/post/comment-post",{data:inputData,postId:id},{headers:{utoken}});
  setLoading(false)
  if(data.success){
    toast.success(data.message);
   findAllPost();
  }
  else{
    toast.error(data.message)
  }
   findCommentData(id);
    // setcommvis(false);
  }
  else{
    toast.error("Data is missing")
  }
}
const handleCommentLike=async(id)=>{
  // setLoading(true);
  const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/post/like-comment",{commentId:id},{headers:{utoken}});
    toast.success(data.message);
    // setLoading(false);
    setcommvis(false);
    findCommentData(id);
}
useEffect(()=>{
  setData(commentData);

},[commentData])
  return (
    <>
      <div
        className={`${
          dark ? "dark" : "light"
        } fixed lg:absolute w-full lg:w-[30%] z-50 h-full right-0 top-0 px-3 sm:px-4 py-2.5 flex justify-center items-center border-l border-gray-800`}
      >
        <div className="h-full overflow-y-scroll w-full pt-7 lg:pt-5 scroller">
          {/* Close button for mobile */}
          <div className="lg:hidden flex justify-between items-center mb-3">
            <p className="font-bold text-xl pl-5 lg:pl-0">Comments ...</p>
            <div 
              className="text-2xl cursor-pointer p-2"
              onClick={() => setcommvis(false)}
            >
              ×
            </div>
          </div>
          
          {/* Desktop title */}
          <p className="font-bold text-xl hidden lg:block">Comments ...</p>
          
          {/* Comment input */}
          {utoken&&<div className="flex px-1 lg:px-1.5 mt-3 gap-2">
          <textarea
              ref={textareaRef}
              onInput={handleInput}
              placeholder="Enter your thoughts"
              rows="1" onChange={(e)=>setInputData(e.target.value)}
              className={`focus:outline-0 
                w-full lg:w-[80%] 
                border-gray-800 
                rounded-xl lg:rounded-2xl 
                scroller 
                border-2 
                py-2 lg:py-1 
                px-3
                ${dark ? "text-gray-300" : "text-gray-600"}
                resize-none
                overflow-y-auto
                max-h-[100px]
                min-h-[50px]
                text-sm lg:text-base
              `}
            />
            <p className={`${
              !dark ? "dark" : "light"
            } rounded-xl lg:rounded-3xl px-3 lg:px-3.5 h-10 font-bold py-1 flex justify-center items-center cursor-pointer min-w-[60px] lg:min-w-auto`} onClick={()=>postComment(currentPost)}>
              Post
            </p>
          </div>
          }
          {/* Comments list */}
          {(!commentData|| loading)?<CommentShrimmer/>:
        commentData.length==0?(<div className="h-full overflow-y-scroll w-full pt-4 lg:pt-5 text-2xl font-bold scroller flex justify-center text-gray-500">No Comments Yet</div>):(<div className="mt-4 flex flex-col gap-3">
            {commentData.map((e, i) => (
              <div
                key={i}
                className="w-full border-gray-800 border rounded-xl lg:rounded-2xl h-fit px-3 lg:px-3.5 py-2.5"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex gap-2 px-1 lg:px-2.5">
                      <img
                        src={e.creator.profile}
                        className="w-8 h-8 lg:w-10 lg:h-10 object-cover rounded-full"
                        alt={`Profile picture of ${e.creator.name}`}
                      />
                      <div className="min-w-0">
                        <p className="font-semibold text-xs lg:text-sm truncate">{e.creator.name}</p>
                        <p className="text-[9px] lg:text-[10px] text-gray-400">
                          ({e.creator.branch})
                        </p>
                      </div>
                      <p className="text-[10px] lg:text-[12px] font-semibold text-gray-400 px-1 mt-1">
                        {timeAgo(e.publishedOn)}
                      </p>
                    </div>
                  </div>
                  <div className="pr-2 lg:pr-6 pl-10 lg:pl-12">
                    <p className={
                      dark
                        ? "text-xs lg:text-[14px] text-gray-200"
                        : "text-xs lg:text-[14px] text-gray-900"
                    }>
                      {e.data}
                    </p>
                  </div>
                  <div className="flex px-8 lg:px-11 mt-3 lg:mt-5 gap-4 lg:gap-8">
                    <div onClick={()=>{if(itoken||atoken){toast.error("Incharge/Admin cant like")}else if(utoken){handleCommentLike(e._id)}}}
                      className={
                        (dark ? "text-gray-500" : "text-gray-700") +
                        " flex cursor-pointer items-center rounded-xl lg:rounded-3xl hover:text-red-800 " +
                        (e.liked && "text-red-800")
                      }
                    >
                      <i className="fi fi-ss-social-network text-sm lg:text-base"></i>
                      <p className="text-xs ml-1">{e.likes.length||0}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>)}
        </div>
      </div>
      <div
        className="fixed lg:absolute w-screen z-40 h-full top-0 bg-black opacity-70"
        onClick={() => {
          setcommvis(false);
        }}
      ></div>
    </>)
}

export default Comment
