import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useState } from "react";
import { AppContext } from "../Context/context";
import { toast } from 'react-toastify';
const PostData = () => {
    const {id}=useParams();
     const { dark, setcommvis, timeAgo,setPostVis,PostData,inchargelogin,setInchargelogin,adminlogin,setAdminLogin,studentLogin,setStudentLogin,inchargeWork,setInchargeWork,setPostdata} = useContext(AppContext);
      const [on, seton] = useState(false);
      const [onfile, setOnFile] = useState(null);
      const [data,setData]=useState({});
      const [verifyImage, setVerifyImage] = useState(null);
      const navigate=useNavigate();
      const verify=()=>{
        toast.success("verified");
        navigate("/issues/home")
      }
      useEffect(()=>{
        setData( PostData);
        return ()=>{
            setcommvis(false)
        }
      },[])
  return (
    <div
      className={`${
        dark ? "dark" : "light"
      } h-screen w-[45%] border border-gray-800 relative`}
    >
           {" "}
      <div className="overflow-y-scroll w-full scroller h-full relative">
               {" "}
        <div className=" h-fit flex items-center pt-7 flex-col gap-14">
                   {" "}
              <div
                className="w-full border-gray-800 border-1 rounded-2xl h-fit  px-3.5 py-2.5"
              >
                               {" "}
                <div className="flex flex-col gap-2">
                                   {" "}
                  <div className="flex justify-between">
                    <div className="flex gap-2 px-2.5 ">
                                         {" "}
                      <img
                        src={data.profile}
                        className="w-10 h-10 object-cover rounded-full "
                        alt={`Profile picture of ${data.name}`}
                      />
                                         {" "}
                      <div>
                                             {" "}
                        <p className="font-semibold  text-sm ">{data.name}</p>    
                                         {" "}
                        <p className="text-[10px] text-gray-400">
                          ({data.branch})
                        </p>
                                           {" "}
                      </div>
                                         {" "}
                      <p className="text-[12px] font-semibold text-gray-400 px-1 mt-1">
                                              {timeAgo(data.publishedOn)}         
                                 {" "}
                      </p>
                                       {" "}
                    </div>
                    <p
  className={`
    font-semibold text-xs mr-16
    ${data.resolvedByStudent ? "text-green-500" : ""}
    ${!data.resolvedByStudent && !data.resolvedByIncharge ? "text-red-500" : ""}
    ${!data.resolvedByStudent && data.resolvedByIncharge ? "text-gray-400" : ""}
  `}
>
  {data.resolvedByStudent && "Resolved"}
  {!data.resolvedByStudent && !data.resolvedByIncharge && "Pending"}
  {!data.resolvedByStudent && data.resolvedByIncharge && "In Process"}
</p>

                  </div>
                                   {" "}
                  <div className=" px-9  ">
                                       {" "}
                    <p
                      className={
                        dark
                          ? "text-[15px] text-gray-200"
                          : "text-[15px] text-gray-900"
                      }
                    >
                      {data.data}
                    </p>
                                     {" "}
                  </div>
                                   {" "}
                  <div className="max-h-[500px] w-full h-fit px-7">
                                       {" "}
                    <div className="w-full mt-3.5 overflow-hidden rounded-xl">
                                           {" "}
                      {data.files && data.files.length === 1 && (
                        <div className="max-h-[500px]">
                                                   {" "}
                          <img
                            src={data.files[0].src}
                            onClick={() => {
                              seton(true);
                              setOnFile(data.files[0].src);
                            }}
                            className="h-full w-full object-cover rounded-xl"
                            alt={`Attached image for ${data.title}`}
                          />
                                                 {" "}
                        </div>
                      )}
                                           {" "}
                      {data.files && data.files.length === 2 && (
                        <div className="grid grid-cols-2 gap-1 max-h-[500px]">
                                                   {" "}
                          {data.files.map((a, j) => (
                            <div key={j}>
                                                           {" "}
                              <img
                                src={a.src}
                                onClick={() => {
                                  seton(true);
                                  setOnFile(a.src);
                                }}
                                className="w-full max-h-full object-cover rounded-xl"
                                alt={`Attached image ${j + 1} for ${data.title}`}
                              />
                                                         {" "}
                            </div>
                          ))}
                                                 {" "}
                        </div>
                      )}
                                           {" "}
                      {data.files && data.files.length === 3 && (
                        <div className="grid grid-cols-3 gap-1 h-[500px]">
                                                   {" "}
                          <div className="col-span-2">
                                                       {" "}
                            <img
                              src={data.files[0].src}
                              onClick={() => {
                                seton(true);
                                setOnFile(data.files[0].src);
                              }}
                              className="w-full h-full object-cover rounded-xl"
                              alt={`Attached image 1 for ${data.title}`}
                            />
                                                     {" "}
                          </div>
                                                   {" "}
                          <div className="grid grid-rows-2 gap-1">
                                                       {" "}
                            <img
                              src={data.files[1].src}
                              onClick={() => {
                                seton(true);
                                setOnFile(data.files[1].src);
                              }}
                              className="w-full h-full object-cover rounded-xl"
                              alt={`Attached image 2 for ${data.title}`}
                            />
                                                       {" "}
                            <img
                              src={data.files[2].src}
                              onClick={() => {
                                seton(true);
                                setOnFile(data.files[2].src);
                              }}
                              className="w-full h-full object-cover rounded-xl"
                              alt={`Attached image 3 for ${data.title}`}
                            />
                                                     {" "}
                          </div>
                                                 {" "}
                        </div>
                      )}
                                           {" "}
                      {data.files && data.files.length === 4 && (
                        <div className="grid grid-cols-2 gap-1 max-h-[500px]">
                                                   {" "}
                          {data.files.map((a, k) => (
                            <div key={k} className="h-[250px]">
                                                           {" "}
                              <img
                                src={a.src}
                                onClick={() => {
                                  seton(true);
                                  setOnFile(a.src);
                                }}
                                className="w-full h-full object-cover rounded-xl"
                                alt={`Attached image ${k + 1} for ${data.title}`}
                              />
                                                         {" "}
                            </div>
                          ))}
                                                 {" "}
                        </div>
                      )}
                                         {" "}
                    </div>
                                     {" "}
                  </div>
                  <div className="flex px-11 mt-5 gap-8">
                    <div
                      className={
                        (dark ? "text-gray-500" : "text-gray-700") +
                        " flex cursor-pointer items-center rounded-3xl hover:text-red-800 " +
                        (data.liked && "text-red-800")
                      }
                    >
                      <i class="fi fi-ss-social-network"></i>{" "}
                      <p className="text-xs">{data.likes}</p>
                    </div>
                    <div
                      className={
                        (dark ? "text-gray-500" : "text-gray-700") +
                        " flex items-center rounded-3xl gap-1 cursor-pointer hover:text-blue-500"
                      }
                      onClick={() => setcommvis(true)}
                    >
                      <i className="fi fi-ts-comment-dots text-sm"></i>{" "}
                      <p className="text-sm">{data.comments}</p>
                    </div>
                    <div
                      className={
                        (dark ? "text-gray-500" : "text-gray-700") +
                        " group flex items-center rounded-3xl gap-1 cursor-pointer hover:text-orange-600 relative"
                      }
                    >
                      <i className="fi fi-tr-heart-partner-handshake"></i>
                      <p className="text-sm">{data.comments}</p>

                      <div className="absolute px-3 py-1 bottom-8 left-6 bg-white rounded shadow hidden group-hover:block">
                        agree
                      </div>
                    </div>

                    <div
                      className={
                        (dark ? "text-gray-500" : "text-gray-700") +
                        " flex items-center rounded-3xl cursor-pointer hover:text-green-700 gap-1"
                      }
                    >
                      <i className="fi fi-rr-share-square text-sm"></i>
                      <p className="text-xs">share</p>
                    </div>
                  </div>
                                 {" "}
                </div>
                             {" "}
              </div>
            
                 {" "}
        </div>
             {" "}
        {(inchargelogin && !verifyImage && (!data.resolvedByIncharge && !data.resolvedByStudent)&& inchargeWork.toLowerCase() ===data.problem )&& (
  <div className="py-4 px-4 capitalize flex gap-2 justify-center items-center">

    {/* CLICKABLE BUTTON */}
    <p
      className="px-3 py-1 text-white rounded-3xl bg-gray-700 w-fit cursor-pointer"
      onClick={() => document.getElementById("verifyImage").click()}
    >
      resolve
    </p>

    <div className='flex items-center text-gray-600'><i className="fi fi-rr-arrow-small-right pt-1"></i><p className="text-gray-600"> upload the pic to verify</p></div>

    <input
      id="verifyImage"
      type="file"
      accept="image/*"
      className="hidden"
      onChange={(e) => {
        if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          const url = URL.createObjectURL(file); 

          setVerifyImage(url); 
        }
      }}
    />
  </div>
)}
{
  verifyImage && <div className=' flex flex-col px-5 py-5'>
    <p className='text-2xl font-bold capitalize'>resolved proof...</p>
    <div className="py-4 px-4 capitalize flex gap-2 items-center">
    <img src={verifyImage} className='h-fit max-h-[250px]' alt="" />
  </div>
  <div className='px-7 py-4'><p className='w-fit px-3 py-1 rounded-2xl bg-gray-600 font-bold text-white' onClick={verify}>Submit</p></div>
  </div>
}
{
  PostData.verifiedImage && <div className=' flex flex-col px-5 py-5'>
    <p className='text-2xl font-bold capitalize'>resolved proof...</p>
    <div className="py-4 px-4 capitalize flex gap-4 items-end text-gray-500">
    <img onClick={()=>{
      seton(true);
       setOnFile(PostData.verifiedImage);
    }} src={PostData.verifiedImage} className='h-fit max-h-[250px] w-[40%]' alt="" />
    <p>verified by {PostData.verifiedBy}</p>
  </div>
  </div>
}

{
  PostData.resolvedByStudent && <div className=' flex flex-col px-5 py-5'>
    <p className='text-2xl font-bold capitalize'>resolved proof...</p>
    <div className="py-4 px-4 capitalize flex gap-4 items-end text-gray-500">
    <p>verified by {PostData.verifiedBy}</p>
  </div>
  </div>
}
      </div>
      {on && (
        <>
          <div className="absolute w-[80%] bg-black  z-100 h-full left-16 top-0 px-4 py-2.5 flex justify-center items-center">
            <img
              src={onfile}
              className="w-full h-fit max-h-[80%] object-cover"
              alt=""
            />
                    <div
              className="absolute top-9 rounded-full px-1 flex pt-0.5 right-6 text-white cursor-pointer"
              onClick={() => {
                seton(false);
                setcommvis(false);
              }}
            >
              <i class={(dark?"text-white":"text-black")+" fi fi-br-cross-small"}></i>
            </div>
          </div>
          <div
            className="absolute w-screen left-[-57%] z-99 h-full top-0 bg-black opacity-70  "
            onClick={() => {
              seton(false);
              setcommvis(false);
            }}
          ></div>
        </>
      )}
         {" "}
    </div>
    )
}

export default PostData
