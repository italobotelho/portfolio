"use client";

import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, Rocket, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Code2 className="w-8 h-8" />;
      case 1: return <MonitorSmartphone className="w-8 h-8" />;
      case 2: return <Zap className="w-8 h-8" />;
      case 3: return <Rocket className="w-8 h-8" />;
      default: return <Code2 className="w-8 h-8" />;
    }
  };

  return (
    <section id="services" className="h-screen w-full snap-start flex items-center justify-center py-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                {t.services.title[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">{t.services.title[1]}</span>
              </h2>
              <p className="text-neutral-400 text-lg">
                {t.services.description}
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.services.items.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass p-8 rounded-2xl border-t border-white/10 hover:border-neon-blue/50 transition-colors group"
              >
                <div className="text-neutral-500 group-hover:text-neon-blue transition-colors mb-6 drop-shadow-[0_0_10px_rgba(0,243,255,0)] group-hover:drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]">
                  {getIcon(index)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">{service.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
