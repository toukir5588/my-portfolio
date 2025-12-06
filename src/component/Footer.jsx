import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-6 text-center text-sm text-slate-500"
    >
      <p>Designed & Built by John Doe</p>
    </motion.footer>
  );
}