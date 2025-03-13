import React from 'react';
import { motion } from 'framer-motion';
import PortraitHero from './PortraitHero';

// Komponen PixelBorder yang digunakan (sudah ada sebelumnya)
const PixelBorder = ({ children, className = '' }) => {
  return (
    <div className={`relative p-4 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-lg">
        <div className="absolute inset-0 bg-gray-900 rounded-lg border-4 border-dashed border-blue-400"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Data untuk rekomendasi hero raid
const raidBasicHeroes = [
  { name: "Knight Ascend", rarity: "Ascended", element: "Basic", role: "Warrior", stars: 5 , imageName:"Female_Knight_Ascent"},
  { name: "Druid Kanna", rarity: "Legend", element: "Basic", role: "Warrior", stars: 5},  
  { name: "Eunha", rarity: "Legend", element: "Basic", role: "Support / Range", stars: 5, imageName: "Baby_Dokkaebi_Eunha" },
  { name: "Dohwa", rarity: "Legend", element: "Basic", role: "Range", start: "5", imageName: "Soul_Mage_Dohwa" },
];

const raidDarkHeroes = [
  { name: "Plague Doctor", rarity: "Legend", element: "Dark", role: "Warrior", stars: 5, imageName: "Plague_Doctor" },
  { name: "Beth", rarity: "Legend", element: "Dark", role: "Warrior", stars: 5 },  
  { name: "Karina Ascend", rarity: "Ascended", element: "Dark", role: "Support", stars: 5, imageName: "karina_ascend" },
  { name: "Oghma", rarity: "Legend", element: "Dark", role: "Tank / Range", stars: 5,  imageName: "Mecha_Warrior_Oghma"}
];

const raidLightHeroes = [
  { name: "Lapice", imageName: "Knight_Lady_Lapice", rarity: "Legend", element: "Light", role: "Warrior", stars: 5 },
  { name: "MK99", imageName: "MK99", rarity: "Legend", element: "Light", role: "Range", stars: 5 },
  { name: "H.E.R.O.S KAI", imageName: "H.E.R.O.S_KAI", rarity: "Legend", element: "Light", role: "Warrior", stars: 5 },
  { name: "Gabriel", rarity: "Legend", element: "Light", role: "Support", stars: 5, imageName: "Archangel_Gabriel" }  
]

const HeroRaidRecommendation = () => {
  return (
    <motion.section 
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PixelBorder>
        <h2 className="text-xl font-semibold text-green-300 mb-4 flex items-center">
          <span className="inline-block w-4 h-4 bg-green-300 mr-2"></span>
          Rekomendasi Hero Raid
          <span className="inline-block w-4 h-4 bg-green-300 ml-2"></span>
        </h2>
        
        {/* Penjelasan Singkat */}
        <p className="text-gray-400 text-sm mb-4">
          Hero terbaik untuk raid level 100 berdasarkan meta saat ini:
        </p>
        <p className="text-md mt-4">
          Party Basic:
        </p>
        
        {/* Grid untuk menampilkan hero */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {raidBasicHeroes.map((hero, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <PortraitHero
                name={hero.name}
                imageName={hero.imageName}
                rarity={hero.rarity}
                element={hero.element}
                role={hero.role}
                stars={hero.stars}
                onClick={() => console.log(`${hero.name} details clicked`)}
              />
            </motion.div>
          ))}
        </div>

        <p className='text-md mt-4'>
          Party Dark: 
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {raidDarkHeroes.map((hero, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <PortraitHero
                name={hero.name}
                imageName={hero.imageName}
                rarity={hero.rarity}
                element={hero.element}
                role={hero.role}
                stars={hero.stars}
                onClick={() => console.log(`${hero.name} details clicked`)}
              />
            </motion.div>
          ))}
        </div>

        <p className='text-md mt-4'>
          Party Cahaya:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {raidLightHeroes.map((hero, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <PortraitHero
                name={hero.name}
                imageName={hero.imageName}
                rarity={hero.rarity}
                element={hero.element}
                role={hero.role}
                stars={hero.stars}
                onClick={() => console.log(`${hero.name} details clicked`)}
              />
            </motion.div>
          ))}
        </div>

        {/* Tombol lihat lebih banyak */}
        <motion.div 
          className="mt-6 text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
        </motion.div>
      </PixelBorder>
    </motion.section>
  );
};

export default HeroRaidRecommendation;