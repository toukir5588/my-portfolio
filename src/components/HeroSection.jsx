import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm Toukir Ahammed";
  const subtitleText = "a FrontEnd Developer";

  useEffect(() => {
    // Typing animation for main heading
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Rotating circle animation
    gsap.to(".rotate-circle", {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "none",
    });
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto flex w-full flex-col items-center justify-between lg:flex-row lg:gap-16">
        {/* Left: Text Content */}
        <motion.div
          className="flex flex-col gap-8 lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-6">
            <motion.div
              className="text-sm font-medium tracking-wide text-primary/80"
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              WELCOME TO MY WORLD
            </motion.div>

            {/* Typing animation for main heading */}
            <motion.h1
              className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl min-h-[1.2em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {displayText}
              <span className="text-pink-500 animate-pulse">|</span>
            </motion.h1>

            {/* Animated subtitle */}
            <motion.h2
              className="text-xl font-bold text-primary sm:text-2xl"
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              a <span className="text-pink-500">Front</span>End Developer
            </motion.h2>

            {/* Animated description */}
            <motion.p
              className="max-w-xl text-base text-white/70 sm:text-lg leading-relaxed"
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              I am a passionate Frontend Developer with experience in building
              responsive and interactive web applications using React, Tailwind
              CSS, and modern JavaScript features. I focus on creating seamless
              user experiences and writing clean, maintainable code.
            </motion.p>
          </div>

          {/* Buttons and Links */}
          <motion.div
            className="flex flex-col gap-6"
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium tracking-wider text-white/60">
                  FIND WITH ME
                </span>
                <div className="flex items-center gap-4">
                  <motion.a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white/60 transition-colors hover:border-primary hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.435-.103.25-.129.599-.129.948v5.422h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.575 2.896-1.575 2.113 0 3.695 1.385 3.695 4.37v5.487zM5.337 5.433c-1.144 0-1.915-.758-1.915-1.708 0-.951.77-1.708 1.906-1.708.18 0 .356.012.528.036 1.144 0 1.915.757 1.915 1.708 0 .95-.771 1.708-1.915 1.708H5.337zm1.946 15.019H3.391V8.806h3.892v11.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white/60 transition-colors hover:border-primary hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white/60 transition-colors hover:border-primary hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <motion.button
                className="inline-block px-8 py-3 font-bold text-white transition-all hover:text-pink-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                MY RESUME
              </motion.button>
              <motion.button
                className="inline-block rounded-lg bg-pink-500 px-8 py-3 font-bold text-white transition-all hover:bg-pink-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                DOWNLOAD RESUME
              </motion.button>
              <motion.a
                href="#contact"
                className="inline-block px-8 py-3 font-bold text-white transition-all hover:text-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT ME
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Image with Animated Background */}
        <motion.div
          className="flex justify-center lg:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-80 w-80 sm:h-96 sm:w-96 md:h-[450px] md:w-[450px]">
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-pink-500/20 to-transparent blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Rotating outer circle */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-border"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage:
                  "conic-gradient(from 0deg, #0d7ff2, #ec4899, #0d7ff2)",
              }}
            />

            {/* Image container */}
            <div className="relative m-1 h-[calc(100%-8px)] w-[calc(100%-8px)] overflow-hidden rounded-full border-2 border-primary/50">
              <img
                src="https://i.ibb.co.com/Kxmh8gD8/FB-IMG-16888629159756489-removebg-preview-2.png"
                alt="Toukir Ahammed"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating particles effect */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-primary/60"
                animate={{
                  x: [0, 100 * Math.cos(((i * 360) / 3) * (Math.PI / 180)), 0],
                  y: [0, 100 * Math.sin(((i * 360) / 3) * (Math.PI / 180)), 0],
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  marginTop: "-4px",
                  marginLeft: "-4px",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
