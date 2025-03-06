import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { albumsData, songsData, artistAlbums } from "/src/assets/assets";
import AlbumItems from "./AlbumItems";
import SongItems from "./SongItems";
import Artist from "./Artist";
import DisplayAlbum from "./DisplayAlbum";

const DisplayHome = () => {
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

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto flex-1 p-6 text-white">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg flex flex-col gap-y-6">
            <h1 className="text-2xl font-bold">Your Music Collection</h1>

            {/* Albums Section */}
            <div className="w-full">
              <h2 className="text-lg font-semibold mb-2">Your Top Playlist</h2>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {albumsData.map((item) => (
                  <Link to={`/album/${item.id}`} key={item.id}>
                    <AlbumItems id={item.id} name={item.name} desc={item.desc} image={item.image} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Songs Section */}
            <div className="w-full">
              <h2 className="text-lg font-semibold mb-2">Your Favorite Songs</h2>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {songsData.map((item) => (
                  <SongItems key={item.id} name={item.name} desc={item.desc} image={item.image} />
                ))}
              </div>
            </div>

            {/* Artist Albums Section */}
            <div className="w-full">
              <h2 className="text-lg font-semibold mb-2">Your Favorite Artists</h2>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {artistAlbums.map((item) => (
                  <Artist key={item.id} name={item.name} desc={item.desc} image={item.image} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default DisplayHome;
