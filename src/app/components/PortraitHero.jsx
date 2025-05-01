"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PortraitHero = ({
  name,
  imageName,
  imageNames,
  rarity = "Rare",
  element = "Basic",
  role = "Warrior",
  stars = 3,
  onClick,
}) => {
  const rarityConfig = {
    Normal: {
      bgColor: "bg-gray-700",
      textColor: "text-gray-300",
      borderColor: "border-gray-500",
    },
    Rare: {
      bgColor: "bg-blue-900",
      textColor: "text-blue-300",
      borderColor: "border-blue-500",
    },
    Unique: {
      bgColor: "bg-purple-900",
      textColor: "text-purple-300",
      borderColor: "border-purple-500",
    },
    Ascended: {
      bgColor: "bg-green-900",
      textColor: "text-green-300",
      borderColor: "border-green-500",
    },
    Legend: {
      bgColor: "bg-yellow-900",
      textColor: "text-yellow-300",
      borderColor: "border-yellow-500",
    },
  };

  // Konfigurasi warna berdasarkan element
  const elementConfig = {
    Basic: { bgColor: "bg-gray-700", textColor: "text-gray-300" },
    Fire: { bgColor: "bg-red-900", textColor: "text-red-300" },
    Water: { bgColor: "bg-blue-900", textColor: "text-blue-300" },
    Earth: { bgColor: "bg-green-900", textColor: "text-green-300" },
    Light: { bgColor: "bg-yellow-900", textColor: "text-yellow-300" },
    Dark: { bgColor: "bg-purple-900", textColor: "text-purple-300" },
  };

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

  // const getImagePath = (heroName) => {
  //   try {
  //     console.log("Hero Name:", heroName);
  //     // Gunakan dynamic import
  //     return require(`@/app/images/heroes/${heroName}.png`).default;
  //   } catch (e) {
  //     // Fallback jika gambar tidak ditemukan
  //     return `https://placehold.co/120?text=${heroName}`;
  //   }
  // };
  // console.log("Image Path:", getImagePath("Girgas"));

  return (
    <motion.div
      className={`bg-gray-800 rounded-lg overflow-hidden border-2 ${rarityStyle.borderColor} hover:shadow-lg transition-all cursor-pointer`}
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      onClick={onClick}
    >
      <div className="relative">
        {/* Bagian gambar hero */}
        <div className="relative h-40 md:h-56 overflow-hidden bg-gradient-to-b from-gray-700 to-gray-900">
          {Array.isArray(imageNames) && imageNames.length === 2 ? (
            <div className="flex">
              <Image
                src={"/images/heroes/" + imageNames[0]+".png"}
                alt={name.split("/")[0].trim()}
                className="w-1/2 h-full object-contain pixelate"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                width={1280}
                height={720}
                onError={(e) => {
                  e.target.src = `https://placehold.co/120?text=${name}`;
                  e.target.alt = "Image not found";
                }}
              />
              <Image
                width={1280}
                height={720}
                src={"/images/heroes/" + imageNames[1]+".png"}
                alt={name.split("/")[1]?.trim() || "Hero"}
                className="w-1/2 h-full object-contain pixelate"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.target.src = `https://placehold.co/120?text=${name}`;
                  e.target.alt = "Image not found";
                }}
              />
            </div>
          ) : (
            <Image
              width={2400}
              height={1080}
              src={"/images/heroes/" + imageName + ".png"}
              alt={name}
              className="w-full h-full object-contain pixelate"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onError={(e) => {
                e.target.src = `https://placehold.co/120?text=${name}`;
                e.target.alt = "Image not found";
              }}
            />
          )}
          {/* <Image
            src={getImagePath(imageName)}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover opacity-0"
          /> */}

          {/* Stars Rating */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 px-2 py-1 text-center text-xs">
            {renderStars()}
          </div>
        </div>

        {/* Informasi hero */}
        <div className="p-3">
          <h3 className="text-white text-center">{name}</h3>
          <div className="grid grid-cols-2 gap-1 mt-2">
            <div
              className={`text-center text-xs px-1 py-0.5 rounded ${rarityStyle.bgColor} ${rarityStyle.textColor}`}
            >
              {rarity}
            </div>
            <div
              className={`text-center text-xs px-1 py-0.5 rounded ${elementStyle.bgColor} ${elementStyle.textColor}`}
            >
              {element}
            </div>
            <div className="col-span-2 text-center text-xs px-1 py-0.5 rounded bg-gray-700 text-gray-300 mt-1">
              {role}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortraitHero;
