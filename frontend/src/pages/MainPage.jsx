import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/context";
import IssueNavBar from "../components/IssueNavBar";
import IssueContent from "../components/IssueContent";
import Shrimmer from "../components/Shrimmer";
import CommentShrimmer from "../components/CommentShrimmer";

const MainPage = () => {
  const {
    dark,
    setcommvis,
    setPostVis,
    filter,
    val,
    data,
    on,
    onfile,
    seton,
    studentLogin,setNotificationOn,utoken
  } = useContext(AppContext);

  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setcommvis(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (!data) return;

    setLoading(true);
    let result = data;

    if (filter && filter !== "all") {
      result = result.filter(e => e.problem === filter);
    }

    if (val && val !== "home") {
      if (val === "in-process") {
        result = result.filter(
          e => e.resolvedByIncharge && !e.resolvedByStudent
        );
      } else if (val === "resolved") {
        result = result.filter(e => e.resolvedByStudent);
      } else if (val === "pending") {
        result = result.filter(
          e => !e.resolvedByIncharge && !e.resolvedByStudent
        );
      }
    }

    setFilteredData(result);
    setLoading(false);
  }, [data, filter, val]);

  return (
    <div className={`${dark ? "dark" : "light"} h-screen w-full lg:w-[45%] border border-gray-800 relative`}>
      <IssueNavBar />

      <div className="overflow-y-scroll w-full scroller h-full relative">
        <div className="px-14 pt-6 lg:hidden">
          <p className="text-2xl font-bold">CampusX</p>
        </div>

        <div className="h-fit flex items-center pt-6 pb-16 lg:pb-4 lg:pt-20 flex-col gap-14 relative">
          {(loading ||!data||!filteredData) ? (
            <CommentShrimmer/>
          ) : filteredData.length === 0 ? (
            <p className="text-gray-500 text-center">No issues found</p>
          ) : (
            filteredData.map((e, i) => (
              <IssueContent key={e._id || i} e={e} i={i} search={false} />
            ))
          )}
        </div>
        {dark?utoken&&<i onClick={()=>setNotificationOn(true)} class="fi fi-ss-bell text-white bg-black rounded-full px-3 py-2 pt-3 text-center   text-xl fixed lg:hidden top-4 right-3"></i>:utoken&&<i onClick={()=>setNotificationOn(true)} class="fi fi-ss-bell rounded-full px-3 py-2 pt-3 lg:hidden text-xl fixed top-4 right-3 bg-white"></i>}
        
        {studentLogin && (
          <div
            className={`${!dark ? "bg-black text-white" : "bg-white text-black"} sticky bottom-36 lg:bottom-10 right-6 lg:right-10 w-16 h-16 float-right flex justify-center items-center rounded-full cursor-pointer`}
            onClick={() => setPostVis(true)}
          >
            <p className="text-4xl font-bold">+</p>
          </div>
        )}
      </div>

      {on && (
        <>
          <div className="absolute w-[80%] bg-black z-[100] h-full left-16 top-0 px-4 py-2.5 flex justify-center items-center">
            <img
              src={onfile}
              className="w-full h-fit max-h-[80%] object-cover"
              alt=""
            />
            <div
              className="absolute top-9 rounded-full px-1 flex pt-0.5 right-6 cursor-pointer"
              onClick={() => {
                seton(false);
                setcommvis(false);
              }}
            >
              <i className={(dark ? "text-white" : "text-black") + " fi fi-br-cross-small"}></i>
            </div>
          </div>

          <div
            className="absolute w-screen left-[-57%] z-[99] h-full top-0 bg-black opacity-70"
            onClick={() => {
              seton(false);
              setcommvis(false);
            }}
          />
        </>
      )}
    </div>
  );
};

export default MainPage;
