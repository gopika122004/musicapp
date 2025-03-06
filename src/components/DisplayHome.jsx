import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MusicPlayer from "./MusicPlayer";
import { albumsData, songsData, artistAlbums } from "/src/assets/assets";
import AlbumItems from "./AlbumItems";
import SongItems from "./SongItems";
import Artist from "./Artist";
import SearchBar from "./SearchBar";

const DisplayHome = () => {
  const [filteredSongs, setFilteredResults] = useState([]);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar (25% Width, Fixed) */}
      <div className="w-[25%] h-screen bg-blue-900 fixed top-0 left-0">
        <Sidebar />
      </div>

      {/* Main Content (Takes 75% Width) */}
      <div className="w-[75%] ml-[25%] h-screen bg-blue-900 flex flex-col">
        {/* Navbar (Fixed on Top) */}
        <Navbar />

        {/* Category Tabs & SearchBar (Fixed Below Navbar) */}
        <div className="bg-blue-900 px-6 py-3 sticky top-[60px] z-10 flex items-center gap-3 text-sm">
          <p className="bg-[#FFB400] text-white px-4 py-2 rounded-lg cursor-pointer">All</p>
          <p className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer">Music</p>
          <p className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer">Podcasts</p>
          
          {/* Search Bar (Placed Next to Tabs) */}
          <div className="ml-auto">
            <SearchBar setFilteredResults={setFilteredResults} />
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto flex-1 p-6 text-white pb-[80px]">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg flex flex-col gap-y-6">
            <h1 className="text-2xl font-bold">Your Music Collection</h1>

            {/* 🎵 Albums Section */}
            <div className="w-full">
              <h2 className="text-lg font-semibold mb-2">Your Top Playlist</h2>
              <div className="w-full overflow-x-auto scrollbar-hide">
                <div className="flex gap-4">
                  {albumsData.map((item) => (
                    <Link to={`/album/${item.id}`} key={item.id}>
                      <AlbumItems id={item.id} name={item.name} desc={item.desc} image={item.image} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 🎶 Songs Section */}
            <div className="w-full">
              <h2 className="text-lg font-semibold mb-2">Your Favorite Songs</h2>
              <div className="w-full overflow-x-auto scrollbar-hide">
                <div className="flex gap-4">
                  {songsData.map((item) => (
                    <SongItems key={item.id || item.name} name={item.name} desc={item.desc} image={item.image} />
                  ))}
                </div>
              </div>
            </div>

            {/* 🔍 Search Results Section */}
            {filteredSongs.length > 0 && (
              <div className="w-full bg-gray-800 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-white mb-4">Search Results</h2>
                <div className="w-full mt-4 flex gap-4 overflow-x-auto scrollbar-hide">
                  {filteredSongs.map((item) => (
                    <SongItems key={item.id || item.name} name={item.name} desc={item.desc} image={item.image} />
                  ))}
                </div>
              </div>
            )}

            {/* 🎤 Artists Section */}
            <div className="w-full">
              <h2 className="text-lg font-semibold mb-2">Your Favorite Artists</h2>
              <div className="w-full overflow-x-auto scrollbar-hide">
                <div className="flex gap-4">
                  {artistAlbums.map((item) => (
                    <Artist key={item.id || item.name} name={item.name} desc={item.desc} image={item.image} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🎵 Music Player (Fixed at Bottom, Full Width) */}
      <MusicPlayer />
    </div>
  );
};

export default DisplayHome;
