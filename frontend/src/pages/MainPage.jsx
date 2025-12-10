import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/context";
import { useNavigate } from "react-router-dom";
import IssueNavBar from "../components/IssueNavBar";
import IssueContent from "../components/IssueContent";

const MainPage = () => {
  const { dark, setcommvis, timeAgo,setPostVis ,filter,val,data,on,onfile,seton,setOnFile,inchargelogin,setInchargelogin,adminlogin,setAdminLogin,studentLogin,setStudentLogin} = useContext(AppContext);
 
  const [filteredData,setFilteredData]=useState(null);
  useEffect(() => {
    setcommvis(false)
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  useEffect(()=>{

    setFilteredData(data);
  },[])

useEffect(() => {
  if (!filter || filter==="all") {
    setFilteredData(data);
  } 
  else {
    setFilteredData(data.filter(e => e.problem === filter));
  }
}, [filter, data]);

useEffect(() => {
  if (!val || val==="home") {
    setFilteredData(data);
  } 
  else if(val==="in-process"){
    setFilteredData(data.filter(e => {return e.resolvedByIncharge&&!e.resolvedByStudent}));
  }
  else if(val==="resolved"){
    setFilteredData(data.filter(e => e.resolvedByStudent));
  }
  else if(val==="pending"){
    setFilteredData(data.filter(e => {return !e.resolvedByIncharge&&!e.resolvedByStudent}));
  }
}, [val, data]);
  return (
    <div className={`${dark ? "dark" : "light"} h-screen w-full lg:w-[45%] border border-gray-800 relative`}>
      <IssueNavBar />
           {" "}
      <div className="overflow-y-scroll w-full scroller h-full relative">
        <div className="px-14 pt-6 lg:hidden"><p className="text-2xl font-bold ">CampusX</p></div>
               {" "}
        <div className=" h-fit flex items-center pt-6 pb-16 lg:pb-4  lg:pt-20 flex-col gap-14">
                   {" "}
          {filteredData?.map((e, i) => {
            return (
              <IssueContent e={e} i={i} search={false}/>
            );
          })}
                 {" "}
        </div>
        {studentLogin&&<div
          className={`${
            !dark ? "bg-black text-white" : "bg-white text-black"
          }" sticky bottom-36 lg:bottom-10  right-6 lg:right-10 w-16 h-16  float-right flex justify-center items-center rounded-full cursor-pointer`} onClick={()=>setPostVis(true)}
        >
          <p
            className={`${
              !dark ? "bg-black text-white" : "bg-white text-black"
            } text-4xl font-bold`}
          >
            +
          </p>
        </div>}
             {" "}
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
  );
};
export default MainPage;
