import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured online store with user authentication, product management, and a Stripe-integrated checkout process.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYff77kfHTLJJOVZh4y92DvzMmGgLiVWIqAMeW12Kg0_n0lPNSy7pwMyU11gnPTTsHvuBddtF7LI7dmzwNXLc4g52SmX67SwfEaNtw25k6QNBBF-a4l4XKRRw3KjbxFFU8yo_wVsmoBg9pHhaLd9dUGbI6Nd2Zxvc47XCFIUZ0NXYxBnhSWohBI3qS6NrnQLPzMFCEC_2LpFOYsSFrpGlHBAcLWxD--XQXbpqjihvhtlAb_o3UgHy4jNkNFBZTVJluUwCcexd0fsEO",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    description:
      "A WebSocket-based chat application allowing users to communicate in real-time within different channels.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7hy-KHmkJntEtHbh4DZP5obJkGjiIO-OUu-o3g3U6SuCyQJnXytfCCAGdA_OtSXArPMzgRbJ5njCIlv3eevlR82X5yAK93ar_t6HPfwa4wEaFHmXVog7kYOAFv28Bobx2fOv7XLxSKu2dBpH10fapiA7n4EYW2MGlhJI9Va-U2fvF0CXL75Hnrmysqws-hVVgmcvwC5faNQXovZMTdLJ4D_BPY9uYHpfYULTcEhy1eJjzitzrTlU8mfgJb15iijKIFaLMix7WM1l-",
    tags: ["React", "Express", "Socket.IO"],
  },
  {
    id: 3,
    title: "Task Manager API",
    description:
      "A robust RESTful API for a task management application, featuring JWT authentication and CRUD operations for tasks and users.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkIBtvkhoWhWUH0ApBFy2DPZfOo06J8QUydxaW_WGDUTXc7aXQH2u0DLsgBIouqRQWoRn7hM_H1Zc18x-erM1oahkNfHeIjiAwZLTlRT5sYiJX94oXbHzEmrogVOGPv6JcBbOjdobZDxZNYT9Ce9XlkjGDFEUuL2Bk54IJB7TYix9_oeTu59ncKzyZsuLtWs3T_ruqTbi160AzxLdgQ_gJFSbUkey9-8VF8iSTsYQS4jImXPrjqhxvEdaw5yweuBc5a7K0C4uIzf46",
    tags: ["Node.js", "GraphQL", "Docker"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-4" id="projects">
      <motion.h2
        className="text-white text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 border-b-2 border-primary w-fit"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-surface-dark/80 backdrop-blur-sm border border-primary/30 flex flex-col gap-3 rounded-lg p-4 transition-all hover:border-primary hover:shadow-glow-primary group cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div
              className="bg-cover bg-center rounded-md aspect-video mb-2 group-hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url("${project.image}")` }}
            ></div>
            <h3 className="text-white text-xl font-bold leading-tight">
              {project.title}
            </h3>
            <p className="text-[#E0E0E0] text-sm font-normal leading-normal flex-grow">
              {project.description}
            </p>
            <div className="flex gap-2 text-xs font-medium text-primary mt-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/20 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
