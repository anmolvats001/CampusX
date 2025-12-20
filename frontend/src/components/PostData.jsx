import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../Context/context";
import { toast } from "react-toastify";
import axios from "axios";
import CommentShrimmer from "./CommentShrimmer";

const PostData = () => {
  const { id } = useParams();
  const {
    dark,
    setcommvis,
    timeAgo,
    inchargelogin,
    profileData,
    utoken,
    findCommentData,
    itoken,
    atoken,
  } = useContext(AppContext);
  const [on, seton] = useState(false);
  const [onfile, setOnFile] = useState(null);
  const [data, setData] = useState({});
  const [verifyImage, setVerifyImage] = useState(null);
  const [image,setimage]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const resolvePost=async()=>{
    setLoading(true)
    const formData = new FormData();
formData.append("postId", id);
formData.append("image", image);

const { data } = await axios.post(
  import.meta.env.VITE_BACKEND_URL + "/api/incharge/resolve-post",
  formData,{headers:{itoken}});
    if(data.success){
      toast.success(data.message);
      navigate("/issues/home")
    }
    else{
      toast.error(data.message)
    }
    setLoading
  }
  const findData = async () => {
    if(utoken){
        
    const { data } = await axios.post(
      import.meta.env.VITE_BACKEND_URL + "/api/post/getPostData",
      { postId: id },
      { headers: { utoken } }
    );
    console.log(data);
    setData(data.postdata);
    }
    if (itoken || atoken) {
      const { data } = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/post/postData-inchargeoradmin"
      ,{ postId: id });
        setData(data.postdata);
    }
  };
  const handleAgree = async () => {
    const { data } = await axios.post(
      import.meta.env.VITE_BACKEND_URL + "/api/post/agree",
      { postId: id },
      { headers: { utoken } }
    );
    console.log(data);
    if (data.success) {
      toast.success(data.message);
      findData();
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    findData();
    return () => {
      setcommvis(false);
    };
  }, []);
  const handleLike = async () => {
    const { data } = await axios.post(
      import.meta.env.VITE_BACKEND_URL + "/api/post/like-postuser",
      { postId: id },
      { headers: { utoken } }
    );
    console.log(data);
    if (data.success) {
      toast.success(data.message);
      findData();
    } else {
      console.log(data);
    }
  };
  return (
    <div
      className={`${
        dark ? "dark" : "light"
      } h-screen w-full lg:w-[45%] border border-gray-800 relative`}
    >
      {loading?<CommentShrimmer/>:<div className="overflow-y-scroll w-full scroller h-full relative">
        {/* Post Content */}
        <div className="h-fit flex items-center pt-16  lg:pt-7 flex-col gap-8 lg:gap-14 px-2 lg:px-0">
          <div className="w-full border border-gray-800 rounded-xl lg:rounded-2xl h-fit px-3 sm:px-3.5 py-2.5">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div className="flex gap-2 px-1 sm:px-2.5">
                <img
                  src={data?.creator?.profile}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                  alt={`Profile picture of ${data?.creator?.name}`}
                />
                <div className="min-w-0">
                  <p className="font-semibold text-xs sm:text-sm">
                    {data?.creator?.name}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-gray-400">
                    ({data?.creator?.branch})
                  </p>
                </div>
                <p className="text-[10px] sm:text-[12px] font-semibold text-gray-400 px-1 mt-1">
                  {timeAgo(data.publishedOn)}
                </p>
              </div>
              <p
                className={`
                                font-semibold text-[10px] sm:text-xs ml-2
                                ${
                                  data.resolvedByStudent ? "text-green-500" : ""
                                }
                                ${
                                  !data.resolvedByStudent &&
                                  !data.resolvedByIncharge
                                    ? "text-red-500"
                                    : ""
                                }
                                ${
                                  !data.resolvedByStudent &&
                                  data.resolvedByIncharge
                                    ? "text-gray-400"
                                    : ""
                                }
                            `}
              >
                {data.resolvedByStudent && "Resolved"}
                {!data.resolvedByStudent &&
                  !data.resolvedByIncharge &&
                  "Pending"}
                {!data.resolvedByStudent &&
                  data.resolvedByIncharge &&
                  "In Process"}
              </p>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-7 lg:px-9 mt-3">
              <p
                className={dark ? "text-gray-200" : "text-gray-900"}
                style={{ fontSize: "clamp(0.875rem, 2vw, 0.9375rem)" }}
              >
                {data.data}
              </p>
            </div>

            {/* Images */}
            <div className="max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] w-full h-fit px-4 sm:px-5 lg:px-7 mt-3">
              <div className="w-full overflow-hidden rounded-lg lg:rounded-xl">
                {data.files && data.files.length === 1 && (
                  <div className="max-h-[300px] sm:max-h-[400px] lg:max-h-[500px]">
                    <img
                      src={data.files[0].src}
                      onClick={() => {
                        seton(true);
                        setOnFile(data.files[0].src);
                      }}
                      className="h-full w-full object-cover rounded-lg lg:rounded-xl cursor-pointer"
                      alt={`Attached image for ${data.title}`}
                    />
                  </div>
                )}

                {data.files && data.files.length === 2 && (
                  <div className="grid grid-cols-2 gap-1 max-h-[300px] sm:max-h-[400px] lg:max-h-[500px]">
                    {data.files.map((a, j) => (
                      <div key={j}>
                        <img
                          src={a.src}
                          onClick={() => {
                            seton(true);
                            setOnFile(a.src);
                          }}
                          className="w-full h-full object-cover rounded-lg lg:rounded-xl cursor-pointer"
                          alt={`Attached image ${j + 1} for ${data.title}`}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {data.files && data.files.length === 3 && (
                  <div className="grid grid-cols-3 gap-1 max-h-[300px] sm:max-h-[400px] lg:max-h-[500px]">
                    <div className="col-span-2">
                      <img
                        src={data.files[0].src}
                        onClick={() => {
                          seton(true);
                          setOnFile(data.files[0].src);
                        }}
                        className="w-full h-full object-cover rounded-lg lg:rounded-xl cursor-pointer"
                        alt={`Attached image 1 for ${data.title}`}
                      />
                    </div>
                    <div className="grid grid-rows-2 gap-1">
                      <img
                        src={data.files[1].src}
                        onClick={() => {
                          seton(true);
                          setOnFile(data.files[1].src);
                        }}
                        className="w-full h-full object-cover rounded-lg lg:rounded-xl cursor-pointer"
                        alt={`Attached image 2 for ${data.title}`}
                      />
                      <img
                        src={data.files[2].src}
                        onClick={() => {
                          seton(true);
                          setOnFile(data.files[2].src);
                        }}
                        className="w-full h-full object-cover rounded-lg lg:rounded-xl cursor-pointer"
                        alt={`Attached image 3 for ${data.title}`}
                      />
                    </div>
                  </div>
                )}

                {data.files && data.files.length === 4 && (
                  <div className="grid grid-cols-2 gap-1 max-h-[300px] sm:max-h-[400px] lg:max-h-[500px]">
                    {data.files.map((a, k) => (
                      <div
                        key={k}
                        className="h-[150px] sm:h-[200px] lg:h-[250px]"
                      >
                        <img
                          src={a.src}
                          onClick={() => {
                            seton(true);
                            setOnFile(a.src);
                          }}
                          className="w-full h-full object-cover rounded-lg lg:rounded-xl cursor-pointer"
                          alt={`Attached image ${k + 1} for ${data.title}`}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex px-4 sm:px-6 lg:px-11 mt-3 sm:mt-4 lg:mt-5 gap-3 sm:gap-5 lg:gap-8 flex-wrap">
              <div
                className={
                  (dark ? "text-gray-500" : "text-gray-700") +
                  " flex cursor-pointer items-center rounded-xl lg:rounded-3xl hover:text-red-800 " +
                  (data.liked && "text-red-800")
                }
              >
                <i
                  className="fi fi-ss-social-network text-sm lg:text-base"
                  onClick={() => {
                    if (itoken || atoken) {
                      toast.error("Incharge/Admin cant Agree");
                    } else if (utoken) handleLike();
                  }}
                ></i>
                <p className="text-xs ml-1">{data.likes?.length || 0}</p>
              </div>
              <div
                className={
                  (dark ? "text-gray-500" : "text-gray-700") +
                  " flex items-center rounded-xl lg:rounded-3xl gap-1 cursor-pointer hover:text-blue-500"
                }
                onClick={() => {
                  setcommvis(true);
                  findCommentData(id);
                }}
              >
                <i className="fi fi-ts-comment-dots text-sm lg:text-base"></i>
                <p className="text-xs lg:text-sm">
                  {data.comments?.length || 0}
                </p>
              </div>
              <div
                onClick={()=>{if (itoken || atoken) {
                      toast.error("Incharge/Admin cant Agree");
                    } else if(utoken) handleAgree()}}
                className={
                  (dark ? "text-gray-500" : "text-gray-700") +
                  " group flex items-center rounded-xl lg:rounded-3xl gap-1 cursor-pointer hover:text-orange-600 relative " +
                  (data.agreed && "text-orange-600")
                }
              >
                <i className="fi fi-tr-heart-partner-handshake text-sm lg:text-base"></i>
                <p className="text-xs lg:text-sm">{data.agrees?.length || 0}</p>
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

        {/* Incharge Resolve Section */}
        {itoken &&
          !verifyImage &&
          !data.resolvedByIncharge &&
          !data.resolvedByStudent &&
          profileData?.work?.toLowerCase() === data.problem?.toLowerCase() && (
            <div className="py-4 px-4 capitalize flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center items-center">
              <p
                className="px-3 py-2 text-white rounded-xl lg:rounded-3xl bg-gray-700 hover:bg-gray-600 w-full sm:w-fit text-center cursor-pointer transition-colors"
                onClick={() =>{ document.getElementById("verifyImage").click();}}
              >
                Resolve Issue
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <i className="fi fi-rr-arrow-small-right pt-1"></i>
                <p className="text-gray-500">Upload proof image to verify</p>
              </div>
              <input
                id="verifyImage"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    setimage(file)
                    const url = URL.createObjectURL(file);
                    setVerifyImage(url);
                  }
                }}
              />
            </div>
          )}

        {/* Verify Image Preview */}
        {verifyImage && (
          <div className="flex flex-col px-4 sm:px-5 py-4">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold capitalize">
              Resolved Proof
            </p>
            <div className="py-4 px-4 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <img
                src={verifyImage}
                className="h-fit max-h-[200px] sm:max-h-[250px] w-full sm:w-1/2 rounded-lg"
                alt="Verification proof"
              />
              <div className="w-full sm:w-1/2">
                <p
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-600 hover:bg-gray-700 font-bold text-white text-center cursor-pointer transition-colors"
                  onClick={resolvePost}
                >
                  Submit Verification
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  This image will be sent as proof of resolution
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Already Verified Proof */}
        {data.verifiedImage !== "null" && (
          <div className="flex flex-col px-4 sm:px-5 py-4">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold capitalize">
              Resolved Proof
            </p>
            <div className="py-4 px-4 capitalize flex flex-col sm:flex-row gap-3 sm:gap-4 items-start text-gray-500">
              <img
                onClick={() => {
                  seton(true);
                  setOnFile(data.verifiedImage);
                }}
                src={data.verifiedImage}
                className="h-fit max-h-[200px] sm:max-h-[250px] w-full sm:w-[40%] rounded-lg cursor-pointer"
                alt="Verified proof"
              />
              <div>
                <p className="font-medium">Verified by {data.verifiedBy}</p>
                <p className="text-sm mt-1 text-green-500">
                  ✓ This issue has been resolved
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Student Verified Section */}
        {data.resolvedByStudent && !data.resolvedByIncharge && (
          <div className="flex flex-col px-4 sm:px-5 py-4">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold capitalize">
              Resolution Status
            </p>
            <div className="py-4 px-4 flex gap-4 items-center text-gray-500">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <i className="fi fi-sr-check text-green-600 dark:text-green-300 text-xl"></i>
              </div>
              <div>
                <p className="font-medium">Verified by student</p>
                <p className="text-sm mt-1">
                  The student confirmed this issue is resolved
                </p>
              </div>
            </div>
          </div>
        )}
      </div>}

      {/* Image Modal */}
      {on && (
        <>
          <div className="fixed lg:absolute w-[95%] lg:w-[80%] bg-black z-50 h-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2.5 flex justify-center items-center rounded-lg lg:rounded-none">
            <img
              src={onfile}
              className="w-full h-fit max-h-[80vh] object-contain"
              alt="Enlarged view"
            />
            <div
              className="absolute top-4 lg:top-9 rounded-full px-1 flex pt-0.5 right-4 lg:right-6 cursor-pointer"
              onClick={() => {
                seton(false);
                setcommvis(false);
              }}
            >
              <i
                className={`${
                  dark ? "text-white" : "text-black"
                } fi fi-br-cross-small text-xl`}
              ></i>
            </div>
          </div>
          <div
            className="fixed lg:absolute w-screen lg:w-screen lg:left-[-57%] z-40 h-full top-0 bg-black opacity-70"
            onClick={() => {
              seton(false);
              setcommvis(false);
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default PostData;
