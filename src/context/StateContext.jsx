import React, { createContext, useState } from "react";

const StateContext = createContext();
export default StateContext;

export const StateProvider = ({ children }) => {
  const [activeTag, setActiveTag] = useState("");

  const contextData = {
    activeTag,
    setActiveTag,
  };

  return (
    <StateContext.Provider value={contextData}>
      {children}
    </StateContext.Provider>
  );
};
