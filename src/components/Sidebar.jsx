import React from 'react';
import { FaHome, FaSearch, FaLayerGroup, FaArrowRight, FaPlus } from "react-icons/fa"; 

const Sidebar = () => {
  return (
    <div className='w-[25%] h-screen p-2 flex flex-col text-white hidden lg:flex fixed left-0 top-0  overflow-y-auto'>

      {/* Home & Search Section */}
      <div className='bg-white bg-opacity-10 h-[120px] w-[90%] rounded flex flex-col justify-center gap-4 p-4 ml-2'>

        <div className='flex items-center gap-3 cursor-pointer hover:text-gray-300'>
          <FaHome size={20} />
          <span className="text-base">Home</span>
        </div>

        <div className='flex items-center gap-3 cursor-pointer hover:text-gray-300'>
          <FaSearch size={20} />
          <span className="text-base">Search</span>
        </div>
      </div>

      {/* Library Section */}
      <div className='bg-white bg-opacity-10 h-[500px] w-[90%] rounded flex flex-col px-4 py-3 ml-2 mt-2'>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <FaLayerGroup size={20} />
            <span className="text-base">Your Library</span>
          </div>
          <div className='flex items-center gap-3'>
            <FaArrowRight size={16} className="cursor-pointer hover:text-gray-300" />
            <FaPlus size={16} className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        {/* Create Playlist Section */}
        <div className='mt-3 p-3 bg-white bg-opacity-15 rounded'> 
          <h1 className='text-sm font-semibold'>Create your first Playlist</h1>
          <p className='text-xs text-gray-300'>It's easy, we'll help you</p>
          <button className='bg-white text-black rounded-md px-4 py-1 text-xs mt-2 hover:bg-gray-300'>
            Create Playlist
          </button>
        </div>

        {/* Browse Podcasts Section */}
        <div className='mt-3 p-3 bg-white bg-opacity-15 rounded'> 
          <h1 className='text-sm font-semibold'>Find some Podcasts to follow</h1>
          <p className='text-xs text-gray-300'>We'll keep you updated on new episodes</p>
          <button className='bg-white text-black rounded-md px-4 py-1 text-xs mt-2 hover:bg-gray-300'>
            Browse Podcasts
          </button>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
