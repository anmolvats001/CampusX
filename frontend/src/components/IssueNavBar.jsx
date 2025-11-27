import { useContext } from "react"
import { AppContext } from "../Context/context"
import { NavLink } from "react-router-dom"

const IssueNavBar = () => {
    const {dark,val,setVal}=useContext(AppContext);
    
    return(
        <div className={`${dark ? "dark" : "light"} h-16 w-[45%] bg-amber-400 px-8 fixed border border-gray-800`}>
            <div className="flex issues-nav justify-between items-center  h-full ">
                <div onClick={()=>{setVal("home")}} className={(val=="home"&&"border-b-4 border-b-white bg-gray-700 px-3 rounded-lg py-1 ")+(!dark&& val=="home"&&" border-b-4 border-b-black text-white")}>Home</div>
                <div onClick={()=>{setVal("recent")}}className={(val=="recent"&&"border-b-4 border-b-white  bg-gray-700 px-3 rounded-lg py-1 ")+(!dark&&val=="recent" &&" border-b-4 border-b-black text-white")}>Recent Added</div>
                <div onClick={()=>{setVal("resolved")}}className={(val=="resolved"&&"border-b-4 border-b-white bg-gray-700 px-3 rounded-lg py-1 ")+(!dark&&val=="resolved" &&" border-b-4 border-b-black  text-white")}>Resolved</div>
                <div onClick={()=>{setVal("pending")}}className={(val=="pending"&&"border-b-4 border-b-white bg-gray-700 px-3 rounded-lg py-1 ")+(!dark &&val=="pending"&&" border-b-4 border-b-black  text-white")}>Pending</div>
            </div>
        </div>
    )
}

export default IssueNavBar
