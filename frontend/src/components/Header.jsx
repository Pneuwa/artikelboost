import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import Dropdown from "./Dropdown";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isIndex = pathname == "/";
  const menuItems = ["tips", "cases", "collection"];

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    if (isIndex) {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleShadow);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleShadow);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header
      id="header"
      className={`fixed inset-x-0 top-0 left-0 z-50 transition-all duration-300 ease-in-out bg-bground py-4
                  h-auto ${shadow ? "shadow-lg" : ""}`}
    >
      <div
        className={`container mx-auto h-full flex flex-col items-center transition-all duration-300 ease-in-out ${
          isIndex
            ? `
                    ${
                      isScrolled
                        ? "md:flex-row justify-center w-full"
                        : "flex-col justify-center"
                    }`
            : `flex-col md:flex-row justify-start`
        }`}
      >
        <div
          className={`flex md:flex-col items-center justify-between md:justify-start w-full transition-all duration-300 ease-in-out`}
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              className="w-[15rem] md:w-[18rem] h-auto max-w-full object-contain"
            />
          </Link>
          <button
            className="md:hidden p-2 text-neutral-800 focus:outline-none z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen
                    ? "M6 18 18 6M6 6l12 12"
                    : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                }
              />
            </svg>
          </button>
        </div>
        <nav
          id="navbar"
          className={`flex-grow w-full flex items-center justify-center transition-all duration-300 ease-in-out py-2 ${
            menuOpen
              ? "max-h-96 opacity-100 mt-4 bg-bground"
              : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"
          } ${isScrolled ? "pt-0" : "pt-4"}`}
        >
          <div className="flex flex-col md:flex-row justify-center items-center flex-wrap font-nanum">
            {menuItems.map((path) => (
              <NavLink
                key={path}
                to={`/${path}`}
                className={({ isActive }) =>
                  `px-4 py-2 text-4xl font-semibold hover:bg-neutral-300 rounded-3xl transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-neutral-800 text-neutral-50 hover:bg-neutral-700"
                      : "text-neutral-800"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </NavLink>
            ))}
            <Dropdown />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
