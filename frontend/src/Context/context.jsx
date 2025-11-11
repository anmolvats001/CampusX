import { createContext, useState } from "react";

// 1️⃣ Create Context
export const AppContext = createContext();

// 2️⃣ Create Provider
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser,}}>
      {children}
    </AppContext.Provider>
  );
};
