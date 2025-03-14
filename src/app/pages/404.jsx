"use client";

import { motion } from "framer-motion";
import { PixelBorder } from "../components/PixelComponent";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const NotFound = () => {
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

  return (
    <div>
    <Navbar/>
    <motion.div 
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 pixel-bg"
      variants={containerVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
    >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gray-900 p-4"
      variants={itemVariants}
    >
      <PixelBorder className="max-w-lg w-full mx-auto p-8 text-center">
        <h1 className="text-6xl font-bold text-red-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-2">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-300 mb-6">
          Sepertinya kamu tersesat dalam dunia piksel kami. Jangan khawatir,
          kamu bisa kembali ke Beranda.
        </p>
          <a href="/" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded transition-colors">
            Kembali ke Beranda
          </a>
      </PixelBorder>
    </motion.div>
    </motion.div>
    </div>
  );
};

export default NotFound;
