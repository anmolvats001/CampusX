import { createContext, useState } from "react";

// 1️⃣ Create Context
export const AppContext = createContext();

// 2️⃣ Create Provider
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dark,setDark]=useState(true);
  const [val,setVal]=useState("home");
  
  return (
    <AppContext.Provider value={{ user, setUser,dark,setDark,val,setVal}}>
      {children}
    </AppContext.Provider>
  );
};
