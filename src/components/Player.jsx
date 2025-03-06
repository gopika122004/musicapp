import React from 'react';
import { assets, songsData } from '../assets/assets';

const Player = () => {
  return (
    <div className='h-[10%] bg-black fixed bottom-0 left-0 w-full flex items-center px-4 shadow-lg text-white z-50'>

      {/* Left Side: Song Details */}
      <div className='hidden lg:flex items-center gap-4 w-1/4'>
        <img className='w-12 rounded-lg' src={songsData[0].image} alt="Song Cover" />
        <div>
          <p className='text-sm font-semibold'>{songsData[0].name}</p>
          <p className='text-xs text-gray-300'>{songsData[0].desc.slice(0, 16) + "..."}</p>
        </div>
      </div>

      {/* Center: Player Controls */}
      <div className='flex flex-col items-center gap-2 w-1/2 m-auto'>
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle" />
          <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="Previous" />
          <img className='w-5 cursor-pointer' src={assets.play_icon} alt="Play" />
          <img className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop" />
        </div>

        {/* Progress Bar */}
        <div className='flex items-center gap-4 w-full justify-center'>
          <p className='text-xs'>0:15</p>
          <div className='w-[60vw] max-w-[500px] bg-gray-300 h-1 rounded-full cursor-pointer relative'>
            <div className='h-1 bg-green-800 rounded-full' style={{ width: '25%' }}></div>
          </div>
          <p className='text-xs'>4:20</p>
        </div>
      </div>

      {/* Right Side: Additional Controls */}
      <div className='hidden lg:flex items-center gap-3 w-1/4 justify-end opacity-75'>
        <img className='w-4 cursor-pointer' src={assets.play_icon} alt="Play" />
        <img className='w-4 cursor-pointer' src={assets.mic_icon} alt="Mic" />
        <img className='w-4 cursor-pointer' src={assets.queue_icon} alt="Queue" />
        <img className='w-4 cursor-pointer' src={assets.speaker_icon} alt="Speaker" />
        <img className='w-4 cursor-pointer' src={assets.volume_icon} alt="Volume" />
        <div className='w-20 bg-slate-50 h-1 rounded'></div>
        <img className='w-4 cursor-pointer' src={assets.mini_player_icon} alt="Mini Player" />
        <img className='w-4 cursor-pointer' src={assets.zoom_icon} alt="Zoom" />
      </div>

    </div>
  );
};

export default Player;
