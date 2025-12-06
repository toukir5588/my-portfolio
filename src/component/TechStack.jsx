import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'MongoDB', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAINL2uMskSY5E0fcDR-_Q8uvBtzqlUxRphl5S97ok_0qA4TmzPG7CItRc1vQA0N85xDLD94R7fhGIbZakKijTnRXvKiLfv_s5YUTQA9HN7SpopXvR_QItcBYTL2RhWWMEtj8JzqyQi3_zdCOK7hTrJv6TxpVQUwlQvsqUA27d_uqHDSMMM9USTpGiyPPAGc9uwspYCcpxhHsEN56w91xBozJuFVPfC-Pe18Hk2Bou3H9pRrFXAOU2MNmJVBCw6baVHQlP4SIksXJUY' },
  { name: 'Express.js', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgaf4LoIgT5oJacvoArFLgNrn2sxfj-q5hZOCHxm2iX0RfO-Wl43pDC-ddvclW4yittBW72RtTkBsvuEtw6wfqjZwfIU6f-WI6e245n3TQD9sHaFU-ipUADEsA9AaRnQvn_fjGcNgmtFY1SrHXHRsb3RtU9SCFve0F9QloK1z0yCl4kiSzKiljZyFhlFFH9Gr2fBEzFogtzwrdi9daS2Ma5KU8hU8dgwuewnhCvU4Y--1-XiTtLUPH0evtVOZHi2yidKN4vevZRnYb', invert: true },
  { name: 'React', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEob5ru8WBAVegotPQUk3qulpr_-2QNi5vHsr3ThbLmtM0wdSpBPkWXvYP7fySlGY2zFBIS1y6t8iXspT7YjzObxv0FKG-PNdkKONYiViQfOXTN97NNr2U6-tg_jIyIJFHAgk0UuuhBVZG_pnzgJ3G86MhRmRDm9c2cY_VFS_OdQcpNcwP_AiC1_kt85LrJ8Ao6uU0JFvjfLcRl3pi--JZSw5CoBcmPTMeZ8qjNY-_wV2VrGRf3irL-TXSCDvkVixK_-YWurU4cgwC' },
  { name: 'Node.js', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvHrtafldXyu_FI_aFE_ras2Sx-FaNzi36gxa8jv5DVymtjzDh6bLIxTCh09Gfhw2TpmHC1K29OqarxkbNfTJ65_F9QBNBg7D-Kt6xthiRNrULqlsWVmXUmwqgfznug2H6mt8aGb1bD2L5HNGAip0WrM-JMetEQrNz9qxZpGdpTRjsbBynhtGSh9tBwGO4URzvSLBlu_U9l05xeU9NodkquCnHUu4vvUnQa5vUjRj0m2x0TLtRi_1sAtLJ1p_4BceMbwvyfXvmH3M5' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TechStack() {
  return (
    <section>
      <h2 className="text-slate-200 text-[22px] font-bold px-4 pb-3 pt-5 inline-block">
        <span className="text-accent">01.</span> My Tech Stack
      </h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {techStack.map((tech, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/40 p-6 transition-all hover:border-accent/50"
          >
            <img alt={`${tech.name} icon`} className={`h-16 w-16 ${tech.invert ? 'invert' : ''}`} src={tech.icon} />
            <p className="text-slate-300 text-base font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}