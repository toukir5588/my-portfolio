import { motion } from "framer-motion";
import { FaDatabase, FaServer, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiJavascript } from "react-icons/si";

const skillIcons = [
  { name: "MongoDB", icon: FaDatabase, color: "#13C659" },
  { name: "Express.js", icon: FaServer, color: "#90C53F" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
];

const skillBars = {
  Frontend: [
    { name: "React.js / Next.js", percentage: 90 },
    { name: "Tailwind CSS", percentage: 95 },
    { name: "React Router", percentage: 85 },
  ],
  "Backend & Tools": [
    { name: "Node.js / Express.js", percentage: 85 },
    { name: "MongoDB", percentage: 80 },
    { name: "Firebase / JWT", percentage: 75 },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const SkillBar = ({ name, percentage }) => {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between">
        <span className="text-base font-semibold text-white">{name}</span>
        <span className="text-sm font-medium text-pink-500">{percentage}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-pink-500 to-pink-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <section className="flex flex-col gap-12 py-16 md:py-24" id="skills">
      {/* Header */}
      <motion.div
        className="flex flex-col items-center gap-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="inline-block rounded bg-pink-500 px-4 py-2">
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            Professional Skills
          </span>
        </div>
        <h2 className="text-4xl font-black text-white sm:text-5xl md:text-6xl">
          My Technical <span className="text-pink-400">Expertise</span>.
        </h2>
        <p className="max-w-2xl text-base text-white/60 sm:text-lg">
          Proficient in the full MERN stack and modern web tools.
        </p>
      </motion.div>

      {/* Icon Grid */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillIcons.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center gap-2 text-[#E0E0E0] transition-transform"
              variants={itemVariants}
              whileHover={{
                scale: 1.15,
                color: skill.color,
              }}
            >
              <IconComponent
                className="h-16 w-16"
                style={{ color: skill.color }}
              />
              <span className="text-xs sm:text-sm font-medium">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Skill Bars */}
      <motion.div
        className="grid grid-cols-1 gap-12 rounded-xl border border-white/10 bg-white/5 p-8 md:grid-cols-2 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Frontend Skills */}
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold text-pink-500">Frontend</h3>
          <div className="flex flex-col gap-6">
            {skillBars.Frontend.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>

        {/* Backend & Tools Skills */}
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold text-pink-500">Backend & Tools</h3>
          <div className="flex flex-col gap-6">
            {skillBars["Backend & Tools"].map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
