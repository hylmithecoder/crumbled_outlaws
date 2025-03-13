'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll untuk efek navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animasi untuk menu
  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 ${
        scrolled 
          ? 'bg-gradient-to-r from-black/90 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-black'
      } p-4 transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          className="text-white font-bold text-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href='/#' className="inline-block py-1 px-2 rounded-lg transition-all hover:bg-white/10">
            <span className="text-white">Crumbled</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 "> Outlaws</span>
          </a>
        </motion.div>
        
        {/* Menu button for mobile */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10"
            whileHover={hoverEffect}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </motion.button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-1">
            {['Home', 'Events', 'Community'].map((item, index) => (
              <motion.li key={item} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                {/* <a href={`/${item}`} > */}
                {/* <Link href={`/${item}`}> */}
                <motion.a 
                  className="text-white py-2 px-4 rounded-lg block hover:bg-white/20 hover:text-yellow-300 transition-all"
                  whileHover={hoverEffect}
                  whileTap={{ scale: 0.95 }}
                  href="/#"
                >
                  {item}
                </motion.a>
                {/* </Link> */}
                {/* </a> */}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Mobile menu with animations */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="md:hidden overflow-hidden"
      >
        <motion.ul className="flex flex-col mt-4 space-y-2 px-2">
          {['Home', 'Events', 'Community'].map((item) => (
            <motion.li key={item} variants={itemVariants}>
              <motion.a 
                className="text-white bg-white/10 hover:bg-white/20 hover:text-yellow-300 py-2 px-4 rounded-lg block transition-all"
                whileHover={hoverEffect}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;