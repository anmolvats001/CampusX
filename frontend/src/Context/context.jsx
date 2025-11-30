import { createContext, useState } from "react";

// 1️⃣ Create Context
export const AppContext = createContext();

// 2️⃣ Create Provider
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dark,setDark]=useState(true);
  const [val,setVal]=useState("home");
  const [commvisible,setcommvis]=useState(false);
const timeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now - past;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);

    if (diffSec < 60) return "Just now";
    if (diffMin < 60) return `${diffMin} min ago`;
    if (diffHr < 24) return `${diffHr} hr ago`;
    if (diffDay === 1) return "Yesterday";

    return past.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <AppContext.Provider value={{ user, setUser,dark,setDark,val,setVal,setcommvis,commvisible,timeAgo}}>
      {children}
    </AppContext.Provider>
  );
};
