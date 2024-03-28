"use client";

import { useEffect, useState } from "react";

export default function ThemeSelector() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(false);
    }
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "ligth");
    }
  }, [darkMode]);
  return (
    <div
      className="text-xs flex justify-center items-center p-2 mt-4 mb-4 border-4 border-rosaM dark:border-amareloM w-2/5 rounded-2xl   md:text-xl md:w-2/5 lg:w-1/5"
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      Mude seu tema
    </div>
  );
}
