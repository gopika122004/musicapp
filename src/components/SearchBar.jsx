import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <input
      type="text"
      placeholder="Search for songs..."
      onFocus={() => navigate("/search")}
      className="px-4 py-2 text-black rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
      readOnly
    />
  );
};

export default SearchBar;
