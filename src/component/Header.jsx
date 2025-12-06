import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between whitespace-nowrap px-4 py-3 md:px-10 sticky top-5 z-50 bg-background-dark/80 backdrop-blur-sm rounded-lg border border-slate-700/50"
    >
      <div className="flex items-center gap-4 text-accent">
        <div className="size-6">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold">John Doe</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="hidden items-center gap-9 md:flex">
          <a href="#home" className="text-slate-300 hover:text-accent text-sm font-medium transition-colors">Home</a>
          <a href="#projects" className="text-slate-300 hover:text-accent text-sm font-medium transition-colors">Projects</a>
          <a href="#contact" className="text-slate-300 hover:text-accent text-sm font-medium transition-colors">Contact</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </motion.header>
  );
}