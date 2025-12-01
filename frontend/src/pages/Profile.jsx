import React, { useContext, useState } from "react";
import { AppContext } from "../Context/context";
import PostCard from "../components/Postcard";


const Profile = () => {
  const { dark, userData } = useContext(AppContext);
  const [extend, setextend] = useState(false);
    const [openMenuId, setOpenMenuId] = useState(null);

  return (
    <div
      className={`${dark ? "dark" : "light"} h-screen w-full border border-gray-800 relative`}
    >
      <div className="overflow-y-scroll w-full scroller h-full relative">
        
        {/* Profile Header */}
        <div className="border-b border-gray-800 pb-4">
          <div className="flex gap-4 pt-7 px-7 items-center justify-between">

            <div className="flex gap-4 items-center">
              <img src={userData.image} className="w-28 h-28 rounded-xl object-cover" alt="" />
              <div>
                <p className="text-xl font-bold">{userData.name}</p>
                <p className={dark ? "text-gray-300" : "text-gray-800"}>
                  ({userData.branch})
                </p>
                <p className="text-xs pt-2.5 line-clamp-2 text-gray-500 capitalize">
                  {userData.address}
                </p>
              </div>
            </div>

            <div
              className={`bg-gray-700 rounded-2xl font-bold px-3 py-1 ${
                !dark && "text-white"
              } `}
            >
              Edit
            </div>
          </div>

          <div className={`px-8 pt-2 capitalize ${dark ? "text-gray-200" : "text-gray-700"}`}>
            {userData.college}
          </div>

          {/* BIO SECTION */}
          <div className="px-8 mt-4 relative">
            <p
              className={`${
                extend ? "line-clamp-none" : "line-clamp-3"
              } text-left text-gray-400`}
            >
              {userData.bio}
            </p>
            {!extend && (
              <p
                className="cursor-pointer absolute right-3 bottom-0 text-blue-500 w-fit px-1 mt-1 rounded"
                onClick={() => setextend(true)}
              >
                more...
              </p>
            )}
          </div>
        </div>

        {/* POSTS */}
        <div className="mt-6">
          {userData.posts ? (
            <div className="flex gap-3 flex-wrap justify-center pb-10">
              {userData.posts.map((e, i) => (
                <PostCard key={i} e={e} dark={dark} openMenuId={openMenuId}
          setOpenMenuId={setOpenMenuId}
          index={i}/>
              ))}
            </div>
          ) : (
            <div className="flex w-full h-80 justify-center items-center ">
              <p className="text-2xl text-gray-400">Post Something</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;
