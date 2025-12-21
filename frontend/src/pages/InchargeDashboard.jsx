import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/context";
import { useNavigate } from "react-router-dom";

const InchargeDashboard = () => {
    const {dark,profileData,setProfileData, data, setcommvis, setPostdata,findProfileData} = useContext(AppContext);
    let [resolved, setresolved] = useState(0);
    let [inprocess, setinprocess] = useState(0);
    let [pending, setpending] = useState(0);
    const navigate = useNavigate();
    
    useEffect(() => {
        setcommvis(false);
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, []);
    
    useEffect(() => {
        let pendingdata = 0;
        let process = 0;
        let resolve = 0;

        profileData?.posts?.forEach((e) => {
            if (e.resolvedByStudent) {
                resolve++;
            } else if (e.resolvedByIncharge) {
                process++;
            }
        });
        
        data?.forEach((item) => {
            if (
                !item.resolvedByIncharge &&
                !item.resolvedByStudent &&
                profileData?.work?.toLowerCase() === item.problem.toLowerCase()
            ) {
                pendingdata++;
            }
        });

        setpending(pendingdata);
        setinprocess(process);
        setresolved(resolve);
    }, [profileData, data]);

    return (
        <div
            className={`${
                dark ? "dark" : "light"
            } h-screen w-full lg:w-[45%] border border-gray-800 relative`}
        >
            <div className="overflow-y-scroll w-full scroller h-full relative">
                {/* Header */}
                <div className="px-4 sm:px-6 lg:px-9 py-4 lg:py-5">
                    <p className="capitalize pl-12 pt-2 lg:pl-0 lg:pt-0 text-xl sm:text-2xl font-bold">DashBoard</p>
                </div>
                
                {/* Stats Cards */}
                <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-4 px-4 sm:px-8 lg:px-12 py-4 sm:py-6">
                    <div className="flex flex-col gap-2 sm:gap-3 items-center">
                        <p className={`${!dark && "hover:text-white"} px-8 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12 rounded-full hover:scale-105 border-2 sm:border-3 lg:border-4 border-gray-800 text-xl sm:text-2xl font-bold transition-all duration-300`}>
                            {resolved}
                        </p>
                        <p className="font-bold text-sm sm:text-base">Resolved</p>
                    </div>
                    
                    <div className="flex flex-col gap-2 sm:gap-3 items-center">
                        <p className={`${!dark && "hover:text-white"} px-8 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12 rounded-full hover:scale-105 border-2 sm:border-3 lg:border-4 border-gray-800 text-xl sm:text-2xl font-bold transition-all duration-300`}>
                            {inprocess}
                        </p>
                        <p className="font-bold text-sm sm:text-base">In Process</p>
                    </div>
                    
                    <div className="flex flex-col gap-2 sm:gap-3 items-center">
                        <p className={`${!dark && "hover:text-white"} px-8 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12 rounded-full hover:scale-105 border-2 sm:border-3 lg:border-4 border-gray-800 text-xl sm:text-2xl font-bold transition-all duration-300`}>
                            {pending}
                        </p>
                        <p className="font-bold text-sm sm:text-base">Pending</p>
                    </div>
                </div>
                
                {/* Posts Section */}
                <div className="px-4 sm:px-8 lg:px-12 pt-6 lg:pt-10 p-4 lg:p-6">
                    <p className="text-lg sm:text-xl font-bold">Posts Resolved By You</p>
                    <div className="flex flex-col gap-3 sm:gap-4 px-2 sm:px-3.5 py-3 sm:py-3.5">
                        {profileData?.posts?.map((e, index) => (
                            <div
                                key={index}
                                className={`${dark ? "bg-black" : "bg-white"} 
                                px-2 sm:px-1.5 py-2 sm:py-0.5 border border-gray-800 h-auto min-h-[140px] sm:h-[170px] rounded-xl sm:rounded-2xl relative flex flex-col sm:flex-row items-center gap-3 sm:gap-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors`}
                                onClick={() => {
                                    setPostdata(e);
                                    navigate(`/issues/post-data/${e._id}`);
                                }}
                            >
                                <img
                                    src={e.files[0].src}
                                    className="rounded-lg sm:rounded-xl object-cover w-full sm:w-1/3 h-32 sm:h-[70%]"
                                    alt="Issue attachment"
                                />
                                <p className="text-xs sm:text-sm text-gray-500 px-2 line-clamp-3 sm:line-clamp-5 flex-1">
                                    {e.data}
                                </p>
                            </div>
                        ))}
                        
                        {/* Empty state */}
                        {(!profileData?.posts || profileData.posts.length === 0) && (
                            <div className="flex flex-col items-center justify-center h-48 text-gray-500">
                                <i className="fi fi-rr-inbox text-4xl mb-4"></i>
                                <p className="text-lg font-medium">No resolved posts yet</p>
                                <p className="text-sm mt-2 text-center">
                                    Start resolving issues to see them here
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InchargeDashboard;