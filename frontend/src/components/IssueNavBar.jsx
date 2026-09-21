import { useContext } from "react"
import { AppContext } from "../Context/context"

const IssueNavBar = () => {
    const {dark, val, setVal} = useContext(AppContext);
    
    return (
        <>
            {/* Desktop IssueNavBar (top navigation) */}
            <div className={`${dark ? "text-white bg-black/60" : "text-black bg-white/80"} hidden lg:block h-16 w-[45%] px-8 backdrop-blur-xl fixed border-b border-r border-l border-gray-800 z-50`}>
                <div className="flex issues-nav justify-between items-center h-full cursor-pointer font-medium">
                    <div 
                        onClick={() => {setVal("home")}} 
                        className={`transition-all duration-200 ${val === "home" ? (dark ? "border-b-2 border-b-blue-500 text-blue-400 font-semibold px-2 py-1" : "border-b-2 border-b-blue-600 text-blue-600 font-semibold px-2 py-1") : "hover:opacity-80"}`}
                    >
                        Home
                    </div>
                    <div 
                        onClick={() => {setVal("in-process")}}
                        className={`transition-all capitalize duration-200 ${val === "in-process" ? (dark ? "border-b-2 border-b-blue-500 text-blue-400 font-semibold px-2 py-1" : "border-b-2 border-b-blue-600 text-blue-600 font-semibold px-2 py-1") : "hover:opacity-80"}`}
                    >
                        In Process
                    </div>
                    <div 
                        onClick={() => {setVal("resolved")}}
                        className={`transition-all duration-200 ${val === "resolved" ? (dark ? "border-b-2 border-b-blue-500 text-blue-400 font-semibold px-2 py-1" : "border-b-2 border-b-blue-600 text-blue-600 font-semibold px-2 py-1") : "hover:opacity-80"}`}
                    >
                        Resolved
                    </div>
                    <div 
                        onClick={() => {setVal("pending")}}
                        className={`transition-all duration-200 ${val === "pending" ? (dark ? "border-b-2 border-b-blue-500 text-blue-400 font-semibold px-2 py-1" : "border-b-2 border-b-blue-600 text-blue-600 font-semibold px-2 py-1") : "hover:opacity-80"}`}
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
                        className={`flex flex-col items-center justify-center h-full w-full cursor-pointer ${val === "home" ? (dark ? "bg-gray-800 text-blue-400" : "bg-gray-200 text-blue-600") : ""}`}
                    >
                        <i className={`fi ${val === "home" ? "fi-sr-house-blank" : "fi-rr-house-blank"} text-lg`}></i>
                        <span className="text-xs mt-1">Home</span>
                    </div>
                    
                    <div 
                        onClick={() => {setVal("in-process")}}
                        className={`flex flex-col items-center justify-center h-full w-full cursor-pointer ${val === "in-process" ? (dark ? "bg-gray-800 text-blue-400" : "bg-gray-200 text-blue-600") : ""}`}
                    >
                        <i className={`fi ${val === "in-process" ? "fi-sr-hourglass-end" : "fi-rr-hourglass-end"} text-lg`}></i>
                        <span className="text-xs mt-1">In Process</span>
                    </div>
                    
                    <div 
                        onClick={() => {setVal("resolved")}}
                        className={`flex flex-col items-center justify-center h-full w-full cursor-pointer ${val === "resolved" ? (dark ? "bg-gray-800 text-blue-400" : "bg-gray-200 text-blue-600") : ""}`}
                    >
                        <i className={`fi ${val === "resolved" ? "fi-sr-check-circle" : "fi-rr-check-circle"} text-lg`}></i>
                        <span className="text-xs mt-1">Resolved</span>
                    </div>
                    
                    <div 
                        onClick={() => {setVal("pending")}}
                        className={`flex flex-col items-center justify-center h-full w-full cursor-pointer ${val === "pending" ? (dark ? "bg-gray-800 text-blue-400" : "bg-gray-200 text-blue-600") : ""}`}
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