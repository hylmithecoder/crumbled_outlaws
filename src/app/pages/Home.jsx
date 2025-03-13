'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import HeroRaidRecommendation from '../components/RekomendasiHeroRaid';
import { PixelBorder, PixelButton } from '../components/PixelComponent';
import RecapRaid from '../components/RecapRaid';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Add pixel font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Add pixel styling
    document.body.classList.add('bg-gray-900', 'font-pixel');
    
    const style = document.createElement('style');
    style.textContent = `
      .font-pixel {
        font-family: 'Press Start 2P', cursive;
        letter-spacing: 1px;
        line-height: 1.5;
      }
      .pixel-bg {
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h1v1H1V1zm0 7h1v1H1V8zm7-7h1v1H8V1zm0 7h1v1H8V8zM3 3h1v1H3V3zm0 2h1v1H3V5zm0 2h1v1H3V7zm2-4h1v1H5V3zm0 2h1v1H5V5zm0 2h1v1H5V7zm2-4h1v1H7V3zm0 2h1v1H7V5zm0 2h1v1H7V7z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
      }
      .pixelate {
        image-rendering: pixelated;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
      document.body.classList.remove('bg-gray-900', 'font-pixel');
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const events = [
    { title: "Guardian Tales Arena Tournament", date: "April 15", prize: "5,000 Gems" },
    { title: "Heavenhold Tower Challenge", date: "April 20", prize: "Legendary Weapon" },
    { title: "Pixel Dungeon Co-op Raid", date: "May 5", prize: "Exclusive Hero" }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 pixel-bg"
      variants={containerVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
    >
        <br/><br/>
      <header className="mb-8 text-center">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 mt-8"
          variants={itemVariants}
        >
          Crumbled Outlaws
        </motion.h1>
        <motion.div variants={itemVariants} className="relative">
          <div className="w-64 h-1 bg-blue-500 mx-auto mb-4 relative">
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-300"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-300"></div>
          </div>
        </motion.div>
        <motion.p 
          className="text-lg italic mt-2 text-blue-300"
          variants={itemVariants}
        >
          ⚔️ Explore Heavenhold Together! ⚔️
        </motion.p>
      </header>

      <main className="flex flex-wrap justify-around w-full max-w-5xl gap-4">
        <motion.section className='w-full' variants={itemVariants}>
          <PixelBorder>
          <p className="text-2xl font-semibold text-justify whitespace-pre-wrap">
          Crumbled Outlaws adalah komunitas Guardian Tales Indonesia yang menyatukan para petualang dalam satu tempat. <br />Yang Dibangun oleh : Blax di Guild Crumbled Outlaws <br />Di sini, kita berbagi strategi, berbincang tentang hero favorit, dan menjelajahi dunia Kanterbury bersama. Mari bertumbuh, berjuang, dan menaklukkan tantangan bersama!
          </p>
          </PixelBorder>
        </motion.section>
        {/* <motion.section variants={itemVariants}> */}
          <PixelBorder className='w-full mt-6'>
            <p>
              <h2 className="text-xl font-semibold text-green-300 mb-4 items-center">
                <span className="inline-block w-4 h-4 bg-green-300 mr-2"></span>
                Hero Raid Recap
                <span className="inline-block w-4 h-4 bg-green-300 ml-2"></span>
              </h2>
            </p>
            <RecapRaid/>
          </PixelBorder>
        {/* </motion.section> */}
        {/* <motion.section 
          className="w-full md:w-5/12"
          variants={itemVariants}
        >
          <PixelBorder>
            <h2 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
              <span className="inline-block w-4 h-4 bg-yellow-300 mr-2"></span>
              Upcoming Events
              <span className="inline-block w-4 h-4 bg-yellow-300 ml-2"></span>
            </h2>
            <ul className="list-none space-y-4">
              {events.map((event, index) => (
                <motion.li 
                  key={index}
                  className="text-sm md:text-base mb-4 bg-gray-800 p-3 rounded border-l-4 border-blue-500"
                  whileHover={{ x: 5, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                >
                  <div className="font-bold">{event.title}</div>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-400">📅 {event.date}</span>
                    <span className="text-yellow-400">🏆 {event.prize}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <PixelButton>View All Events</PixelButton>
            </div>
          </PixelBorder>
        </motion.section> */}

        <motion.section 
          className="w-full mt-6"
          variants={itemVariants}
        >
          <HeroRaidRecommendation/>
        </motion.section>

        <motion.section 
          className="w-full mx-auto mt-6"
          variants={itemVariants}
        >
          <PixelBorder className="text-center mx-auto max-w-screen-md">
            <h2 className="text-xl font-semibold text-red-300 mb-4">
              Join Komunitas Kami!
            </h2>
            <p className="text-sm mb-4">
              Terhubung dengan sesama Guardian, berbagi strategi, dan taklukkan dunia piksel bersama-sama!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <a href="https://chat.whatsapp.com/GyDz7UWVJQZ3HrzwtAHjKD" target="_blank">
                <div className="bg-gray-800 p-3 rounded hover:bg-gray-700 transition-colors">
                  <div className="text-4xl mb-2">
                    <img src="whatsapp-icon.svg" className='w-12 mx-auto'/>
                  </div>
                  <div className="text-sm">Whats App</div>
                </div>
              </a>
              <a href="https://discord.com/invite/EVzhXJS8VT" target='_blank'>
                <div className="bg-gray-800 p-3 rounded hover:bg-gray-700 transition-colors">
                  <div className='text-4xl mb-2'>
                    <img src='discord-icon.svg' className='w-12 mx-auto'/>
                  </div>
                  <div className="text-sm">Discord</div>
                </div>
              </a>
              <a href="https://docs.google.com/spreadsheets/d/1u8BFwntoTFga9tkLvTVWY_Xd3Vvg_b1q8owQFyEM_wQ/edit?usp=drivesdk" target='_blank'>
                <div className="bg-gray-800 p-3 rounded hover:bg-gray-700 transition-colors">
                  <div className='text-4xl mb-2'>
                    <img src='spreadsheet.svg' className='w-12 mx-auto'/>
                  </div>
                  <div className="text-sm">Rekap Raid</div>
                </div>
              </a>
            </div>
          </PixelBorder>
        </motion.section>
      </main>
            <br /><br />
      <Footer/>
    </motion.div>
  );
};

export default Home;