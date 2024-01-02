"use client";
import React, { useContext } from "react";
import { LocalThemedBox } from "./components/LocalThemedBox";
import { ThemeContext } from "./components/ThemeProvider";

const Main = () => {
  const { localTheme, setLocalTheme, globalTheme, setGlobalTheme } =
    useContext(ThemeContext);
  return (
    <div className={`container bg-${globalTheme}`} id="themed-page">
      <p id="themed-text-container" className={`txt-${globalTheme}`}>
        lorem ipsum dolor iterit n stuff
      </p>
      <button
        className={`btn btn-${globalTheme} txt-${globalTheme}`}
        id="themed-button"
      >
        Themed Button
      </button>
      <LocalThemedBox />
    </div>
  );
};

export { Main };
