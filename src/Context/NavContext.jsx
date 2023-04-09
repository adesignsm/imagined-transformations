import React, { createContext, useState } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [activeLinkId, setActiveLinkId] = useState("");

  const providerValue = {
    activeLinkId,
    setActiveLinkId,
  };

   
  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  );
};
