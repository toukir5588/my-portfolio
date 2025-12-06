import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div className="@container" variants={containerVariants} initial="hidden" animate="visible">
      <div className="@[480px]:p-4">
        <motion.div className="flex min-h-[480px] flex-col gap-6 items-start justify-center text-left @[480px]:gap-8">
          <motion.div className="flex flex-col gap-2" variants={itemVariants}>
            <p className="text-accent text-base font-medium">Hi, my name is</p>
            <h1 className="text-slate-200 text-4xl font-black @[480px]:text-6xl">
              Full-Stack MERN Developer
            </h1>
            <h2 className="text-slate-400 text-sm @[480px]:text-lg max-w-xl pt-2">
              I build high-performance, scalable web applications with a focus on modern technologies, clean code, and great user experiences.
            </h2>
          </motion.div>
          <motion.button variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary/20 text-accent border border-accent hover:bg-primary/40 transition-colors text-sm font-bold @[480px]:text-base">
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}