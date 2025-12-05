import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/context";
import IssueContent from "../components/IssueContent";

const Search = () => {
  const { data, dark } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState([]);
 const find = (e) => {
  const value = e.target.value.toLowerCase();
 data && setFilteredData(data.filter(item => 
   { return item.name.toLowerCase().includes(value)||item.data.toLowerCase().includes(value)}
  ));
};

  useEffect(() => {setFilteredData(data)}, []);
  return (
    <div
      className={`${
        dark ? "dark" : "light"
      } h-screen w-[45%] border border-gray-800 relative`}
    >
           {" "}
      <div className="overflow-y-scroll w-full scroller h-full relative">
               {" "}
         {/* <p className="flex captilaize pt-6 text-3xl font-bold pl-5 capitalize">Search ...</p> */}
    
           <div className="w-full px-3.5 flex pt-5 gap-2 items-center"><input placeholder="Search For Complaints..." onChange={(e)=>find(e)} type="text" className="w-[98%] px-2.5 text-gray-400 h-12 border-2 border-gray-700 font-semibold rounded-2xl focus:outline-none" /><i class="fi fi-br-search  px-3 py-2 bg-white text-black font-extrabold rounded-full"></i></div>
           <div className=" h-fit flex items-center py-7  flex-col gap-14">
            {
            filteredData.map((e,i)=>{
                return <IssueContent e={e}i={i} search={true}/> 
            })
           }
           </div>
           
      </div>
    </div>
  );
};

export default Search;
