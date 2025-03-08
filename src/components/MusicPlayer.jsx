import React, { useEffect, useRef, useState } from 'react';

const MusicPlayer = ({ currentSong, songsData = [], setCurrentSong }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Ensure currentSong is valid before using findIndex
  const currentIndex = currentSong
    ? songsData.findIndex(song => song.id === currentSong.id)
    : -1;

  useEffect(() => {
    if (currentSong && currentSong.audio) {
      audioRef.current.src = currentSong.audio;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log("Autoplay blocked:", error));
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNext = () => {
    if (currentIndex !== -1 && currentIndex < songsData.length - 1) {
      setCurrentSong(songsData[currentIndex + 1]);
    }
  };

  const playPrevious = () => {
    if (currentIndex > 0) {
      setCurrentSong(songsData[currentIndex - 1]);
    }
  };

  if (!currentSong) {
    return null; // Don't render if no song is selected
  }

  return (
    <div className="bg-[#FFB400] text-white p-4 fixed bottom-0 w-full flex flex-col items-center">
      {/* Song Details */}
      <div className="flex items-center gap-4 mb-2">
        <img src={currentSong.image} alt={currentSong.name} className="w-12 h-12 rounded" />
        <div>
          <p className="text-lg font-bold">{currentSong.name}</p>
          <p className="text-sm">{currentSong.artist}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6">
        <button onClick={playPrevious} className="text-white text-2xl">⏮️</button>
        <button onClick={togglePlayPause} className="text-white text-2xl">
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <button onClick={playNext} className="text-white text-2xl">⏭️</button>
      </div>

      <audio ref={audioRef} />
    </div>
  );
};

export default MusicPlayer;
