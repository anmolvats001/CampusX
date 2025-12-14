import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/context';
import IssueContent from '../components/IssueContent';

const Resolve = () => {
  const { data, dark, profileData,setProfileData, setcommvis } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    setcommvis(false)
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  
  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter(item => 
          !item.resolvedByIncharge &&
          !item.resolvedByStudent &&
          profileData.work.toLowerCase() === item.problem.toLowerCase()
        )
      );
    }
  }, [data, profileData]);
  
  return (
    <div
      className={`${
        dark ? "dark" : "light"
      } h-screen w-full lg:w-[45%] border border-gray-800 relative`}
    >
      <div className="overflow-y-scroll w-full scroller h-full relative">
        {/* Header */}
        <div className="px-14 pt-6 lg:hidden"><p className="text-2xl font-bold ">Issues Needed To Be Resolved</p></div>
        
        {/* Empty State */}
        {(!filteredData || filteredData.length === 0) ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500 px-4">
            <i className="fi fi-rr-check-circle text-4xl mb-4 text-green-500"></i>
            <p className="text-lg font-medium">No issues to resolve</p>
            <p className="text-sm mt-2 text-center">
              All {profileData?.work?.toLowerCase() || "assigned"} issues are currently resolved or in process
            </p>
            <div className="mt-4 flex gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
        ) : (
          /* Issues List */
          <div className="h-fit flex items-center py-3 sm:py-4 flex-col gap-8 sm:gap-10 lg:gap-14 px-2 sm:px-0">
            {filteredData.map((e, i) => (
              <IssueContent key={i} e={e} i={i} search={true} />
            ))}
          </div>
        )}
        

      </div>
    </div>
  );
}

export default Resolve;