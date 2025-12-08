import {  useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    
    gsap.registerPlugin();

    
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0.5,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: false,
        },
      });
    });
  }, []);

  return (
    <div className="dark">
      <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-[#E0E0E0]">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-11/12 flex-1 w-full">
              <Header />

              <main className="flex flex-col gap-16 md:gap-24">
                <HeroSection />
                <ProjectsSection />
                <SkillsSection />
                <AboutSection />
                <ContactSection />
              </main>

              <Footer />
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default App;
