"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="min-h-screen w-full py-20 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold inline-block relative">
            {t.portfolio.title}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-neon-blue shadow-[0_0_10px_var(--color-neon-blue)] rounded-full" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.portfolio.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card group h-[400px] flex flex-col justify-end p-6 relative overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-neutral-900/80 -z-10 group-hover:bg-neutral-800/80 transition-colors" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-neutral-400 mb-6 text-sm line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-neon-blue bg-neon-blue/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-neon-blue transition-colors">
                    <Code className="w-4 h-4" /> {t.portfolio.links.code}
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-neon-blue transition-colors">
                    <ExternalLink className="w-4 h-4" /> {t.portfolio.links.live}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
