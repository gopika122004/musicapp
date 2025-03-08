import React, { useState, useRef, useEffect } from "react";
import { assets, songsData } from "../assets/assets";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = songsData[currentSongIndex].file;
    audio.load();

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const setAudioDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    // If isPlaying is true, start playing the new song immediately
    if (isPlaying) {
      audio.play();
    }

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [currentSongIndex]); // Update when song index changes

  // Play/Pause Toggle
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Seek Functionality
  const handleSeek = (event) => {
    const audio = audioRef.current;
    const seekTime =
      (event.nativeEvent.offsetX / event.target.clientWidth) * audio.duration;
    audio.currentTime = seekTime;
    setProgress((seekTime / audio.duration) * 100);
  };

  // Skip Forward by 10 Seconds
  const skipForward = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
  };

  // Skip Backward by 10 Seconds
  const skipBackward = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.max(audio.currentTime - 10, 0);
  };

  // Play Next Song & Start Playing Immediately
  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songsData.length);
    setIsPlaying(true); // Ensure play state is true
  };

  // Play Previous Song & Start Playing Immediately
  const playPrevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songsData.length) % songsData.length);
    setIsPlaying(true); // Ensure play state is true
  };

  // Format Time Display (MM:SS)
  const formatTime = (time) => {
    if (isNaN(time) || time < 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="h-[10%] bg-blue-800 fixed bottom-0 left-0 w-full flex items-center px-4 shadow-lg text-white z-50">
      {/* Left Side: Song Details */}
      <div className="hidden lg:flex items-center gap-4 w-1/4">
        <img className="w-12 rounded-lg" src={songsData[currentSongIndex].image} alt="Song Cover" />
        <div>
          <p className="text-sm font-semibold">{songsData[currentSongIndex].name}</p>
          <p className="text-xs text-gray-300">{songsData[currentSongIndex].desc.slice(0, 16) + "..."}</p>
        </div>
      </div>

      {/* Center: Player Controls */}
      <div className="flex flex-col items-center gap-2 w-1/2 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="Previous" onClick={playPrevSong} />
          <img
            className="w-5 cursor-pointer"
            src={isPlaying ? assets.pause_icon : assets.play_icon}
            alt={isPlaying ? "Pause" : "Play"}
            onClick={togglePlayPause}
          />
          <img className="w-4 cursor-pointer" src={assets.next_icon} alt="Next" onClick={playNextSong} />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="Loop" />
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-4 w-full justify-center">
          <p className="text-xs">{formatTime(currentTime)}</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 h-1 rounded-full cursor-pointer relative" onClick={handleSeek}>
            <div className="h-1 bg-green-800 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-xs">{formatTime(duration)}</p>
        </div>
      </div>

      {/* Right Side: Additional Controls */}
      <div className="hidden lg:flex items-center gap-3 w-1/4 justify-end opacity-75">
        <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="Mic" />
        <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="Queue" />
        <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="Speaker" />
        <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="Volume" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4 cursor-pointer" src={assets.mini_player_icon} alt="Mini Player" />
        <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="Zoom" />
      </div>
    </div>
  );
};

export default Player;
