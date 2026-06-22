"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Star, GitFork } from "lucide-react";
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
    // Busca os repositórios reais do Github para pegar estrelas, forks e links atualizados
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

  // Mapeamento dos nomes do dicionário para os nomes reais dos repositórios no Github
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
                className="glass-card group h-[400px] flex flex-col justify-end p-6 relative overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-neutral-900/80 -z-10 group-hover:bg-neutral-800/80 transition-colors" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-2xl font-bold text-white">{project.title}</h3>
                    {githubData && (
                      <div className="flex items-center gap-3 text-neutral-400 text-xs font-mono">
                        <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" /> {githubData.stargazers_count}</span>
                        <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {githubData.forks_count}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-neutral-400 mb-6 text-sm line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-neon-blue bg-neon-blue/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                    {githubData?.language && !project.tags.includes(githubData.language) && (
                      <span className="text-xs font-mono text-neon-pink bg-neon-pink/10 px-2 py-1 rounded">
                        {githubData.language}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <a href={githubData ? githubData.html_url : "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-neon-blue transition-colors">
                      <Code className="w-4 h-4" /> {t.portfolio.links.code}
                    </a>
                    {(githubData?.homepage || project.title === "SIEST") && (
                      <a href={githubData?.homepage || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-neon-blue transition-colors">
                        <ExternalLink className="w-4 h-4" /> {t.portfolio.links.live}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
