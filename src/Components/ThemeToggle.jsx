import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

function themeToggle() {
  const [isDarkMode, setIsDarkmode] = useState(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkmode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkmode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkmode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkmode(true);
    }
  }

  return (
    <button
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50  p-2 rounded-full transition-colors duration-300 ",
        "focus:outline-hidden  "
      )}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <Sun className=" h-6 w-6 text-yellow-300" />
      ) : (
        <Moon h-6 w-6 text-blue-900 />
      )}
    </button>
  );
}

export default themeToggle;
