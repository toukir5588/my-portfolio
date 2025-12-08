import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Habit Hero — Build Streaks. Boost Productivity.",
    description:
      "A powerful web app that helps users create, track, and manage daily habits to stay consistent and productive. Track your progress, maintain streaks, and visualize your growth with interactive UI and analytics.",
    image:
      "https://i.ibb.co.com/HDg5LsT0/Screenshot-3dhfgdh.jpg",
    tags: ["React", "Node.js", "MongoDB", "Firebase"],
    link: 'https://habit-hero-5d559.web.app/',
  },
  {
    id: 2,
    title: "Toy-Galaxy — Local Kids' Toy Store Platform",
    description:
      "Toy-Galaxy is a vibrant and playful online marketplace that connects families with local toy sellers. This platform allows users to browse various toys, view detailed information, and give feedback or ratings for their purchases. By focusing on user convenience and engaging experiences, Toy-Galaxy encourages creativity and supports local businesses.",
    image:
      "https://i.ibb.co.com/8LvLGMdb/Screenshot-24.jpg",
    tags: ["React", "Tailwind", "Firebase"],
    link: 'https://toy-galaxy-d10c1.web.app//',
  },
  {
    id: 3,
    title: "Tick Tock Time (E-commerce Website)",
    description:
      "An e-commerce web application where users can explore and purchase a wide variety of premium watch collections. It offers a seamless shopping experience with modern UI, product details, and smooth navigation.",
    image:
      "https://i.ibb.co.com/wrrfZJbL/Screenshot-25.jpg",
    tags: ["Node.js", "GraphQL", "Docker"],
    link: 'https://habit-hero-5d559.web.app/',
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

const handleLiveLink = (link) => {
   link &&  window.open( link,'_blank') ;
}

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-4" id="projects">
      <motion.h2
        className="text-white text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 border-b-2 border-pink-500 w-fit"
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
          onClick={()=>handleLiveLink(project.link)}
            key={project.id}
            className="bg-surface-dark/80 backdrop-blur-sm border border-primary/30 flex flex-col gap-3 rounded-lg p-4 transition-all hover:border-accent-green/50 hover:shadow-glow-primary group cursor-pointer"
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
