import { useState } from "react";
import { NavLink } from "react-router-dom";
import { categories } from "../util/categories";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="flex items-center gap-2 px-4 py-2 text-4xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 hover:bg-neutral-300 rounded-3xl transition-colors duration-200"
      >
        Categories
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      <div
        className={`
    absolute left-1/2 md:left-1/2 transform -translate-x-1/2
     z-50 bg-neutral-100 rounded-lg shadow-lg overflow-y-auto
    transition-all duration-200 ease-in-out
    ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
    w-screen md:w-60
    max-h-[50vh] md:max-h-[100vh]
  `}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {categories.map((item, i) => (
          <NavLink
            key={i}
            to={`/categories/${item.slug}`}
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-base text-neutral-800 font-roboto hover:bg-neutral-50 border-b border-neutral-300 last:border-0"
          >
            <span className="flex justify-center items-center gap-x-1 md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                stroke="currentColor"
                className={`inline size-4 ${item.iconColor}`}
              >
                <path d={item.icon} />
              </svg>{" "}
              {item.name} <br className="md:hidden" />
              <em className="text-sm text-base text-neutral-500 whitespace-nowrap">
                ({item.translation})
              </em>
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
