'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Membuat efek pixel untuk garis pembatas
  const PixelDivider = () => (
    <div className="w-full h-2 my-4 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 opacity-70"></div>
      <div className="absolute h-1 w-1 bg-blue-300 top-0 left-4"></div>
      <div className="absolute h-1 w-1 bg-blue-300 top-0 left-12"></div>
      <div className="absolute h-1 w-1 bg-blue-300 top-0 left-20"></div>
      <div className="absolute h-1 w-1 bg-blue-300 top-0 right-4"></div>
      <div className="absolute h-1 w-1 bg-blue-300 top-0 right-12"></div>
      <div className="absolute h-1 w-1 bg-blue-300 top-0 right-20"></div>
    </div>
  );

  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 mt-16 pt-8 pb-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Bagian About */}
          <div className="col-span-1">
            <h3 className="text-blue-400 text-lg font-pixel mb-4">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Guardian Tales Community adalah tempat berkumpul para penggemar game Guardian Tales. Kami berbagi strategi, diskusi update, dan mengadakan event bersama.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-blue-400 text-lg font-pixel mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Events', 'Heroes', 'Guides', 'FAQ'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href={`/#${item}`} 
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center"
                    whileHover={{ x: 4, color: '#60A5FA' }}
                  >
                    <span className="inline-block w-2 h-2 bg-blue-500 mr-2"></span>
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="col-span-1">
            <h3 className="text-blue-400 text-lg font-pixel mb-4">Community</h3>
            <ul className="space-y-2">
              {[
                { name: 'Discord', icon: 'discord-icon.svg', link: 'https://discord.com/invite/EVzhXJS8VT' },
                { name: 'Whats App', icon: 'whatsapp-icon.svg', link: 'https://chat.whatsapp.com/GyDz7UWVJQZ3HrzwtAHjKD' }
              ].map((item) => (
                <li key={item.name}>
                  <motion.a 
                    href={item.link} 
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center"
                    whileHover={{ x: 4, color: '#60A5FA' }}
                  >
                    <span className="mr-2"><img src={item.icon} alt={item.name} className='w-6 h-6' /></span>
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-blue-400 text-lg font-pixel mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">Get updates on events and news!</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-gray-800 text-white px-3 py-2 text-sm rounded-l w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <motion.button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-r text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join
              </motion.button>
            </div>
          </div>
        </div>

        <PixelDivider />

        {/* Bottom footer section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <div className="text-gray-500 text-xs mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; {currentYear} Crumbled Outlaws. All rights reserved.</p>
            <p className="mt-1">Guardian Tales is a trademark of Kakao Games. This is a fan community.</p>
          </div>
          
          <div className="flex space-x-4">
            {['Terms', 'Privacy', 'Contact'].map((item) => (
              <motion.a 
                key={item}
                href="#" 
                className="text-gray-500 hover:text-white text-xs"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;