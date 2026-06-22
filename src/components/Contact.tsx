"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="min-h-screen w-full flex flex-col justify-end relative">
      <div className="flex-1 flex items-center py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-5xl md:text-7xl font-black text-white/10 uppercase tracking-tighter relative">
              {t.contact.title[0]}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl text-white text-glow-pink">
                {t.contact.title[1]}
              </span>
            </h2>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 md:p-12 w-full mx-auto space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-neon-pink uppercase tracking-widest">{t.contact.labels.id}</label>
                <input 
                  type="text" 
                  placeholder={t.contact.placeholders.name} 
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink focus:shadow-[0_0_10px_rgba(255,0,234,0.2)] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-neon-pink uppercase tracking-widest">{t.contact.labels.channel}</label>
                <input 
                  type="email" 
                  placeholder={t.contact.placeholders.email} 
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink focus:shadow-[0_0_10px_rgba(255,0,234,0.2)] transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-mono text-neon-pink uppercase tracking-widest">{t.contact.labels.message}</label>
              <textarea 
                rows={5}
                placeholder={t.contact.placeholders.message} 
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink focus:shadow-[0_0_10px_rgba(255,0,234,0.2)] transition-all resize-none"
              />
            </div>

            <button className="w-full bg-white text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-neon-pink hover:text-white hover:shadow-[0_0_20px_rgba(255,0,234,0.4)] transition-all">
              <Send className="w-5 h-5" /> {t.contact.button}
            </button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-black/80 backdrop-blur-md py-6 px-6 text-center">
        <p className="text-neutral-500 font-mono text-sm">
          {t.contact.footer}
        </p>
      </footer>
    </section>
  );
}
