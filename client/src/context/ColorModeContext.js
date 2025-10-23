import React, { createContext, useContext, useState, useEffect } from "react";

const ColorModeContext = createContext();

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => localStorage.getItem("colorMode") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("colorMode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
