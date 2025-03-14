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

// Contoh itemVariants untuk animasi (bisa disesuaikan)
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// Data untuk rekomendasi hero raid
const raidBasicRangeHeroes = [
  { name: "Eunha", rarity: "Legend", element: "Basic", role: "Support / Range", stars: 5, imageName: "Baby_Dokkaebi_Eunha" },
  { name: "Nari", rarity: "Legend", element: "Basic", role: "Range", stars: 5, imageName: "Eight-tailed_Fox_Nari"},  
  { name: "Knight Ascent / Future Knight", rarity: "Ascended", element: "Basic", role: "Range", stars: 5 , imageName:"Female_Knight_Ascent / Future_Knight"},  
  { name: "Dohwa", rarity: "Legend", element: "Basic", role: "Range", stars: 5, imageName: "Soul_Mage_Dohwa" }
];

const raidBasicRangeAlternativeHeroes = [
  { name: "Fern", rarity: "Legend", element: "Basic", role: "Range", stars: 5},
  { name: "Nari", rarity: "Legend", element: "Basic", role: "Range", stars: 5 , imageName:"Eight-tailed_Fox_Nari"},
  { name: "Eunha", rarity: "Legend", element: "Basic", role: "Support / Range", stars: 5, imageName: "Baby_Dokkaebi_Eunha" },
  { name: "Dohwa", rarity: "Legend", element: "Basic", role: "Range", stars: 5, imageName: "Soul_Mage_Dohwa" }
];

const raidBasicMeleeHeroes = [
  { name: "Ameris (Valentine)", rarity: "Legend", element: "Basic", role: "Melee", stars: 5, imageName: "Chocolate_Collector_Ameris",},
  { name: "Girgas (Valentine)", rarity: "Legend", element: "Basic", role: "Melee", stars: 5, imageName: "Image"},
  { name: "Mike", rarity: "Legend", element: "Basic", role: "Melee", stars: 5, imageName: "ronin_cat_mike"},
  { name: "Druid Kanna", rarity: "Legend", element: "Basic", role: "Melee", stars: 5}
]

const raidDarkRangeHeroes = [
  { name: "Oghma", rarity: "Legend", element: "Dark", role: "Range", stars: 5,  imageName: "Mecha_Warrior_Oghma"},
  { name: "Claude", rarity: "Legend", element: "Dark", role: "Warrior", stars: 5, imageName: "Claude" },
  { name: "Vinette", rarity: "Legend", element: "Dark", role: "Warrior", stars: 5, imageName: "Vinnete"},  
  { name: "Cammie", rarity: "Legend", element: "Dark", role: "Support", stars: 5, imageName: "Cammie" },
];

const raidDarkMeleeHeroes = [
  { name: "Lilith", rarity: "Legend", element: "Dark", role: "Melee", stars: 5, imageName: "Demon_Queen_Lilith"},
  { name: "Beth", rarity: "Legend", element: "Dark", role: "Melee", stars: 5},
  { name: "Rey", rarity: "Legend", element: "Fire", role: "Melee", stars: 5},
  { name: "Doctor Plague", rarity: "Legend", element: "Dark", role: "Melee", stars: 5, imageName: "Plague_Doctor" },
]

// Lilith, Beth, Rey, Doctor Plague

const raidLightRangeHeroes = [
  { name: "Cornet", imageName: "Knight_Lady_Lapice", rarity: "Legend", element: "Light", role: "Warrior", stars: 5, imageName: "King_of_the_Hill_Cornet" },
  { name: "Chun Ryeo / Frieren", imageName: "MK99", rarity: "Legend", element: "Light", role: "Range", stars: 5, imageName: "Chun_Ryeo / Frieren" },
  { name: "Gabriel", rarity: "Legend", element: "Light", role: "Warrior", stars: 5, imageName: "Archangel_Gabriel" },
  { name: "Ruri", rarity: "Legend", element: "Light", role: "Support", stars: 5, imageName: "Streamer_Ruri" }  
]

const raidLightMeleeHeroes = [
  { name: "H.E.R.O.S K.A.I", imageName: "H.E.R.O.S_KAI", rarity: "Legend", element: "Light", role: "Melee", stars: 5 },
  { name: "Shapira (Beach)", rarity: "Legend", element: "Light", role: "Melee", stars: 5, imageName: "shapira_summer" },
  { name: "Lapice", rarity: "Legend", element: "Light", role: "Melee", stars: 5, imageName: "Knight_Lady_Lapice" },
  { name: "Valencia", rarity: "Legend", element: "Light", role: "Melee", stars: 5 },
]

// K.A.I, Shapira (Beach), Lapice, Valencia

const raidFireRangeHeroes = [
  { name: "Elvira Ascent", imageName: "Red_Hood_Elvira_Ascent", rarity: "Ascended", element: "Fire", role: "Range", stars: 5},
  { name: "Toga", imageName: "Toga", rarity: "Legend", element: "Fire", role: "Range", stars: 5, imageName: "Horn_Huntress_Toga"},
  { name: "Eunha", rarity: "Legend", element: "Basic", role: "Support / Range", stars: 5, imageName: "Baby_Dokkaebi_Eunha" },
  { name: "Vishuvac", rarity: "Legend", element: "Fire", role: "Range", stars: 5, imageName: "Dragon_Avatar_Vishuvac_Alternate_Art" }
]

const raidFireMeleeHeroes = [
  { name: "Rey", rarity: "Legend", element: "Fire", role: "Melee", stars: 5},
  { name: "Plitvice", rarity: "Legend", element: "Fire", role: "Melee", stars: 5, imageName: "Gods_War_Plitvice" },
  { name: "Winling", rarity: "Legend", element: "Fire", role: "Melee", stars: 5, imageName: "Pill_Refiner_Winling" },
  { name: "Saya",  rarity: "Legend", element: "Fire", role: "Melee", stars: 5, imageName: "Exorcist_Swordswoman_Saya" },
]

// Rey, Plitvice, Winling, Saya

const raidWaterRangeHeroes = [
  { name: "Andras", imageName: "Slayer_Andras", rarity: "Legend", element: "Water", role: "Range", stars: 5},
  { name: "Yun", rarity: "Legend", element: "Water", role: "Range", stars: 5},
  { name: "Chun Ryeo", rarity: "Legend", element: "Light", role: "Range", stars: 5, imageName: "Chun_Ryeo" },
  { name: "Cammie", imageName: "Cammie", rarity: "Legend", element: "Dark", role: "Support", stars: 5, imageName: "Cammie" }
]

const raidWaterMeleeHeroes = [
  { name: "Yuze (Beach)", rarity: "Legend", element: "Water", role: "Melee", stars: 5, imageName: "Lifeguard_Yuze" },
  { name: "White Snow / Rimuru", rarity: "Legend", element: "Water", role: "Melee", stars: 5, imageName: "White_Snow / Rimuru" },
  { name: "Natsume", rarity: "Legend", element: "Water", role: "Melee", stars: 5, imageName: "Elite_Ninja_Natsume" },
  { name: "Angie",  rarity: "Legend", element: "Water", role: "Melee", stars: 5, imageName: "Sword_of_Heaven_Angie" },
]

// Yuze (Beach), White Snow/Rimuru, Natsume, Angie

const raidEarthRangeHeroes = [
  { name: "Ameris", rarity: "Legend", element: "Earth", role: "Range", stars: 5},
  { name: "Kamael", imageName: "God_of_Harvest_Kamael", rarity: "Legend", element: "Earth", role: "Range", stars: 5},
  { name: "Tinia", imageName: "Dancing_Archer_Tinia", rarity: "Legend", element: "Earth", role: "Range", stars: 5},
  { name: "Dabin", imageName: "Novice_Heavenly_Maiden_Dabin", rarity: "Legend", element: "Earth", role: "Range", stars: 5}
]

const raidEarthMeleeHeroes = [
  { name: "Rue", rarity: "Legend", element: "Earth", role: "Melee", stars: 5, imageName: "Santa27s_Little_Helper_Rue" },
  { name: "Tasha", rarity: "Legend", element: "Earth", role: "Melee", stars: 5 },
  { name: "Plague Doctor", rarity: "Legend", element: "Dark", role: "Melee", stars: 5, imageName: "Plague_Doctor" },
  { name: "Bari", rarity: "Legend", element: "Earth", role: "Melee", stars: 5, imageName: "Flower_Girl_Bari" },
]
// Toga, Eunha, Vishuvac Andras, Yun, Chun Ryeo, Cammie Ameris, Kamael, Tina, Dabin| Ameris (Valentine), girgas (Valentine), Mike, Kanna

//Rue, Tasha, Plague Doctor, Bari

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

        {/* Party Basic */}
        <p className="text-md mt-4">
          Party Range Basic:
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {raidBasicRangeHeroes.map((hero, index) => {
          // Cek apakah hero mengandung dua nama (dipisahkan oleh '/')
          const hasDualHero = hero.name.includes("/");
          const portraitProps = {
            name: hero.name,
            rarity: hero.rarity,
            element: hero.element,
            role: hero.role,
            stars: hero.stars,
            onClick: () =>
              console.log(`${hero.name} details clicked`),
          };

          if (hasDualHero) {
            portraitProps.imageNames = hero.imageName.split("/").map((s) => s.trim());
          } else {
            portraitProps.imageName = hero.imageName;
          }

          return (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <PortraitHero {...portraitProps} />
            </motion.div>
          );
        })}
      </div>
        <p className='text-sm mt-4'>
          Alternatif
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {raidBasicRangeAlternativeHeroes.map((hero, index) => (
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

        <p className='text-sm mt-4'>
          Party Melee Basic:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {raidBasicMeleeHeroes.map((hero, index) => (
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

        {/* Party Kegelapan */}
        <p className='text-sm mt-4'>
          Party Range Gelap: 
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {raidDarkRangeHeroes.map((hero, index) => (
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
          Party Melee Gelap: 
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {raidDarkMeleeHeroes.map((hero, index) => (
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

        {/* Party Cahaya */}
        <p className='text-sm mt-4'>
          Party Range Cahaya:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {raidLightRangeHeroes.map((hero, index) => {
            const hasDualHero = hero.name.includes("/");
            const portraitProps = {
              name: hero.name,
              rarity: hero.rarity,
              element: hero.element,
              role: hero.role,
              stars: hero.stars,
              onClick: () =>
                console.log(`${hero.name} details clicked`),
            };
  
            if (hasDualHero) {
              portraitProps.imageNames = hero.imageName.split("/").map((s) => s.trim());
            } else {
              portraitProps.imageName = hero.imageName;
            }
  
            return (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <PortraitHero {...portraitProps} />
              </motion.div>
            );
          })}
        </div>

        <p className='text-md mt-4'>
          Party Melee Cahaya:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {raidLightMeleeHeroes.map((hero, index) => {
          // Cek apakah hero mengandung dua nama (dipisahkan oleh '/')
          const hasDualHero = hero.name.includes("/");
          const portraitProps = {
            name: hero.name,
            rarity: hero.rarity,
            element: hero.element,
            role: hero.role,
            stars: hero.stars,
            onClick: () =>
              console.log(`${hero.name} details clicked`),
          };

          if (hasDualHero) {
            // Asumsikan properti imageName juga berformat serupa, misalnya "knight / future_knight"
            // Lakukan split dan trim untuk mendapatkan array dua nama gambar
            portraitProps.imageNames = hero.imageName.split("/").map((s) => s.trim());
          } else {
            portraitProps.imageName = hero.imageName;
          }

          return (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <PortraitHero {...portraitProps} />
            </motion.div>
          );
        })}
        </div>

        {/* Party Api */}
        <p className='text-sm mt-4'>
          Party Range Api:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {raidFireRangeHeroes.map((hero, index) => (
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


        <p className='text-sm mt-4'>
          Party Melee Api
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {raidFireMeleeHeroes.map((hero, index) => (
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

          {/* Party Air */}
        <p className='text-sm mt-4'>
          Party Range Air:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {raidWaterRangeHeroes.map((hero, index) => (
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


        <p className='text-sm mt-4'>
          Party Melee Air
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {raidWaterMeleeHeroes.map((hero, index) => {
          // Cek apakah hero mengandung dua nama (dipisahkan oleh '/')
          const hasDualHero = hero.name.includes("/");
          const portraitProps = {
            name: hero.name,
            rarity: hero.rarity,
            element: hero.element,
            role: hero.role,
            stars: hero.stars,
            onClick: () =>
              console.log(`${hero.name} details clicked`),
          };

          if (hasDualHero) {
            portraitProps.imageNames = hero.imageName.split("/").map((s) => s.trim());
          } else {
            portraitProps.imageName = hero.imageName;
          }

          return (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <PortraitHero {...portraitProps} />
            </motion.div>
          );
        })}
        </div>


        {/* Party Bumi */}
        <p className='text-sm mt-4'>
          Party Range Bumi:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {raidEarthRangeHeroes.map((hero, index) => (
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

        <p className='text-sm mt-4'>
          Party Melee Bumi
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {raidEarthMeleeHeroes.map((hero, index) => (
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