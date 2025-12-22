import { useContext, useEffect, useState } from "react";
import userflow from "../assets/user-flow.svg";
import { AppContext } from "../Context/context";
import Shrimmer from "../components/Shrimmer";

const Help = () => {
  const [loader,setShowLoader]=useState(true);
    const {setDark}=useContext(AppContext)
      useEffect(() => {
        setDark(false)
          const timer = setTimeout(() => {
            setShowLoader(false);
            setDark(true);
          }, 2000); 
      
          return () => {clearTimeout(timer);}
        }, []);
   
  return (
    <div className="w-full px-3 sm:px-6 md:px-12 lg:px-20 pt-20 flex justify-center bg-[#F9FAFB]">
      {loader?<Shrimmer/>:<div className="border border-gray-300 shadow-lg px-4 sm:px-6 md:px-8 py-6 md:py-10 rounded-2xl bg-transparent w-full max-w-7xl">
        
        <h1 className="text-center text-[#1E293B] text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide mb-6">
          UNDERSTAND THE WEBSITE
        </h1>
        <div className="relative">     
          <div className="overflow-x-auto scroller bg-white p-4 rounded-lg border">         
            <div className="flex justify-center min-w-full">
              <div className="relative">
                <img
                  src={userflow}
                  alt="User Flow Chart"
                  className="
                    min-w-[2000px]  
                    h-auto          
                    max-h-[80vh]    
                    object-scale-down
                    mx-auto         
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};
export default Help;