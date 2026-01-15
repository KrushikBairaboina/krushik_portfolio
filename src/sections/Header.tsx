"use client";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

/* ------------------ Navigation Items ------------------ */
const navItems = [
  { id: "home", label: "Home" },
  { id: "journey", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "blogs", label: "Blogs" },
  { id: "contact", label: "Contacts" },
];

/* ------------------ Debounce Utility ------------------ */
/* Safe for browser + Next.js 15 */
const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
) => {
  let timeout: number;
  return (...args: Parameters<T>) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), wait);
  };
};

/* ------------------ Header Component ------------------ */
export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ------------------ Theme Init ------------------ */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = savedTheme ?? (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  /* ------------------ Theme Toggle ------------------ */
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  /* ------------------ Scroll Spy ------------------ */
  useEffect(() => {
    const handleScroll = debounce(() => {
      let closestSection: string | null = null;
      let minDistance = Infinity;

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = id;
        }
      });

      if (closestSection && closestSection !== activeSection) {
        setActiveSection(closestSection);
      }
    }, 1);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  /* ------------------ UI ------------------ */
  return (
    <div className="fixed w-full z-10">
      <nav className="flex items-center justify-between p-1 bg-white dark:bg-gray-800 shadow-md mx-auto">
        {/* Logo */}
        <a href="" className="p-2">
          <h1 className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 uppercase">
            Krushik Bairaboina
          </h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 items-center">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === id
                  ? "bg-emerald-500 text-white"
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
            {theme === "dark" ? (
              <FaSun className="size-4" />
            ) : (
              <FaMoon className="size-4" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(true)}
        >
          <FaBars className="size-6 text-gray-900 dark:text-white" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-800 z-20 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes className="size-6 text-gray-900 dark:text-white" />
          </button>

          <div className="flex flex-col gap-6">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-900 dark:text-white"
              >
                {label}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="mx-auto p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {theme === "dark" ? (
                <FaSun className="size-5" />
              ) : (
                <FaMoon className="size-5" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};