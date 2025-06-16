import { useEffect, useState } from "react";
import { artikelColors } from "../util/colors";

const Sorter = ({ list, selected, onSort, onClicked }) => {
  const [selectedType, setSelectedType] = useState("all");
  useEffect(() => {
    setSelectedType(selected);
  }, [selected]);
  const clickHandler = (item) => {
    setSelectedType(item);
    onSort(item);
    onClicked();
  };
  return (
    <div className="flex flex-wrap justify-center items-center font-roboto">
      <div className="w-full flex flex-col flex-wrap justify-center items-center">
        {list.map((item) => (
          <button
            key={item}
            onClick={clickHandler.bind(null, item)}
            className={`block w-full px-4 py-2 text-base text-neutral-800 font-roboto text-neutral-700 hover:bg-neutral-50 hover:bg-neutral-300 hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-200 flex justify-center items-center cursor-pointer ${
              selectedType == item
                ? "bg-neutral-200 hover:bg-bground"
                : "bg-bground text-neutral-900"
            }`}
          >
            <span
              className={`font-medium ${artikelColors[item]?.["Nominativ"]}`}
            >
              {item}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sorter;
