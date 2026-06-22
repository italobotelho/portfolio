"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Star, GitFork, Database, Cpu, Activity, Layout, Terminal, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface GithubRepo {
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  homepage: string | null;
}

export function Portfolio() {
  const { t } = useLanguage();
  const [repos, setRepos] = useState<Record<string, GithubRepo>>({});

  useEffect(() => {
    fetch("https://api.github.com/users/italobotelho/repos")
      .then(res => res.json())
      .then((data: GithubRepo[]) => {
        if (Array.isArray(data)) {
          const repoMap: Record<string, GithubRepo> = {};
          data.forEach(repo => {
            repoMap[repo.name.toLowerCase()] = repo;
          });
          setRepos(repoMap);
        }
      })
      .catch(console.error);
  }, []);

  const getRepoMatch = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("siest")) return repos["siest"];
    if (titleLower.includes("8-puzzle")) return repos["8-puzzle-solver-ai"];
    if (titleLower.includes("casa de maria")) return repos["casa-de-maria-v2"];
    if (titleLower.includes("genetic")) return repos["genetic-algorithm-nqueens"];
    if (titleLower.includes("cesta")) return repos["cesta_basica"];
    if (titleLower.includes("imrs")) return repos["imrs_educacao_2020"];
    return null;
  };

  // Função auxiliar para definir um ícone gigante baseado no título do projeto
  const getWatermarkIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("siest")) return <Activity className="w-full h-full text-neon-blue" strokeWidth={1} />;
    if (titleLower.includes("casa")) return <Layout className="w-full h-full text-neon-pink" strokeWidth={1} />;
    if (titleLower.includes("genetic") || titleLower.includes("puzzle")) return <Cpu className="w-full h-full text-neon-blue" strokeWidth={1} />;
    if (titleLower.includes("cesta") || titleLower.includes("imrs")) return <Database className="w-full h-full text-neon-pink" strokeWidth={1} />;
    return <Code2 className="w-full h-full text-white" strokeWidth={1} />;
  };

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
          {t.portfolio.projects.map((project, index) => {
            const githubData = getRepoMatch(project.title);
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-card group flex flex-col justify-between p-8 relative overflow-hidden border border-white/5 hover:border-neon-blue/30 transition-all duration-500 min-h-[400px]"
              >
                {/* Background Glow Effect */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px] group-hover:bg-neon-pink/20 transition-colors duration-700 pointer-events-none" />
                
                {/* Watermark Icon */}
                <div className="absolute -top-10 -right-10 w-48 h-48 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none transform rotate-12 group-hover:rotate-0">
                  {getWatermarkIcon(project.title)}
                </div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Top content: Title and Description */}
                  <div className="mb-6">
                    <h3 className="font-heading text-2xl font-semibold text-white tracking-wide mb-4 leading-snug group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono font-medium text-neon-blue bg-neon-blue/20 px-3 py-1.5 rounded-md border border-neon-blue/10 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                    {githubData?.language && !project.tags.includes(githubData.language) && (
                      <span className="text-xs font-mono font-medium text-neon-pink bg-neon-pink/20 px-3 py-1.5 rounded-md border border-neon-pink/10 backdrop-blur-sm">
                        {githubData.language}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom content: Stats and Links */}
                <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                  <div className="flex gap-4">
                    <a href={githubData ? githubData.html_url : "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-neon-blue transition-colors group/link">
                      <Code className="w-4 h-4 group-hover/link:animate-pulse" /> {t.portfolio.links.code}
                    </a>
                    {(githubData?.homepage || project.title === "SIEST") && (
                      <a href={githubData?.homepage || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-neon-pink transition-colors group/link">
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" /> {t.portfolio.links.live}
                      </a>
                    )}
                  </div>

                  {githubData && (
                    <div className="flex items-center gap-4 text-neutral-400 text-xs font-mono">
                      <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500/80" /> {githubData.stargazers_count}</span>
                      <span className="flex items-center gap-1"><GitFork className="w-4 h-4 text-neutral-500" /> {githubData.forks_count}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
