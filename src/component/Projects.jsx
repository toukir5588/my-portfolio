import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, cart functionality, and a secure checkout process.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPwTZENy7XYq3MlkupARjBIijkAm-zUeWF5fkxE7_Aei0Xe__wuXh1qaGENN5bUkMo68BD6Cj8Yo9gofPDGuhehCh299uxPoEJLnD8g20ShT_7bqfd0geP5IDws287mS6-53_yxnYKe0Wc0bs6bC5tQwiHxXgzO5LvO3M1hoM6Yk3gnWL6JHyzIImaT53FiJqMDSKZtz3FSMhwhKR7YViSMXGnqFjkpfNAz831HXK0tL17-XK2YREXh_pTqQD1H2nuhsyaQT9gk2Bv',
    techs: ['React', 'Node.js', 'Stripe', 'MongoDB'],
  },
  {
    title: 'Analytics Dashboard',
    description: 'A data visualization tool for tracking user metrics and engagement with interactive charts and graphs.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtS-6rk8zZ3l6I1J1pCdktouGElO4Rqyx38Z8YDZa4I9Stj-Kg283dg0aLgf9K-uokVsqpZ-KY9A8EoGMqPBpx1owrwedb3aST_PnLlSHyd1POCYVVzfsdlBFeTvj_e5IUSZjnfrzHjC4Jcu5BEqmlkTxs3lTPasfVjpU7EtFyB9TXHOaZkc4R2jt33Q4XJ8k8SoFi90EhGKg-bvRCJv844r2s8z7MMwoxILgoSE9Ckq-2FGiJljp11leXwGwEGIOMbgAqUV-LeKqX',
    techs: ['React', 'D3.js', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Content Management System',
    description: 'A headless CMS and blog platform with a Markdown editor and REST API for content delivery.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6GFwJhicjFC_mLPraAJii6D2jMX2gqY4gxZoCcsb9fl5J8jXl0IZMj8U5YRHZwQOb-AHP82dJLkAu3nxneKRLZMP6G0RLp6ma4xC93wjdjG4Isq0XYRjyJxa6OnYO4RiX5uZ0i3UlApXnQVBTrPeyASLpKHtufOHfeqvGxREOmIWsMZjvvp13yNLAOXGZafpcyc7OGPbIPhxAyzsANN9ZBpesqVU1QcSTPcCZcBYtkITwNkJwMG8oIJYXgvqWU2FnRKHBoAlVXKeM',
    techs: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
  },
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

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-slate-200 text-[22px] font-bold px-4 pb-3 pt-5 inline-block">
        <span className="text-accent">02.</span> Projects
      </h2>
      <motion.div
        className="grid grid-cols-1 gap-6 p-4 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="flex flex-col gap-4 rounded-lg border border-slate-800 bg-slate-900/40 p-6 transition-all hover:border-primary/50"
          >
            <div
              className="h-40 w-full rounded-md bg-cover bg-center"
              style={{ backgroundImage: `url('${project.image}')` }}
            ></div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-slate-200">{project.title}</h3>
              <p className="text-sm text-slate-400">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-accent">
              {project.techs.map((tech, i) => (
                <span key={i} className="rounded-full bg-primary/20 px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4 pt-2">
              <a className="text-slate-300 transition-colors hover:text-accent flex items-center gap-1" href="#">
                <FiExternalLink size={16} /> Live Demo
              </a>
              <a className="text-slate-300 transition-colors hover:text-accent flex items-center gap-1" href="#">
                <FiGithub size={16} /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}