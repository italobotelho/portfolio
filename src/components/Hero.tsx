"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import dynamic from "next/dynamic";

// Importação assíncrona (Lazy Load) do cenário 3D. 
// Evita que o Three.js pese no bundle inicial e desabilita SSR (ssr: false)
const Grid3D = dynamic(() => import("./Grid3D").then((mod) => mod.Grid3D), { ssr: false });

export function Hero() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background Cyberpunk 3D Grid */}
      <Grid3D />

      {/* Navigation - Glassmorphism Header */}
      <header className="absolute top-0 z-20 w-full flex items-center justify-between p-6 lg:px-12 bg-[#0d1117]/30 backdrop-blur-md border-b border-white/5">
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
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center mt-20">
        
        {/* Máscara de sombra radial para melhorar a legibilidade sobre o Grid 3D */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0d1117] opacity-60 blur-[100px] rounded-full pointer-events-none -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          {/* Título com line-height ajustado e glow text */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1] md:leading-[1.1]">
            <span className="text-white block mb-2">{t.hero.title[0]}</span>
            <span className="text-neon-blue text-glow-blue block">{t.hero.title[1]}</span>
          </h1>
          
          {/* Subtítulo mais legível */}
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            {t.hero.description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          {/* Botão Primário Estilo Neon Glass */}
          <a href="#portfolio" className="group relative px-8 py-4 bg-[#0d1117]/80 backdrop-blur-md rounded-lg font-heading text-white tracking-widest border border-neon-blue/50 hover:border-neon-blue transition-all overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-colors" />
            <div className="absolute -inset-2 bg-neon-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 group-hover:text-glow-blue transition-all">VER PROJETOS</span>
          </a>
          
          {/* Botão Secundário Alinhado */}
          <a href="#contact" className="px-8 py-4 rounded-lg font-heading text-neutral-300 border border-white/10 hover:border-white/30 hover:text-white transition-all flex items-center justify-center gap-3">
            Contato <Mail className="w-5 h-5" />
          </a>
        </motion.div>
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
        Scroll para explorar &darr;
      </motion.div>
    </section>
  );
}
