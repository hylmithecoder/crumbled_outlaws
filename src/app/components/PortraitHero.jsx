'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PortraitHero = ({ 
  name, 
  imageName, 
  rarity = 'Rare', 
  element = 'Basic',
  role = 'Warrior',
  stars = 3,
  onClick
}) => {
  // Path gambar hero
  const imagePath = `/images/heroes/${imageName || name.toLowerCase()}.png`;
  
  // Warna berdasarkan rarity
  const rarityConfig = {
    Normal: { bgColor: 'bg-gray-700', textColor: 'text-gray-300', borderColor: 'border-gray-500' },
    Rare: { bgColor: 'bg-blue-900', textColor: 'text-blue-300', borderColor: 'border-blue-500' },
    Unique: { bgColor: 'bg-purple-900', textColor: 'text-purple-300', borderColor: 'border-purple-500' },
    Legend: { bgColor: 'bg-yellow-900', textColor: 'text-yellow-300', borderColor: 'border-yellow-500' },
    Ascended: { bgColor: 'bg-green-900', textColor: 'text-green-300', borderColor: 'border-green-400' },
  };
  
  // Warna berdasarkan element
  const elementConfig = {
    Basic: { bgColor: 'bg-gray-700', textColor: 'text-gray-300' },
    Fire: { bgColor: 'bg-red-900', textColor: 'text-red-300' },
    Water: { bgColor: 'bg-blue-900', textColor: 'text-blue-300' },
    Earth: { bgColor: 'bg-green-900', textColor: 'text-green-300' },
    Light: { bgColor: 'bg-yellow-900', textColor: 'text-yellow-300' },
    Dark: { bgColor: 'bg-purple-900', textColor: 'text-purple-300' },
  };
  
  // Konfigurasi yang dipakai
  const rarityStyle = rarityConfig[rarity] || rarityConfig.Rare;
  const elementStyle = elementConfig[element] || elementConfig.Basic;
  
  // Render bintang untuk rating hero
  const renderStars = () => {
    const maxStars = 5;
    return Array.from({ length: maxStars }).map((_, index) => (
      <span key={index} className={index < stars ? "text-yellow-400" : "text-gray-600"}>
        ★
      </span>
    ));
  };

  return (
    <motion.div 
      className={`bg-gray-800 rounded-lg overflow-hidden border-2 ${rarityStyle.borderColor} hover:shadow-lg transition-all`}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      onClick={onClick}
    >
      <div className="relative">
        {/* Hero Image */}
        <div className="relative h-40 overflow-hidden bg-gradient-to-b from-gray-700 to-gray-900">
          {/* Pixel Frame Border */}
          <div className="absolute inset-0 border-4 border-dashed border-opacity-20 pointer-events-none"></div>
          
          <motion.img 
            src={imagePath}
            alt={name}
            className="w-full h-full object-contain pixelate"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              // Fallback jika gambar tidak ditemukan
              e.target.src = "https://placehold.co/120x160";
              e.target.alt = "Image not found";
            }}
          />
          
          {/* Pixel corners as decoration */}
          <div className="absolute top-0 left-0 w-3 h-3 bg-gray-900"></div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-gray-900"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 bg-gray-900"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-900"></div>
        </div>
        
        {/* Stars Rating (at bottom of image) */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 px-2 py-1 text-center text-xs">
          {renderStars()}
        </div>
      </div>
      
      {/* Hero Info */}
      <div className="p-3">
        <h3 className="text-white text-center">{name}</h3>
        
        <div className="grid grid-cols-2 gap-1 mt-2">
          {/* Rarity Badge */}
          <div className={`text-center text-xs px-1 py-0.5 rounded ${rarityStyle.bgColor} ${rarityStyle.textColor}`}>
            {rarity}
          </div>
          
          {/* Element Badge */}
          <div className={`text-center text-xs px-1 py-0.5 rounded ${elementStyle.bgColor} ${elementStyle.textColor}`}>
            {element}
          </div>
          
          {/* Role Badge (spans full width) */}
          <div className="col-span-2 text-center text-xs px-1 py-0.5 rounded bg-gray-700 text-gray-300 mt-1">
            {role}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortraitHero;