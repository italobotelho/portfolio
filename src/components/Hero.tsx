"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Placeholder for 3D/Video */}
      <div className="absolute inset-0 z-0 bg-black pointer-events-none">
        {/* Soft top gradient to simulate the wave header from the card */}
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-neon-blue/30 via-neon-pink/10 to-transparent blur-[100px]" />
      </div>

      {/* Navigation */}
      <header className="relative z-10 w-full flex items-center justify-between p-6 lg:px-12">
        <div className="text-2xl font-heading font-bold text-white tracking-wider">
          {"<ÍTALO/>"}
        </div>
        <div className="flex items-center gap-4">
          <nav className="glass px-6 py-3 rounded-full hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-neon-blue transition-colors">{t.hero.nav.about}</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-neon-blue transition-colors">{t.hero.nav.portfolio}</a>
            <a href="#services" className="text-sm font-medium hover:text-neon-pink transition-colors">{t.hero.nav.services}</a>
            <a href="#contact" className="text-sm font-medium hover:text-neon-pink transition-colors">{t.hero.nav.contact}</a>
          </nav>
          <button 
            onClick={toggleLanguage}
            className="glass p-3 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors font-bold text-sm uppercase text-neon-blue"
            title="Toggle Language"
          >
            <Globe className="w-4 h-4 mr-1" /> {language}
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter"
        >
          {t.hero.title[0]} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink text-glow-blue">{t.hero.title[1]}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-neutral-400 max-w-2xl text-lg md:text-xl"
        >
          {t.hero.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex items-center gap-6"
        >
          <a href="#portfolio" className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-neon-pink rounded-md hover:bg-neon-pink/80 transition-all shadow-lg hover:shadow-neon-pink/30">
            {t.hero.buttons.viewProjects}
          </a>
          
          <a href="#contact" className="px-8 py-4 rounded-md font-bold text-foreground border border-foreground/20 hover:border-neon-pink hover:text-neon-pink transition-all flex items-center gap-2">
            {t.hero.buttons.contact} <Mail className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Socials - Bottom */}
      <footer className="relative z-10 w-full flex justify-between items-end p-6 lg:px-12 pb-8">
        <div className="flex gap-4">
          <a href="https://github.com/italobotelho" target="_blank" className="p-3 glass rounded-full hover:text-neon-blue hover:border-neon-blue transition-all">
            <Code2 className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/italobotelho/" target="_blank" className="p-3 glass rounded-full hover:text-neon-blue hover:border-neon-blue transition-all">
            <Briefcase className="w-5 h-5" />
          </a>
          <a href="mailto:fragabotelhoitalo@gmail.com" className="p-3 glass rounded-full hover:text-neon-pink hover:border-neon-pink transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <div className="text-neutral-500 text-sm font-medium animate-pulse">
          Scroll para explorar ↓
        </div>
      </footer>
    </section>
  );
}
