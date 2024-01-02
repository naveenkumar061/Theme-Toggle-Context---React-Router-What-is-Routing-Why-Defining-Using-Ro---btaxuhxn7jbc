"use client";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
  const { localTheme, setLocalTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "2px solid green",
      }}
      id="local-themed-box"
      className={`bg-${localTheme}`}
    >
      {/* Write code below this line */}
      <p id="local-themed-text-container" className={`txt-${localTheme}`}>
        Hiiii
      </p>
      <button
        id="local-theme-toggler"
        className={`btn btn-${localTheme}`}
        onClick={() =>
          setLocalTheme((prev) => (prev == "light" ? "dark" : "light"))
        }
      >
        Toggle local theme to {localTheme == "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export { LocalThemedBox };
