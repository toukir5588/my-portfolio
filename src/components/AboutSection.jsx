import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="flex flex-col gap-4" id="about">
      <motion.h2
        className="text-white text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 border-b-2 border-primary w-fit"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <motion.div
          className="md:col-span-1 flex justify-center"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            className="rounded-full object-cover size-48 border-4 border-primary/50 hover:border-accent-green transition-colors duration-300"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSFB3LnbQz5tzMRj-IuN11NIJiwvPG0gBaReGqXEgsVw8ZItNgdp-6gWG96UsRDIq3_HwCcH5sFrcrdYrKEyAzTiTOTzEfrj8xPFZvglaZPwR0MdyaRMU9CLIMZQJAHaTmCJq1QDf22m50M0Nwx2rwiraddNdPx_5S7WgVJYamDiiF5Cdv6n0OVzZridyesx6zPejHHjNddnAGxzR_Ov2_xXnq7H-NOiao0NbgElSiL5ePl_Fr_9MJYOIR-upndGL3tBd00t-4lNQp"
            alt="Professional headshot"
          />
        </motion.div>

        <motion.div
          className="md:col-span-2 text-[#E0E0E0] text-base leading-relaxed space-y-4"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            I'm a passionate MERN stack developer dedicated to crafting
            efficient, scalable, and user-friendly web applications. With a
            strong foundation in JavaScript, I thrive on solving complex
            problems and turning innovative ideas into reality.
          </p>
          <p>
            My experience spans from building responsive front-end interfaces
            with React to designing and implementing robust back-end APIs with
            Node.js and Express. I am always eager to learn new technologies and
            continuously improve my skill set to deliver high-quality digital
            solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
