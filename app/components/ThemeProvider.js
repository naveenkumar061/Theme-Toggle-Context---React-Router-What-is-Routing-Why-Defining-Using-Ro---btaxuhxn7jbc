"use client";
import React, { useState } from "react";

const ThemeContext = React.createContext();
const ThemeProvider = (props) => {
  const [globalTheme, setGlobalTheme] = useState("light");
  const [localTheme, setLocalTheme] = useState("light");
  return (
    <React.Fragment>
      <ThemeContext.Provider
        value={{
          globalTheme,
          setGlobalTheme,
          localTheme,
          setLocalTheme,
        }}
      >
        {props.children}
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export { ThemeProvider, ThemeContext };
