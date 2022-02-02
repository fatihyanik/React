import React, { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("Murat Fatih");
  const [location, setLocation] = useState("Leipzig");

  return (
    <UserContext.Provider
      value={{
        name,
        location,
        setName,
        setLocation
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
