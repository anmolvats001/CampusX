import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/context';
import IssueContent from '../components/IssueContent';

const Resolve = () => {
  const { data, dark ,inchargeWork} = useContext(AppContext);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
  if (data) {
    setFilteredData(
      data.filter(item => 
        !item.resolvedByIncharge &&
        !item.resolvedByStudent &&
        inchargeWork.toLowerCase() === item.problem.toLowerCase()
      )
    );
  }
}, [data, inchargeWork]);
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
    
           <div className="w-full px-3.5 flex pt-5 items-center"><p className='text-2xl font-semibold capitalize px-3 pt-2  w-full '>Resolve</p></div>
           <div className=" h-fit flex items-center py-4  flex-col gap-14">
            {
            filteredData.map((e,i)=>{
                return <IssueContent e={e}i={i} search={true}/> 
            })
           }
           </div>
           
      </div>
    </div>
  );

}

export default Resolve
