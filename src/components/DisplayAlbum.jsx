import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets';
import MusicPlayer from './MusicPlayer'; // Import the player

const DisplayAlbum = () => {
  const { id } = useParams();
  const [albumDatalocal, setAlbumDatalocal] = useState(null);
  const [currentSong, setCurrentSong] = useState(null); // State for playing song

  useEffect(() => {
    const album = albumsData.find((album) => album.id === Number(id));
    if (album) {
      setAlbumDatalocal(album);
    }
  }, [id]);

  // Handle song click
  const handleSongClick = (song) => {
    setCurrentSong(song); // Set song to play
  };

  if (!albumDatalocal) {
    return (
      <div className="bg-blue-800 min-h-screen">
        <Navbar />
        <div className="text-white text-center mt-10 text-2xl">⚠️ Album Not Found</div>
      </div>
    );
  }

  return (
    <div className="bg-blue-800 min-h-screen pb-10">
      <Navbar />

      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end px-6">
        {/* Album Image */}
        <img className="w-48 rounded object-cover" src={albumDatalocal.image || 'default-image-url.jpg'} alt={albumDatalocal.name} />

        {/* Album Details */}
        <div className="flex flex-col text-white">
          <p className="text-sm text-gray-300">Playlist</p>
          <h2 className="text-4xl font-bold mb-4 md:text-6xl">{albumDatalocal.name}</h2>
          <h4 className="text-gray-400">{albumDatalocal.desc}</h4>
          <p className="mt-2 flex items-center">
            <b>Vibzify</b> • 32,56,78,99 likes • <b>50 songs</b> • about 2hr 35 min
          </p>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[50px_2fr_2fr_2fr_1fr] items-center mt-10 px-4 text-[#a7a7a7] border-b pb-2">
        <p className="text-center">#</p>
        <p className="text-left">Title</p>
        <p className="text-left">Album</p>
        <p className="text-left">Date Added</p>
        <p className="text-center">Duration</p>
      </div>

      <hr />

      {/* Songs List */}
      {songsData.length === 0 ? (
        <div className="text-white text-center mt-10 text-2xl">⚠️ No Songs Available</div>
      ) : (
        songsData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[50px_2fr_2fr_2fr_1fr] items-center gap-3 p-2 text-white hover:bg-[#FFB400] cursor-pointer"
            onClick={() => handleSongClick(item)}
          >
            <p className="text-center">{index + 1}</p>
            <div className="flex items-center text-left">
              <img className="w-10 h-10 object-cover rounded mr-4" src={item.image || 'default-image-url.jpg'} alt={item.name} />
              <p>{item.name}</p>
            </div>
            <p className="text-left">{albumDatalocal.name}</p>
            <p className="text-left">{item.dateAdded || '5 days ago'}</p>
            <p className="text-center">{item.duration}</p>
          </div>
        ))
      )}

      {/* Music Player (Visible only when a song is selected) */}
      {currentSong && <MusicPlayer currentSong={currentSong} />}
    </div>
  );
};

export default DisplayAlbum;
