import React, { useState } from "react";
import { songsData } from "../assets/assets";
import SongItems from "./SongItems";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    if (query === "") {
      setFilteredResults([]);
      return;
    }

    const filtered = songsData.filter((song) =>
      song.name.toLowerCase().includes(query)
    );

    setFilteredResults(filtered);
  };

  return (
    <div className="h-screen bg-blue-900 text-white p-6">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="bg-yellow-500 px-4 py-2 rounded-lg mb-4"
      >
        ⬅ Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Search Songs</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for songs..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      {/* Search Results */}
      {filteredResults.length > 0 ? (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Results</h2>
          <div className="flex flex-wrap gap-4">
            {filteredResults.map((item) => (
              <SongItems key={item.id || item.name} name={item.name} desc={item.desc} image={item.image} />
            ))}
          </div>
        </div>
      ) : (
        searchTerm && <p className="mt-4 text-gray-300">No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
