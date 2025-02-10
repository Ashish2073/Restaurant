import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-gray-200 text-black rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 absolute left-3 top-2.5 text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.9 14.32a7 7 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM10 16a6 6 0 100-12 6 6 0 000 12z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

export default SearchBar;
