import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="mt-16 md:mt-24 py-6 border-t border-primary/30 flex flex-col sm:flex-row items-center justify-between gap-4 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-sm text-[#E0E0E0]">
        © {currentYear} Toukir Ahammed. All rights reserved.
      </p>
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.a
          className="text-white hover:text-accent-green transition-colors text-2xl"
          href="https://github.com/toukir5588"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiGithub />
        </motion.a>
        <motion.a
          className="text-white hover:text-accent-green transition-colors text-2xl"
          href="https://www.linkedin.com/in/toukirahammed/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiLinkedin />
        </motion.a>
      </motion.div>
    </motion.footer>
  );
}
