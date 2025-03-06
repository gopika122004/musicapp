import React from "react";

const Artist = ({ image, name, desc }) => {
  return (
    <div className="min-w-[200px] p-3 rounded-lg cursor-pointer hover:bg-[#FFB400]">
      <img 
        className="w-[180px] h-[180px] object-cover rounded-xl" 
        src={image} 
        alt={name} 
        style={{ objectPosition: "top" }} // Ensures top is visible
      />
      <p className="font-bold mt-3 text-white truncate text-lg">{name}</p>
      <p className="text-slate-300 text-sm mt-1 break-words">{desc}</p>
    </div>
  );
};

export default Artist;
