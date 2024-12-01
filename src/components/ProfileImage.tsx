import React from 'react';
import { Camera } from 'lucide-react';
import swatiImage from '/public/swati.jpg';

const ProfileImage = () => {
  return (
    <div className="relative group">
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-pink-500 shadow-xl">
        <img
          src={swatiImage}
          alt="Swati's Photo"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Camera className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white p-2 rounded-full shadow-lg">
        <span className="text-xl">🎈</span>
      </div>
    </div>
  );
};

export default ProfileImage;