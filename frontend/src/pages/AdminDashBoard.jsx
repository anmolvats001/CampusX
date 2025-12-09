import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/context';
import { useNavigate } from 'react-router-dom';

const AdminDashBoard = () => {
   const {dark, adminData, setPostdata, data, adminlogin, setcommvis} = useContext(AppContext);
    let [resolved, setresolved] = useState(0);
    let [inprocess, setinprocess] = useState(0);
    let [pending, setpending] = useState(0);
    let [posts, setposts] = useState([]);
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
        const filteredPosts = [];

        data?.forEach((e) => {
            if (e.problem === adminData?.work) {
                filteredPosts.push(e);
            }

            if (e.problem === adminData?.work && e.resolvedByStudent) {
                resolve++;
            } else if (e.problem === adminData?.work && e.resolvedByIncharge) {
                process++;
            }
        });
        
        data?.forEach((item) => {
            if (
                !item.resolvedByIncharge &&
                !item.resolvedByStudent &&
                adminData?.work?.toLowerCase() === item.problem?.toLowerCase()
            ) {
                pendingdata++;
            }
        });

        setposts(filteredPosts);
        setpending(pendingdata);
        setinprocess(process);
        setresolved(resolve);
    }, [adminData, data]);

    return (
        adminlogin && (
            <div className={`${dark ? "dark" : "light"} min-h-screen w-full lg:w-[45%] border border-gray-800 relative`}>
                {/* Mobile Header Spacing */}
                <div className="h-16 sm:h-0"></div>
                
                <div className="overflow-y-auto w-full scroller h-full relative pb-10">
                    <div className="px-4 sm:px-6 lg:px-9 py-5">
                        <p className="capitalize text-xl sm:text-2xl font-bold">DashBoard</p>
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-6 lg:px-12 py-6 gap-6 sm:gap-4">
                        <div className="flex flex-col gap-3 items-center">
                            <div className={`${!dark && "hover:text-white"} 
                                w-24 h-24 sm:w-32 sm:h-32 lg:px-14 lg:py-12 
                                flex items-center justify-center 
                                rounded-full hover:scale-105 border-4 border-gray-800 
                                text-xl sm:text-2xl font-bold transition-all duration-500`}>
                                {resolved}
                            </div>
                            <p className="font-bold text-sm sm:text-base">Resolved</p>
                        </div>
                        
                        <div className="flex flex-col gap-3 items-center">
                            <div className={`${!dark && "hover:text-white"} 
                                w-24 h-24 sm:w-32 sm:h-32 lg:px-14 lg:py-12 
                                flex items-center justify-center 
                                rounded-full hover:scale-105 border-4 border-gray-800 
                                text-xl sm:text-2xl font-bold transition-all duration-500`}>
                                {inprocess}
                            </div>
                            <p className="font-bold text-sm sm:text-base">In Process</p>
                        </div>
                        
                        <div className="flex flex-col gap-3 items-center">
                            <div className={`${!dark && "hover:text-white"} 
                                w-24 h-24 sm:w-32 sm:h-32 lg:px-14 lg:py-12 
                                flex items-center justify-center 
                                rounded-full hover:scale-105 border-4 border-gray-800 
                                text-xl sm:text-2xl font-bold transition-all duration-500`}>
                                {pending}
                            </div>
                            <p className="font-bold text-sm sm:text-base">Pending</p>
                        </div>
                    </div>
                    
                    {/* Posts Section */}
                    <div className="px-4 sm:px-6 lg:px-12 pt-6 lg:pt-10 pb-6">
                        <p className="text-lg sm:text-xl font-bold">
                            Posts Resolved / Need to Be Resolved By Your Subordinates
                        </p>
                        
                        <div className="flex flex-col gap-4 px-2 sm:px-3.5 py-3.5 mt-4">
                            {posts.length > 0 ? (
                                posts.map((e, index) => (
                                    <div
                                        key={index}
                                        className={`${dark ? "bg-black" : "bg-white"} 
                                        px-3 py-3 sm:px-1.5 sm:py-0.5 border border-gray-800 
                                        min-h-[140px] sm:h-[170px] rounded-xl sm:rounded-2xl 
                                        relative flex flex-col sm:flex-row items-center gap-3 sm:gap-5 
                                        hover:opacity-90 transition-opacity cursor-pointer`}
                                        onClick={() => {
                                            setPostdata(e);
                                            navigate(`/issues/post-data/${index}`);
                                        }}
                                    >
                                        <div className="w-full sm:w-1/3 h-32 sm:h-full">
                                            <img
                                                src={e.files?.[0]?.src}
                                                className="rounded-xl object-cover w-full h-full"
                                                alt="Post thumbnail"
                                            />
                                        </div>
                                        <div className="w-full sm:w-2/3">
                                            <p className="text-sm text-gray-500 pt-1.5 px-2 line-clamp-3 sm:line-clamp-5">
                                                {e.data || "No description available"}
                                            </p>
                                            {e.resolvedByStudent && (
                                                <span className="inline-block mt-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                                                    Resolved
                                                </span>
                                            )}
                                            {e.resolvedByIncharge && !e.resolvedByStudent && (
                                                <span className="inline-block mt-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                                                    In Process
                                                </span>
                                            )}
                                            {!e.resolvedByIncharge && !e.resolvedByStudent && (
                                                <span className="inline-block mt-2 px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                                                    Pending
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex justify-center items-center py-10">
                                    <p className="text-gray-500 text-center">
                                        No posts found for your department.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default AdminDashBoard;