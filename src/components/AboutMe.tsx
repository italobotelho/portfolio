"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function AboutMe() {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen w-full flex items-center py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-neon-pink/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="text-neon-pink text-glow-pink">{"//"}</span> {t.about.title}
          </h2>
          
          <div className="glass p-8 rounded-2xl relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-pink to-transparent rounded-l-2xl" />
            <p className="text-neutral-300 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.intro }} />
            <p className="text-neutral-400 text-base leading-relaxed mt-4">
              {t.about.body}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full hidden lg:block"
        >
          {/* Espaço para uma imagem 3D, avatar ou grafismo do usuário */}
          <div className="absolute inset-0 glass-card flex items-center justify-center border-neon-pink/30 shadow-[0_0_50px_rgba(255,0,234,0.1)]">
            <span className="font-heading tracking-widest text-neutral-600 uppercase">{t.about.interactive}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
