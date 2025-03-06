import React from "react";

const SongItems = ({ image, name, desc }) => {
  return (
    <div className="min-w-[200px] p-3 rounded cursor-pointer hover:bg-[#FFB400]">
      <img 
        className="w-[180px] h-[180px] object-contain rounded-lg" 
        src={image} 
        alt={name} 
      />
      <p className="font-bold mt-3 leading-tight text-white truncate">{name}</p>
      <p className="text-slate-300 text-sm mt-1 break-words">{desc}</p>
    </div>
  );
};

export default SongItems;
