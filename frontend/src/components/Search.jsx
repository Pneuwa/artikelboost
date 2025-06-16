const Search = ({ value, onSearch }) => {
  const searchHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const enteredTerm = e.target.value.toLowerCase();
    if (enteredTerm == "" || enteredTerm == " ") {
      onSearch("");
    } else {
      onSearch(enteredTerm);
    }
  };
  return (
    <div className="flex justify-center items-center my-4">
      <div className="relative w-96">
        <input
          type="text"
          id="search"
          placeholder="Search by word without article"
          value={value}
          className="w-full py-2 pl-10 pr-4 rounded-full border border-neutral-300 bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-rose-500 transition duration-300"
          onChange={searchHandler}
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Search;
