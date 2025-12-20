import React, { useContext } from 'react'
import { AppContext } from '../Context/context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import CommentShrimmer from './CommentShrimmer';

const IssueContent = ({e, i, search}) => {
    const {timeAgo, dark, setPostdata, setcommvis, seton, setOnFile,utoken,commentData,setcommentData,findCommentData,setCurrentPost,currentPost,atoken,itoken} = useContext(AppContext);
    const handleLike=async(id)=>{
        const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/post/like-postuser",{postId:id},{headers:{utoken}});
        console.log(data);
        if(data.success){
            toast.success(data.message);
            findData();
        }
        else{
            console.log(data);
        }
    }
    const handleAgree=async(id)=>{
        const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/post/agree",{postId:id},{headers:{utoken}});
        console.log(data);
        if(data.success){
            toast.success(data.message);
            findData();
        }
        else{
            console.log(data);
        }
    }
    
    const navigate = useNavigate();
    return (
        <div 
            onClick={() => {
                search && setPostdata(e); 
                search && navigate(`/issues/post-data/${e._id}`);
            }}
            key={i}
            className="w-full border border-gray-800 rounded-xl lg:rounded-2xl h-fit px-3 sm:px-3.5 py-2.5 cursor-pointer  transition-colors"
        >
            <div className="flex flex-col gap-2">
                {/* Header with user info and status */}
                <div className="flex justify-between items-start">
                    <div className="flex gap-2 px-1 sm:px-2.5 flex-1 min-w-0">
                        <img
                            src={e.creator.profile}
                            className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                            alt={`Profile picture of ${e.creator.name}`}
                        />
                        <div className="min-w-0 flex-1">
                            <p className="font-semibold text-xs sm:text-sm truncate">{e.creator.name}</p>
                            <p className="text-[9px] sm:text-[10px] text-gray-400">
                                ({e.creator.branch})
                            </p>
                        </div>
                        <p className="text-[10px] sm:text-[12px] font-semibold text-gray-400 px-1 mt-1 whitespace-nowrap">
                            {timeAgo(e.publishedOn)}
                        </p>
                    </div>
                    <p className={`
                        font-semibold text-[10px] sm:text-xs ml-2
                        ${e.resolvedByStudent ? "text-green-500" : ""}
                        ${!e.resolvedByStudent && !e.resolvedByIncharge ? "text-red-500" : ""}
                        ${!e.resolvedByStudent && e.resolvedByIncharge ? "text-gray-400" : ""}
                        whitespace-nowrap
                    `}>
                        {e.resolvedByStudent && "Resolved"}
                        {!e.resolvedByStudent && !e.resolvedByIncharge && "Pending"}
                        {!e.resolvedByStudent && e.resolvedByIncharge && "In Process"}
                    </p>
                </div>
                
                {/* Content text */}
                <div className="px-7 sm:px-9">
                    <p className={`
                        ${dark ? "text-gray-200" : "text-gray-900"} 
                        text-sm lg:text-[15px]
                        ${search ? "line-clamp-2" : ""}
                    `}>
                        {e.data}
                    </p>
                </div>
                
                {/* Images grid */}
                {!e.files?<CommentShrimmer/>:<div className={`max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] w-full h-fit px-4 sm:px-7 ${search ? "h-fit max-h-[200px] sm:max-h-[250px] overflow-hidden" : ''}`}>
                    <div className="w-full mt-2 sm:mt-3.5 overflow-hidden rounded-lg lg:rounded-xl">
                        {/* 1 image */}
                        {e.files && e.files.length === 1 && (
                            <div className={`max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] ${search ? "h-fit max-h-[200px] sm:max-h-[250px] overflow-hidden" : ''}`}>
                                <img
                                    src={e.files[0].src}
                                    onClick={(event) => {
                                        if (!search) {
                                            event.stopPropagation();
                                            seton(true);
                                            setOnFile(e.files[0].src);
                                        }
                                    }}
                                    className={`h-full w-full object-cover rounded-lg lg:rounded-xl ${search ? "h-fit max-h-[200px] sm:max-h-[250px] overflow-hidden" : ''}`}
                                    alt={`Attached image for ${e.title}`}
                                />
                            </div>
                        )}
                        
                        {/* 2 images */}
                        {e.files && e.files.length === 2 && (
                            <div className={`grid grid-cols-2 gap-1 max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] ${search ? "h-fit max-h-[200px] sm:max-h-[250px] overflow-hidden" : ''}`}>
                                {e.files.map((a, j) => (
                                    <div key={j}>
                                        <img
                                            src={a.src}
                                            onClick={(event) => {
                                                if (!search) {
                                                    event.stopPropagation();
                                                    seton(true);
                                                    setOnFile(a.src);
                                                }
                                            }}
                                            className={`w-full h-full object-cover rounded-lg lg:rounded-xl ${search ? "h-fit max-h-[200px] sm:max-h-[250px] overflow-hidden" : ''}`}
                                            alt={`Attached image ${j + 1} for ${e.title}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {/* 3 images */}
                        {e.files && e.files.length === 3 && (
                            <div className={`grid grid-cols-3 gap-1 max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] ${search ? "h-fit max-h-[200px] sm:max-h-[250px] overflow-hidden" : ''}`}>
                                <div className="col-span-2">
                                    <img
                                        src={e.files[0].src}
                                        onClick={(event) => {
                                            if (!search) {
                                                event.stopPropagation();
                                                seton(true);
                                                setOnFile(e.files[0].src);
                                            }
                                        }}
                                        className={`w-full h-full object-cover rounded-lg lg:rounded-xl ${search ? "h-fit max-h-[200px] sm:max-h-[250px] overflow-hidden" : ''}`}
                                        alt={`Attached image 1 for ${e.title}`}
                                    />
                                </div>
                                <div className="grid grid-rows-2 gap-1">
                                    <img
                                        src={e.files[1].src}
                                        onClick={(event) => {
                                            if (!search) {
                                                event.stopPropagation();
                                                seton(true);
                                                setOnFile(e.files[1].src);
                                            }
                                        }}
                                        className={`w-full h-full object-cover rounded-lg lg:rounded-xl ${search ? "h-fit max-h-[200px] sm:max-h-[250px] overflow-hidden" : ''}`}
                                        alt={`Attached image 2 for ${e.title}`}
                                    />
                                    <img
                                        src={e.files[2].src}
                                        onClick={(event) => {
                                            if (!search) {
                                                event.stopPropagation();
                                                seton(true);
                                                setOnFile(e.files[2].src);
                                            }
                                        }}
                                        className={`w-full h-full object-cover rounded-lg lg:rounded-xl ${search ? "h-fit max-h-[200px] sm:max-h-[250px] overflow-hidden" : ''}`}
                                        alt={`Attached image 3 for ${e.title}`}
                                    />
                                </div>
                            </div>
                        )}
                        
                        {/* 4 images */}
                        {e.files && e.files.length === 4 && (
                            <div className={`grid grid-cols-2 gap-1 max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] ${search ? "h-fit max-h-[200px] sm:max-h-[250px] overflow-hidden" : ''}`}>
                                {e.files.map((a, k) => (
                                    <div key={k} className="h-[150px] sm:h-[200px] lg:h-[250px]">
                                        <img
                                            src={a.src}
                                            onClick={(event) => {
                                                if (!search) {
                                                    event.stopPropagation();
                                                    seton(true);
                                                    setOnFile(a.src);
                                                }
                                            }}
                                            className={`w-full h-full object-cover rounded-lg lg:rounded-xl ${search ? "h-fit max-h-[200px] sm:max-h-[250px] overflow-hidden" : ''}`}
                                            alt={`Attached image ${k + 1} for ${e.title}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                }
                {/* Action buttons */}
                <div className="flex px-6 sm:px-8 lg:px-11 mt-3 sm:mt-4 lg:mt-5 gap-4 sm:gap-6 lg:gap-8 flex-wrap">
                    <div className={
                        (dark ? "text-gray-500" : "text-gray-700") +
                        " flex cursor-pointer items-center rounded-xl lg:rounded-3xl hover:text-red-800 " +
                        (e.liked && "text-red-800")
                    }>
                        <i className="fi fi-ss-social-network text-sm lg:text-base" onClick={()=>{if(itoken||atoken){toast.error("Incharge/Admin cant like")}else if(!search){handleLike(e._id)}}}></i>
                        <p className="text-xs ml-1">{e.likes.length}</p>
                    </div>
                    <div
                        className={
                            (dark ? "text-gray-500" : "text-gray-700") +
                            " flex items-center rounded-xl lg:rounded-3xl gap-1 cursor-pointer hover:text-blue-500"
                        }
                        onClick={(event) => {
                            event.stopPropagation();
                            findCommentData(e._id)
                            setcommvis(true);
                        }}
                    >
                        <i className="fi fi-ts-comment-dots text-sm lg:text-base"></i>
                        <p className="text-xs lg:text-sm">{e.comments.length || 0}</p>
                    </div>
                    <div onClick={()=>{if(itoken||atoken){toast.error("Incharge/Admin cant Agree")}else if(!search)handleAgree(e._id)}}
                        className={
                            (dark ? "text-gray-500" : "text-gray-700") +
                            " group flex items-center rounded-xl lg:rounded-3xl gap-1 cursor-pointer hover:text-orange-600 relative "+(e.agreed&&"text-orange-600")
                        }
                    >
                        <i className="fi fi-tr-heart-partner-handshake text-sm lg:text-base"></i>
                        <p className="text-xs lg:text-sm">{e.agrees.length || 0}</p>
                        <div className="absolute px-2 py-1 bottom-6 lg:bottom-8 left-4 lg:left-6 bg-white dark:bg-gray-800 rounded shadow hidden group-hover:block text-xs">
                            agree
                        </div>
                    </div>
                    <div
                        className={
                            (dark ? "text-gray-500" : "text-gray-700") +
                            " flex items-center rounded-xl lg:rounded-3xl cursor-pointer hover:text-green-700 gap-1"
                        }
                    >
                        <i className="fi fi-rr-share-square text-sm lg:text-base"></i>
                        <p className="text-xs">share</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IssueContent