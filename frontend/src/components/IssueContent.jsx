import React, { useContext } from 'react'
import { AppContext } from '../Context/context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import CommentShrimmer from './CommentShrimmer';

const IssueContent = ({e, i, search}) => {
    const {timeAgo, dark, setPostdata, setcommvis, seton, setOnFile,utoken,commentData,setcommentData,findCommentData,setCurrentPost,currentPost,atoken,itoken,findAllPost,setData} = useContext(AppContext);
    const handleLike = async (id) => {

  setData(prev =>
    prev.map(post =>
      post._id === id
        ? {
            ...post,
            liked: !post.liked,
            likes: post.liked
              ? post.likes.slice(0, -1)
              : [...post.likes, "x"]
          }
        : post
    )
  );

  try {
    
    await axios.post(
      import.meta.env.VITE_BACKEND_URL + "/api/post/like-postuser",
      { postId: id },
      { headers: { utoken } }
    );
  } catch (error) {

    setData(prev =>
      prev.map(post =>
        post._id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked
                ? post.likes.slice(0, -1)
                : [...post.likes, "x"]
            }
          : post
      )
    );
    toast.error("Like failed");
  }
};

   const handleAgree = async (id) => {
  setData(prev =>
    prev.map(post =>
      post._id === id
        ? {
            ...post,
            agreed: !post.agreed,
            agrees: post.agreed
              ? post.agrees.slice(0, -1)
              : [...post.agrees, "x"]
          }
        : post
    )
  );

  try {
    await axios.post(
      import.meta.env.VITE_BACKEND_URL + "/api/post/agree",
      { postId: id },
      { headers: { utoken } }
    );
  } catch (error) {
    setData(prev =>
      prev.map(post =>
        post._id === id
          ? {
              ...post,
              agreed: !post.agreed,
              agrees: post.agreed
                ? post.agrees.slice(0, -1)
                : [...post.agrees, "x"]
            }
          : post
      )
    );
    toast.error("Agree failed");
  }
};
 
    const navigate = useNavigate();
    const isLiked = Boolean(e.liked);
    const isAgreed = Boolean(e.agreed);

    return (
        <div 
            onClick={() => {
                if (search) {
                    setPostdata(e); 
                    navigate(`/issues/post-data/${e._id}`);
                }
            }}
            key={i}
            className={`w-full rounded-2xl border transition-all duration-200 ${
                search ? "cursor-pointer hover:border-blue-500/50" : ""
            } p-4 sm:p-5 ${
                dark 
                    ? "bg-[#111827] border-slate-800/80 shadow-lg shadow-black/20 text-slate-100" 
                    : "bg-white border-slate-200 shadow-sm hover:shadow-md text-slate-900"
            }`}
        >
            <div className="flex flex-col gap-3">
                {/* Header with user info, block metadata, and status badge */}
                <div className="flex justify-between items-start gap-2">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        <img
                            src={e.creator?.profile || "https://imgs.search.brave.com/OrD16cB7BwEj3DZfFr7OHRQyABsYifutWhl975vIvII/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMTAvRGVm/YXVsdC1Qcm9maWxl/LVBpY3R1cmUtUE5H/LUltYWdlLVRyYW5z/cGFyZW50LUJhY2tn/cm91bmQucG5n"}
                            className="w-10 h-10 object-cover rounded-full ring-2 ring-blue-500/20 shrink-0"
                            alt={`Profile of ${e.creator?.name || "User"}`}
                        />
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                                <p className="font-semibold text-sm truncate">{e.creator?.name || "Anonymous"}</p>
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-500/10 text-slate-400 font-medium">
                                    {e.creator?.branch || "Student"}
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5 flex-wrap">
                                <span className="flex items-center gap-1">
                                    <i className="fi fi-rr-clock text-[10px]"></i>
                                    {timeAgo(e.publishedOn)}
                                </span>
                                {e.block && (
                                    <>
                                        <span>•</span>
                                        <span className="font-medium text-blue-400">{e.block} Block</span>
                                    </>
                                )}
                                {e.problem && (
                                    <>
                                        <span>•</span>
                                        <span className="capitalize text-slate-400">{e.problem}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Modern Status Badge */}
                    <div className="shrink-0">
                        {e.resolvedByStudent && (
                            <span className="badge-resolved px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                                <i className="fi fi-ss-check-circle text-xs"></i>
                                <span>Resolved</span>
                            </span>
                        )}
                        {!e.resolvedByStudent && e.resolvedByIncharge && (
                            <span className="badge-inprocess px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                                <i className="fi fi-sr-hourglass-end text-xs"></i>
                                <span>In Process</span>
                            </span>
                        )}
                        {!e.resolvedByStudent && !e.resolvedByIncharge && (
                            <span className="badge-pending px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                                <i className="fi fi-sr-clock text-xs"></i>
                                <span>Pending</span>
                            </span>
                        )}
                    </div>
                </div>
                
                {/* Content text */}
                <div className="pt-1">
                    <p className={`text-sm sm:text-[15px] leading-relaxed font-normal ${
                        dark ? "text-slate-200" : "text-slate-800"
                    } ${search ? "line-clamp-3" : ""}`}>
                        {e.data}
                    </p>
                </div>
                
                {/* Images grid */}
                {e.files && e.files.length > 0 && (
                    <div className="w-full mt-1 overflow-hidden rounded-xl border border-slate-700/40 bg-slate-950/20">
                        {/* 1 image */}
                        {e.files.length === 1 && (
                            <div className={`w-full ${search ? "max-h-[220px]" : "max-h-[460px]"} overflow-hidden`}>
                                <img
                                    src={e.files[0].src}
                                    onClick={(event) => {
                                        if (!search) {
                                            event.stopPropagation();
                                            seton(true);
                                            setOnFile(e.files[0].src);
                                        }
                                    }}
                                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-[1.01]"
                                    alt="Attached issue photo"
                                />
                            </div>
                        )}
                        
                        {/* 2 images */}
                        {e.files.length === 2 && (
                            <div className="grid grid-cols-2 gap-1.5">
                                {e.files.map((a, j) => (
                                    <div key={j} className="h-44 sm:h-56 overflow-hidden">
                                        <img
                                            src={a.src}
                                            onClick={(event) => {
                                                if (!search) {
                                                    event.stopPropagation();
                                                    seton(true);
                                                    setOnFile(a.src);
                                                }
                                            }}
                                            className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                                            alt={`Attached photo ${j + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {/* 3 images */}
                        {e.files.length === 3 && (
                            <div className="grid grid-cols-3 gap-1.5 h-48 sm:h-64">
                                <div className="col-span-2 h-full overflow-hidden">
                                    <img
                                        src={e.files[0].src}
                                        onClick={(event) => {
                                            if (!search) {
                                                event.stopPropagation();
                                                seton(true);
                                                setOnFile(e.files[0].src);
                                            }
                                        }}
                                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                                        alt="Attached photo 1"
                                    />
                                </div>
                                <div className="grid grid-rows-2 gap-1.5 h-full">
                                    <div className="h-full overflow-hidden">
                                        <img
                                            src={e.files[1].src}
                                            onClick={(event) => {
                                                if (!search) {
                                                    event.stopPropagation();
                                                    seton(true);
                                                    setOnFile(e.files[1].src);
                                                }
                                            }}
                                            className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                                            alt="Attached photo 2"
                                        />
                                    </div>
                                    <div className="h-full overflow-hidden">
                                        <img
                                            src={e.files[2].src}
                                            onClick={(event) => {
                                                if (!search) {
                                                    event.stopPropagation();
                                                    seton(true);
                                                    setOnFile(e.files[2].src);
                                                }
                                            }}
                                            className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                                            alt="Attached photo 3"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {/* 4 images */}
                        {e.files.length === 4 && (
                            <div className="grid grid-cols-2 gap-1.5">
                                {e.files.map((a, k) => (
                                    <div key={k} className="h-36 sm:h-48 overflow-hidden">
                                        <img
                                            src={a.src}
                                            onClick={(event) => {
                                                if (!search) {
                                                    event.stopPropagation();
                                                    seton(true);
                                                    setOnFile(a.src);
                                                }
                                            }}
                                            className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                                            alt={`Attached photo ${k + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Elevated Action Buttons */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-700/30 text-xs sm:text-sm">
                    {/* Like Button */}
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            if (itoken || atoken) {
                                toast.error("Incharge/Admin cannot like posts");
                            } else if (!search) {
                                handleLike(e._id);
                            }
                        }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                            isLiked
                                ? "text-red-500 bg-red-500/10 font-semibold"
                                : dark
                                ? "text-slate-400 hover:text-red-400 hover:bg-red-500/10"
                                : "text-slate-600 hover:text-red-600 hover:bg-red-50"
                        }`}
                        title="Like this complaint"
                    >
                        <i className={`fi ${isLiked ? "fi-sr-heart text-red-500" : "fi-rr-heart"} text-base`}></i>
                        <span>{e.likes?.length || 0}</span>
                    </button>

                    {/* Comments Button */}
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            findCommentData(e._id);
                            setcommvis(true);
                        }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                            dark
                                ? "text-slate-400 hover:text-blue-400 hover:bg-blue-500/10"
                                : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                        }`}
                        title="View comments"
                    >
                        <i className="fi fi-rr-comment-dots text-base"></i>
                        <span>{e.comments?.length || 0}</span>
                    </button>

                    {/* Agree Button */}
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            if (itoken || atoken) {
                                toast.error("Incharge/Admin cannot agree");
                            } else if (!search) {
                                handleAgree(e._id);
                            }
                        }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                            isAgreed
                                ? "text-amber-500 bg-amber-500/10 font-semibold"
                                : dark
                                ? "text-slate-400 hover:text-amber-400 hover:bg-amber-500/10"
                                : "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
                        }`}
                        title="Agree with this issue"
                    >
                        <i className={`fi ${isAgreed ? "fi-sr-thumbs-up text-amber-500" : "fi-rr-thumbs-up"} text-base`}></i>
                        <span>{e.agrees?.length || 0}</span>
                        <span className="hidden sm:inline text-[11px] text-slate-400">Agree</span>
                    </button>

                    {/* Share Button (with dynamic origin URL fix) */}
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            const shareUrl = `${window.location.origin}/issues/post-data/${e._id}`;
                            navigator.clipboard.writeText(shareUrl);
                            toast.success("Link copied to clipboard!");
                        }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                            dark
                                ? "text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10"
                                : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
                        }`}
                        title="Share link"
                    >
                        <i className="fi fi-rr-share-square text-base"></i>
                        <span className="hidden sm:inline text-[11px]">Share</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IssueContent;