import { useContext } from "react"
import { AppContext } from "../Context/context"
import { NavLink } from "react-router-dom"

const IssueNavBar = () => {
    const {dark, val, setVal} = useContext(AppContext);
    
    return (
        <>
            {/* Desktop IssueNavBar (top navigation) */}
            <div className={`${dark ? "text-white" : "text-black"} hidden lg:block h-16 w-[45%] px-8 backdrop-blur-xl fixed border border-gray-800 z-99`}>
                <div className="flex issues-nav justify-between items-center h-full cursor-pointer">
                    <div 
                        onClick={() => {setVal("home")}} 
                        className={`hover:text-lg transition-all duration-300 ease-in-out ${val === "home" ? "border-b-4 border-b-white bg-gray-700 px-3 rounded-lg py-1" : ""} ${!dark && val === "home" ? "border-b-4 border-b-black text-white" : ""}`}
                    >
                        Home
                    </div>
                    <div 
                        onClick={() => {setVal("in-process")}}
                        className={`hover:text-lg transition-all capitalize duration-300 ease-in-out ${val === "in-process" ? "border-b-4 border-b-white bg-gray-700 px-3 rounded-lg py-1" : ""} ${!dark && val === "in-process" ? "border-b-4 border-b-black text-white" : ""}`}
                    >
                        in process
                    </div>
                    <div 
                        onClick={() => {setVal("resolved")}}
                        className={`hover:text-lg transition-all duration-300 ease-in-out ${val === "resolved" ? "border-b-4 border-b-white bg-gray-700 px-3 rounded-lg py-1" : ""} ${!dark && val === "resolved" ? "border-b-4 border-b-black text-white" : ""}`}
                    >
                        Resolved
                    </div>
                    <div 
                        onClick={() => {setVal("pending")}}
                        className={`hover:text-lg transition-all duration-300 ease-in-out ${val === "pending" ? "border-b-4 border-b-white bg-gray-700 px-3 rounded-lg py-1" : ""} ${!dark && val === "pending" ? "border-b-4 border-b-black text-white" : ""}`}
                    >
                        Pending
                    </div>
                </div>
            </div>
            
            {/* Mobile Bottom Navigation (replaces Sider) */}
            <div className={`lg:hidden fixed bottom-0 left-0 right-0 h-16 ${dark ? "bg-black text-white" : "bg-white text-black"} border-t border-gray-300 dark:border-gray-800 z-40`}>
                <div className="flex justify-around items-center h-full px-2">
                    <div 
                        onClick={() => {setVal("home")}}
                        className={`flex flex-col items-center justify-center h-full w-full ${val === "home" ? (dark ? "bg-gray-800" : "bg-gray-200") : ""}`}
                    >
                        <i className={`fi ${val === "home" ? "fi-sr-house-blank" : "fi-rr-house-blank"} text-lg`}></i>
                        <span className="text-xs mt-1">Home</span>
                    </div>
                    
                    <div 
                        onClick={() => {setVal("in-process")}}
                        className={`flex flex-col items-center justify-center h-full w-full ${val === "in-process" ? (dark ? "bg-gray-800" : "bg-gray-200") : ""}`}
                    >
                        <i className={`fi ${val === "in-process" ? "fi-sr-hourglass-end" : "fi-rr-hourglass-end"} text-lg`}></i>
                        <span className="text-xs mt-1">In Process</span>
                    </div>
                    
                    <div 
                        onClick={() => {setVal("resolved")}}
                        className={`flex flex-col items-center justify-center h-full w-full ${val === "resolved" ? (dark ? "bg-gray-800" : "bg-gray-200") : ""}`}
                    >
                        <i className={`fi ${val === "resolved" ? "fi-sr-check-circle" : "fi-rr-check-circle"} text-lg`}></i>
                        <span className="text-xs mt-1">Resolved</span>
                    </div>
                    
                    <div 
                        onClick={() => {setVal("pending")}}
                        className={`flex flex-col items-center justify-center h-full w-full ${val === "pending" ? (dark ? "bg-gray-800" : "bg-gray-200") : ""}`}
                    >
                        <i className={`fi ${val === "pending" ? "fi-sr-clock" : "fi-rr-clock"} text-lg`}></i>
                        <span className="text-xs mt-1">Pending</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IssueNavBar