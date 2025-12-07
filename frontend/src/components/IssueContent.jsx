import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/context';
import { useNavigate } from 'react-router-dom';

const IssueContent = ({e,i,search}) => {
    const {timeAgo,dark,setPostdata,setcommvis,on,onfile,seton,setOnFile,inchargelogin,setInchargelogin,adminlogin,setAdminLogin,studentLogin,setStudentLogin}=useContext(AppContext);
   
    const navigate=useNavigate()
  return (
    
              <div  onClick={()=>{search&&setPostdata(e);search &&navigate(`/issues/post-data/${i}`)}}
                key={i}
                className="w-full border-gray-800 border-1 rounded-2xl h-fit  px-3.5 py-2.5"
              >
                               {" "}
                <div className="flex flex-col gap-2">
                                   {" "}
                  <div className="flex justify-between">
                    <div className="flex gap-2 px-2.5 ">
                                         {" "}
                      <img
                        src={e.profile}
                        className="w-10 h-10 object-cover rounded-full "
                        alt={`Profile picture of ${e.name}`}
                      />
                                         {" "}
                      <div>
                                             {" "}
                        <p className="font-semibold  text-sm ">{e.name}</p>    
                                         {" "}
                        <p className="text-[10px] text-gray-400">
                          ({e.branch})
                        </p>
                                           {" "}
                      </div>
                                         {" "}
                      <p className="text-[12px] font-semibold text-gray-400 px-1 mt-1">
                                              {timeAgo(e.publishedOn)}         
                                 {" "}
                      </p>
                                       {" "}
                    </div>
                    <p
  className={`
    font-semibold text-xs mr-16
    ${e.resolvedByStudent ? "text-green-500" : ""}
    ${!e.resolvedByStudent && !e.resolvedByIncharge ? "text-red-500" : ""}
    ${!e.resolvedByStudent && e.resolvedByIncharge ? "text-gray-400" : ""}
  `}
>
  {e.resolvedByStudent && "Resolved"}
  {!e.resolvedByStudent && !e.resolvedByIncharge && "Pending"}
  {!e.resolvedByStudent && e.resolvedByIncharge && "In Process"}
</p>

                  </div>
                                   {" "}
                  <div className=" px-9  ">
                                       {" "}
                    <p
                      className={
                        (dark
                          ? "text-[15px] text-gray-200 "
                          : "text-[15px] text-gray-900 " )+(search ? "line-clamp-2":"")
                      }
                    >
                      {e.data}
                    </p>
                                     {" "}
                  </div>
                                   {" "}
                  <div className={"max-h-[500px] w-full h-fit px-7 " +(search ?" h-fit max-h-[250px] overflow-hidden":'')}>
                                       {" "}
                    <div className="w-full mt-3.5 overflow-hidden rounded-xl">
                                           {" "}
                      {e.files && e.files.length === 1 && (
                        <div className={"max-h-[500px]"+(search ?" h-fit max-h-[250px] overflow-hidden":'')}>
                                                   {" "}
                          <img
                            src={e.files[0].src}
                            onClick={() => {
                             !search&& !search&& seton(true);
                             !search&& setOnFile(e.files[0].src);
                            }}
                            className={"h-full w-full object-cover rounded-xl"+(search ?" h-fit max-h-[250px] overflow-hidden":'')}
                            alt={`Attached image for ${e.title}`}
                          />
                                                 {" "}
                        </div>
                      )}
                                           {" "}
                      {e.files && e.files.length === 2 && (
                        <div className={"grid grid-cols-2 gap-1 max-h-[500px]"+(search ?" h-fit max-h-[250px] overflow-hidden":'')}>
                                                   {" "}
                          {e.files.map((a, j) => (
                            <div key={j}>
                                                           {" "}
                              <img
                                src={a.src}
                                onClick={() => {
                                  !search&& seton(true);
                                  !search&& setOnFile(e.files[0].src);
                                }}
                                className={"w-full max-h-full object-cover rounded-xl"+(search ?" h-fit max-h-[250px] overflow-hidden":'')}
                                alt={`Attached image ${j + 1} for ${e.title}`}
                              />
                                                         {" "}
                            </div>
                          ))}
                                                 {" "}
                        </div>
                      )}
                                           {" "}
                      {e.files && e.files.length === 3 && (
                        <div className={"grid grid-cols-3 gap-1 h-[500px]"+(search ?" h-fit max-h-[250px] overflow-hidden":'')}>
                                                   {" "}
                          <div className="col-span-2">
                                                       {" "}
                            <img
                              src={e.files[0].src}
                              onClick={() => {
                                !search&& seton(true);
                                !search&&setOnFile(e.files[0].src);
                              }}
                              className={"w-full h-full object-cover rounded-xl"+(search ?" h-fit max-h-[250px] overflow-hidden":'')}
                              alt={`Attached image 1 for ${e.title}`}
                            />
                                                     {" "}
                          </div>
                                                   {" "}
                          <div className="grid grid-rows-2 gap-1">
                                                       {" "}
                            <img
                              src={e.files[1].src}
                              onClick={() => {
                                !search&& seton(true);
                                !search&&setOnFile(e.files[1].src);
                              }}
                              className={"w-full h-full object-cover rounded-xl"+(search ?" h-fit max-h-[250px] overflow-hidden":'')}
                              alt={`Attached image 2 for ${e.title}`}
                            />
                                                       {" "}
                            <img
                              src={e.files[2].src}
                              onClick={() => {
                                !search&& seton(true);
                                !search&& setOnFile(e.files[2].src);
                              }}
                              className={"w-full h-full object-cover rounded-xl"+(search ?" h-fit max-h-[250px] overflow-hidden":'')}
                              alt={`Attached image 3 for ${e.title}`}
                            />
                                                     {" "}
                          </div>
                                                 {" "}
                        </div>
                      )}
                                           {" "}
                      {e.files && e.files.length === 4 && (
                        <div className={"grid grid-cols-2 gap-1 max-h-[500px]"+(search ?" h-fit max-h-[250px] overflow-hidden":'')}>
                                                   {" "}
                          {e.files.map((a, k) => (
                            <div key={k} className="h-[250px]">
                                                           {" "}
                              <img
                                src={a.src}
                                onClick={() => {
                                  !search&& seton(true);
                                  !search&& setOnFile(e.files[0].src);
                                }}
                                className={"w-full h-full object-cover rounded-xl"+(search ?" h-fit max-h-[250px] overflow-hidden":'')}
                                alt={`Attached image ${k + 1} for ${e.title}`}
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
                        (e.liked && "text-red-800")
                      }
                    >
                      <i class="fi fi-ss-social-network"></i>{" "}
                      <p className="text-xs">{e.likes}</p>
                    </div>
                    <div
                      className={
                        (dark ? "text-gray-500" : "text-gray-700") +
                        " flex items-center rounded-3xl gap-1 cursor-pointer hover:text-blue-500"
                      }
                      onClick={() => setcommvis(true)}
                    >
                      <i className="fi fi-ts-comment-dots text-sm"></i>{" "}
                      <p className="text-sm">{e.comments}</p>
                    </div>
                    <div
                      className={
                        (dark ? "text-gray-500" : "text-gray-700") +
                        " group flex items-center rounded-3xl gap-1 cursor-pointer hover:text-orange-600 relative"
                      }
                    >
                      <i className="fi fi-tr-heart-partner-handshake"></i>
                      <p className="text-sm">{e.comments}</p>

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
  )
}

export default IssueContent
