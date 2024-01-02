"use client";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () => {
  const { globalTheme, setGlobalTheme, setLocalTheme } =
    useContext(ThemeContext);
  function handleClick() {
    if (globalTheme == "light") {
      setGlobalTheme("dark");
      setLocalTheme("dark");
    } else {
      setGlobalTheme("light");
      setLocalTheme("light");
    }
  }
  return (
    <>
      <button
        id="global-theme-toggler"
        className={`btn btn-${globalTheme} txt-${globalTheme}`}
        onClick={handleClick}
      >
        Switch to {globalTheme == "light" ? "dark" : "light"} theme
      </button>
    </>
  );
};
export { ThemeToggleButton };
