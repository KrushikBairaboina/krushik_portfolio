"use client";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { id: "home", label: "Home" },
  { id: "journey", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "blogs", label: "Blogs" },
  { id: "contact", label: "Contacts" },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // ✅ Added types for func and wait
    const debounce = <T extends (...args: any[]) => void>(func: T, wait: number) => {
      let timeout: NodeJS.Timeout;
      return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    };

    const handleScroll = debounce(() => {
      const viewportHeight = window.innerHeight;
      let closestSection: string | null = null;
      let minDistance = Infinity;

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });

      if (closestSection && closestSection !== activeSection) {
        setActiveSection(closestSection);
      }
    }, 100); // ✅ Added wait time (100ms)

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="fixed  w-full z-10">
      <nav className="flex items-center justify-between p-1 bg-white dark:bg-gray-800 shadow-md   mx-auto">
        <div className="v-foot-logo ">
          <a href="#home" className="flex items-center ">
            <h1 className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 uppercase p-2 rounded-md">
              Krushik Bairaboina
            </h1>
          </a>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-item px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === id
                  ? "  hover:text-gray dark:text-white bg-emerald-500"
                  : "text-gray-700 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/20"
              }`}
            >
              {label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {theme === "dark" ? <FaSun className="size-4" /> : <FaMoon className="size-4" />}
          </button>
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="size-6 text-gray-900 dark:text-white" />
        </button>
      </nav>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-800 flex flex-col items-center justify-center z-20">
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes className="size-6 text-gray-900 dark:text-white" />
          </button>
          <div className="flex flex-col gap-4 mt-12">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-gray-900 dark:text-white text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white mt-4"
            >
              {theme === "dark" ? <FaSun className="size-5" /> : <FaMoon className="size-5" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};