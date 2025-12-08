import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/30 px-6 sm:px-10 py-4">
      <motion.div
        className="flex items-center gap-4 text-white"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="size-5 text-pink-500">
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Toukir Ahammed
        </h2>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.div
        className="hidden sm:flex flex-1 justify-end gap-8"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-9">
          {navItems.map((item) => (
            <a
              key={item.label}
              className="text-white text-sm font-medium leading-normal hover:text-pink-500 transition-colors duration-300"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        className="sm:hidden text-accent-green"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </motion.button>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="absolute top-16 left-0 right-0 bg-surface-dark border-b border-accent-green sm:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="text-white text-sm font-medium leading-normal hover:text-pink-500 transition-colors"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
