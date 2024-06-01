"use client";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-center align-middle mt-1 bg-gray-100 text-gray-600 rounded">
        <button
          onClick={toggleDarkMode}
          className={`py-2 px-3 ${
            darkMode && "bg-gray-300 text-colors-quinary rounded"
          }`}
        >
          <MdDarkMode size={20} />
        </button>
        <button
          onClick={toggleDarkMode}
          className={`py-2 px-3 ${
            !darkMode && "bg-gray-300 text-colors-quinary rounded"
          }`}
        >
          <MdOutlineLightMode size={20} />
        </button>
      </div>
    </div>
  );
};

export default DarkModeToggle;
