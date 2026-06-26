"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Briefcase, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import dynamic from "next/dynamic";

// Importação assíncrona (Lazy Load) do cenário 3D. 
// Evita que o Three.js pese no bundle inicial e desabilita SSR (ssr: false)
const Grid3D = dynamic(() => import("./Grid3D").then((mod) => mod.Grid3D), { ssr: false });

export function Hero() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const mainElement = document.querySelector("main");
    if (!mainElement) return;

    const handleScroll = () => {
      setIsScrolled(mainElement.scrollTop > 50);
    };

    mainElement.addEventListener("scroll", handleScroll);
    return () => mainElement.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen snap-start flex flex-col overflow-hidden">
      {/* Background Cyberpunk 3D Grid */}
      <Grid3D />

      {/* Navigation - Glassmorphism Header */}
      <header className={`fixed top-0 z-50 w-full flex items-center justify-between p-6 lg:px-12 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#0d1117]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold tracking-tighter text-white">
            &lt;ÍTALO/&gt;
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 bg-[#0d1117]/50 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
          {Object.entries(t.hero.nav).map(([key, value]) => (
            <a key={key} href={`#${key}`} className="text-sm text-neutral-300 hover:text-neon-blue hover:text-glow-blue transition-all">
              {value}
            </a>
          ))}
        </nav>

        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 text-sm font-mono text-neon-pink hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-neon-pink/30 hover:border-neon-pink hover:bg-neon-pink/10"
        >
          <Globe className="w-4 h-4" /> {language.toUpperCase()}
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-6 mt-20 max-w-7xl mx-auto w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0d1117] opacity-80 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Title & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
              <span className="text-white block mb-2">{t.hero.title[0]}</span>
              <span className="text-neon-blue text-glow-blue block">{t.hero.title[1]}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-300 mb-8 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.intro }} />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href="#portfolio" className="group relative px-8 py-4 bg-[#0d1117]/80 backdrop-blur-md rounded-lg font-heading text-white tracking-widest border border-neon-blue/50 hover:border-neon-blue transition-all overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-colors" />
                <div className="absolute -inset-2 bg-neon-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 group-hover:text-glow-blue transition-all">VER PROJETOS</span>
              </a>
              
              <a href="https://linkedin.com/in/italobotelho" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-lg font-heading text-neutral-300 border border-white/10 hover:border-white/30 hover:text-white transition-all flex items-center justify-center gap-3">
                LinkedIn <Briefcase className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: About Details */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block glass p-8 rounded-2xl relative border border-white/10 bg-[#0d1117]/40 backdrop-blur-xl"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-pink to-transparent rounded-l-2xl" />
            <h2 className="font-heading text-2xl font-bold mb-4 text-white">
              <span className="text-neon-pink text-glow-pink">{"//"}</span> {t.about.title}
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              {t.about.body}
            </p>
          </motion.div>
        </div>
      </main>

      {/* Fixed Social Links at Bottom Left */}
      <div className="absolute bottom-8 left-8 z-20 flex gap-4 hidden md:flex">
        <a href="https://github.com/italobotelho" target="_blank" rel="noreferrer" className="p-3 bg-white/5 backdrop-blur-md rounded-full text-neutral-400 hover:text-neon-blue border border-white/10 hover:border-neon-blue/50 transition-all group">
          <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
        <a href="https://linkedin.com/in/italobotelho" target="_blank" rel="noreferrer" className="p-3 bg-white/5 backdrop-blur-md rounded-full text-neutral-400 hover:text-neon-pink border border-white/10 hover:border-neon-pink/50 transition-all group">
          <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 right-8 z-20 text-neutral-500 text-sm font-mono flex items-center gap-2 hidden md:flex"
      >
        {t.hero.scroll}
      </motion.div>
    </section>
  );
}
