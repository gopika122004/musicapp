import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[75%] mx-auto"> {/* Reduced width */}
      {/* Top Navbar Section */}
      <div className="flex justify-between items-center font-semibold py-2">
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-6 bg-blue-900 p-1 rounded-lg cursor-pointer"
            src={assets.arrow_left}
            alt="Go Back"
          />
          <img
            onClick={() => navigate(1)}
            className="w-6 bg-blue-900 p-1 rounded-lg cursor-pointer"
            src={assets.arrow_right}
            alt="Go Forward"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <p className="bg-[#FFB400] text-black text-sm px-3 py-1 rounded-lg hidden md:block cursor-pointer">
            Premium
          </p>
          <p className="bg-green-700 py-1 px-2 rounded-lg text-sm cursor-pointer">
            Install
          </p>
          <p className="bg-orange-500 text-black w-6 h-6 rounded-full flex items-center justify-center cursor-pointer text-xs">
            jk
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
