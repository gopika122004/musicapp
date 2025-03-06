import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumItems = ({ id, image, name, desc }) => {
  const navigate = useNavigate();  // ✅ Correct usage

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}  // ✅ Corrected navigation function
      className="min-w-[200px] p-3 rounded-lg cursor-pointer hover:bg-[#FFB400]"
    >
      <img 
        className="w-[180px] h-[180px] object-cover rounded-xl" 
        src={image} 
        alt={name} 
        style={{ objectPosition: "top" }}
      />
      <p className="font-bold mt-3 leading-tight text-white">{name}</p>
      <p className="text-slate-300 text-sm mt-1">{desc}</p>
    </div>
  );
};

export default AlbumItems;
