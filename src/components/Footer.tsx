"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full snap-start bg-[#0d1117] border-t border-white/5 py-12 px-6 flex flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-6">
        <a 
          href="https://github.com/italobotelho" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-neon-blue transition-colors"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a 
          href="https://www.linkedin.com/in/italobotelho/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-neon-blue transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a 
          href="mailto:fragabotelhoitalo@gmail.com" 
          className="text-neutral-500 hover:text-neon-blue transition-colors"
          aria-label="Email"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
      <p className="text-neutral-500 text-sm font-mono text-center">
        {t.contact?.footer || `© ${new Date().getFullYear()} Ítalo Fraga Botelho. All rights reserved.`}
      </p>
    </footer>
  );
}
