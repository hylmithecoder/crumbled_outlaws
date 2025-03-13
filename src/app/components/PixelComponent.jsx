import React from "react";
import { motion } from "framer-motion";

export const PixelBorder = ({ children, className = '' }) => {
  return (
    <div className={`relative p-4 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-lg">
        <div className="absolute inset-0 bg-gray-900 rounded-lg border-4 border-dashed border-blue-400"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const PixelButton = ({ children, onClick }) => {
  return (
    <motion.button
      className="px-4 py-2 bg-blue-500 text-white font-pixel rounded relative shadow-[inset_-2px_-2px_0_0_rgba(0,0,0,0.3),inset_2px_2px_0_0_rgba(255,255,255,0.5)] hover:shadow-[inset_2px_2px_0_0_rgba(0,0,0,0.3),inset_-2px_-2px_0_0_rgba(255,255,255,0.5)]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
