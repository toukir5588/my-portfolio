import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col dark group/design-root bg-background-dark font-display overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex w-full max-w-5xl flex-col gap-12">
            <Header />
            <main className="flex flex-col gap-20 md:gap-28 px-4">
              <Hero />
              <TechStack />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;