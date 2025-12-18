import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/context";
import IssueContent from "../components/IssueContent";

const Search = () => {
  const { data, dark, setcommvis } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    setcommvis(false)
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  
  const find = (e) => {
    const value = e.target.value.toLowerCase();
    data && setFilteredData(data.filter(item => 
      { return item.creator.name.toLowerCase().includes(value) || item.data.toLowerCase().includes(value)}
    ));
  };
  useEffect(() => {
    setFilteredData(data)
  }, []);
  
  return (
    <div
      className={`${
        dark ? "dark" : "light"
      } h-screen w-full  lg:w-[45%]  border border-gray-800 relative`}
    >
      <div className="overflow-y-scroll w-full scroller h-full relative">
        <div className="px-14 pt-6 lg:hidden"><p className="text-2xl font-bold ">Search</p></div>
        {/* Search Input */}
        <div className="w-full px-3 sm:px-3.5 flex pt-4 lg:pt-5 gap-2 items-center">
          <input 
            placeholder="Search For Complaints..." 
            onChange={(e) => find(e)} 
            type="text" 
            className="w-full lg:w-[98%] px-3 sm:px-2.5 text-gray-400 h-10 sm:h-12 border-2 border-gray-700 font-semibold rounded-xl lg:rounded-2xl focus:outline-none text-sm sm:text-base"
          />
          <i className="fi fi-br-search px-2 sm:px-3 py-1.5 sm:py-2 bg-white text-black font-extrabold rounded-full text-sm sm:text-base"></i>
        </div>
        
        {/* Search Results */}
        <div className="h-fit flex items-center py-4 sm:py-5 lg:py-7 flex-col gap-8 sm:gap-10 lg:gap-14 px-2 sm:px-0">
          {filteredData.length > 0 ? (
            filteredData.map((e, i) => (
              <IssueContent key={i} e={e} i={i} search={true} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500">
              <i className="fi fi-rr-search text-4xl mb-4"></i>
              <p className="text-lg font-medium">No results found</p>
              <p className="text-sm mt-2 text-center px-4">
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;