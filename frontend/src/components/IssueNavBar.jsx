import { useContext } from "react";
import { AppContext } from "../Context/context";

const IssueNavBar = () => {
    const { dark, val, setVal } = useContext(AppContext);
    
    const navItems = [
        { id: "home", label: "All Issues", icon: "fi-rr-house-blank", activeIcon: "fi-sr-house-blank" },
        { id: "in-process", label: "In Process", icon: "fi-rr-hourglass-end", activeIcon: "fi-sr-hourglass-end" },
        { id: "resolved", label: "Resolved", icon: "fi-rr-check-circle", activeIcon: "fi-sr-check-circle" },
        { id: "pending", label: "Pending", icon: "fi-rr-clock", activeIcon: "fi-sr-clock" },
    ];

    return (
        <>
            {/* Desktop IssueNavBar (top navigation) */}
            <div className={`${
                dark ? "bg-[#0B0F17]/80 border-slate-800 text-slate-100" : "bg-white/80 border-slate-200 text-slate-900"
            } hidden lg:block h-16 w-[45%] px-6 backdrop-blur-md fixed border-b z-40 transition-colors`}>
                <div className="flex justify-between items-center h-full gap-2">
                    {navItems.map((item) => {
                        const isActive = val === item.id;
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setVal(item.id)}
                                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                                    isActive
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]"
                                        : dark
                                        ? "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"
                                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                                }`}
                            >
                                <i className={`fi ${isActive ? item.activeIcon : item.icon} text-xs`}></i>
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
            
            {/* Mobile Bottom Navigation */}
            <div className={`lg:hidden fixed bottom-0 left-0 right-0 h-16 ${
                dark ? "bg-[#0B0F17]/90 border-slate-800 text-white" : "bg-white/90 border-slate-200 text-slate-900"
            } backdrop-blur-md border-t z-40`}>
                <div className="flex justify-around items-center h-full px-2">
                    {navItems.map((item) => {
                        const isActive = val === item.id;
                        return (
                            <div 
                                key={item.id}
                                onClick={() => setVal(item.id)}
                                className={`flex flex-col items-center justify-center h-full w-full py-1 transition-all duration-200 cursor-pointer ${
                                    isActive 
                                        ? "text-blue-500 font-semibold" 
                                        : dark ? "text-slate-400 hover:text-slate-200" : "text-slate-500 hover:text-slate-800"
                                }`}
                            >
                                <i className={`fi ${isActive ? item.activeIcon : item.icon} text-lg`}></i>
                                <span className="text-[10px] mt-0.5">{item.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default IssueNavBar;