import { useContext } from "react"
import { AppContext } from "../Context/context"
import { NavLink } from "react-router-dom"

const IssueNavBar = () => {
    const {dark,val,setVal}=useContext(AppContext);
    
    return(
        <div className={`${dark ? "text-white" : "text-black"} h-16 w-[45%] px-8 backdrop-blur-xl fixed border border-gray-800`}>
            <div className="flex issues-nav justify-between items-center  h-full ">
                <div onClick={()=>{setVal("home")}} className={"hover:text-lg transition-all duration-300 ease-in-out "+(val=="home"&&"border-b-4 border-b-white bg-gray-700 px-3 rounded-lg py-1 transition-all duration-300 ease-in-out ")+(!dark&& val=="home"&&" border-b-4 border-b-black text-white transition-all duration-300 ease-in-out")}>Home</div>
                <div onClick={()=>{setVal("recent")}}className={"hover:text-lg transition-all duration-300 ease-in-out "+(val=="recent"&&"border-b-4 border-b-white  bg-gray-700 px-3 rounded-lg py-1 transition-all duration-300 ease-in-out ")+(!dark&&val=="recent" &&" border-b-4 border-b-black text-white transition-all duration-300 ease-in-out")}>Recent Added</div>
                <div onClick={()=>{setVal("resolved")}}className={"hover:text-lg transition-all duration-300 ease-in-out "+(val=="resolved"&&"transition-all duration-300 ease-in-out border-b-4 border-b-white bg-gray-700 px-3 rounded-lg py-1 ")+(!dark&&val==" transition-all duration-300 ease-in-out resolved" &&" border-b-4 border-b-black  text-white")}>Resolved</div>
                <div onClick={()=>{setVal("pending")}}className={"hover:text-lg transition-all duration-300 ease-in-out "+(val=="pending"&&" transition-all duration-300 ease-in-out border-b-4 border-b-white bg-gray-700 px-3 rounded-lg py-1 ")+(!dark &&val=="pending"&&" border-b-4 border-b-black  text-white transition-all duration-300 ease-in-out")}>Pending</div>
            </div>
        </div>
    )
}

export default IssueNavBar
