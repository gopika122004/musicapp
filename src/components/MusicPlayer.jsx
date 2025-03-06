import React, { useState, useRef, useEffect } from "react";
import { songsData } from "../assets/assets"; // ✅ Ensure correct path
import { assets } from "../assets/assets"; // ✅ Import Icons

const MusicPlayer = () => {
  const [allSongs] = useState(songsData); // ✅ Store all songs
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // ✅ Track index
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(songsData[currentSongIndex].file));

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = allSongs[currentSongIndex].file; // ✅ Update source on song change

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [currentSongIndex, isPlaying, allSongs]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % allSongs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + allSongs.length) % allSongs.length);
    setIsPlaying(true);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-900 text-white px-6 py-3 flex items-center justify-between shadow-lg rounded-lg z-50">
      {/* Left Side - Album & Song Info */}
      <div className="flex items-center gap-4">
        <img src={allSongs[currentSongIndex].image} alt={allSongs[currentSongIndex].name} className="w-12 h-12 rounded-lg" />
        <div>
          <h3 className="text-sm font-semibold">{allSongs[currentSongIndex].name}</h3>
          <p className="text-xs text-gray-300">{allSongs[currentSongIndex].artist}</p>
        </div>
      </div>

      {/* Center - Controls */}
      <div className="flex items-center gap-6">
        <button onClick={prevSong} className="hover:bg-[#FFB400] p-2 rounded-full transition duration-200">
          <img src={assets.prev_icon} alt="Previous" className="w-6" />
        </button>

        <button onClick={togglePlay} className="bg-transparent rounded-full hover:bg-[#FFB400] p-2 transition duration-200">
          <img src={isPlaying ? assets.pause_icon : assets.play_icon} alt="Play/Pause" className="w-6" />
        </button>

        <button onClick={nextSong} className="hover:bg-[#FFB400] p-2 rounded-full transition duration-200">
          <img src={assets.next_icon} alt="Next" className="w-6" />
        </button>
      </div>

      {/* Right Side - Volume & Queue */}
      <div className="flex items-center gap-4">
        <button className="hover:bg-[#FFB400] p-2 rounded-full transition duration-200">
          <img src={assets.volume_icon} alt="Volume" className="w-6 cursor-pointer" />
        </button>
        <button className="hover:bg-[#FFB400] p-2 rounded-full transition duration-200">
          <img src={assets.queue_icon} alt="Queue" className="w-6 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
