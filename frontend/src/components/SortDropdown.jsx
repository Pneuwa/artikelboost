import { useState } from "react";
import Sorter from "./Sorter";
import { artikelColors } from "../util/colors";

const SortDropdown = ({ name, list, selected, sortHandler }) => {
  const [open, setOpen] = useState(false);
  const closeHandler = () => {
    setOpen(false);
  };
  return (
    <div className={`relative group ${name == "Case" && "w-[15rem]"}`}>
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="w-full flex items-center justify-end md:justify-center gap-2 px-4 py-2 text-neutral-800 hover:bg-neutral-200 rounded-lg transition-colors duration-200"
      >
        Sort by {name}:{" "}
        <span
          className={`font-semibold ${
            artikelColors[selected]?.["Nominativ"] || "text-neutral-800"
          }`}
        >
          {selected == "all" ? "—" : selected}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-5 h-5 transition-transform duration-200 ${
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
    absolute  transform
     z-50 bg-neutral-100 rounded-lg shadow-lg overflow-y-auto
    transition-all duration-200 ease-in-out
    ${
      open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
    } w-full
  `}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {" "}
        <Sorter
          list={list}
          selected={selected}
          onSort={sortHandler}
          onClicked={closeHandler}
        />
      </div>
    </div>
  );
};

export default SortDropdown;
