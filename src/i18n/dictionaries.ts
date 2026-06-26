export const dictionaries = {
  pt: {
    hero: {
      nav: { services: "Habilidades", portfolio: "Projetos" },
      title: ["Transformando", "Dados em Inteligência"],
      description: "Estudante de Ciência de Dados e Inteligência Artificial. Especialista em IA, análise exploratória e modelagem de dados.",
      buttons: { viewProjects: "VER PROJETOS", contact: "Contato" },
      scroll: "Scroll para explorar ↓"
    },
    about: {
      title: "SOBRE MIM",
      intro: "Olá, eu sou o <strong>Ítalo Fraga Botelho</strong>. Sou estudante de Ciência de Dados e Inteligência Artificial na PUC-Campinas, com formação técnica em Desenvolvimento de Sistemas.",
      body: "Tenho experiência prática no desenvolvimento de algoritmos de IA, pipelines de análise exploratória e modelagem de dados. Sou proficiente em Python e SQL, com forte capacidade analítica voltada para a resolução de problemas reais e suporte acadêmico em estatística. Estou sempre em busca de desafios em Pesquisa e Desenvolvimento (P&D).",
      interactive: "Elemento Interativo"
    },
    portfolio: {
      title: "PROJETOS EM DESTAQUE",
      projects: [
        {
          title: "SIEST",
          description: "Plataforma de inteligência urbana e saúde pública para monitoramento epidemiológico de arboviroses em Campinas. Pipelines ETL integrando dados do SINAN, CNES, IBGE e Mosqlimate.",
          tags: ["Python", "PyMongo", "MongoDB", "Next.js"],
        },
        {
          title: "8-Puzzle Solver AI",
          description: "Resolvedor inteligente de alto desempenho para o clássico jogo de blocos desenvolvido em C. Utiliza BFS e IDDFS com estruturas dinâmicas na memória.",
          tags: ["Linguagem C", "IA Clássica", "Algoritmos de Busca"],
        },
        {
          title: "Casa de Maria",
          description: "Sistema robusto de gestão clínica e agendamento automatizado sob a arquitetura MVC, com autenticação rigorosa e interface dinâmica em tempo real.",
          tags: ["PHP", "Laravel", "MySQL", "MVC"],
        },
        {
          title: "Genetic Algorithm N-Queens",
          description: "Algoritmo Genético implementado em C para solucionar o clássico problema das N-Rainhas (N-Queens), focado em otimização e inteligência artificial.",
          tags: ["C", "Genetic Algorithm", "AI"],
        },
        {
          title: "Cesta Básica",
          description: "Análise Econômica da Cesta Básica (2022–2026) empregando técnicas de Data Science, ETL e Forecasting com Power BI.",
          tags: ["Data Analysis", "Power BI", "ETL"],
        },
        {
          title: "IMRS Educação 2020",
          description: "Análise estatística e exploratória de três indicadores educacionais IMRS 2020, utilizando a stack de dados em Python (Pandas, Seaborn).",
          tags: ["Python", "Jupyter", "Statistics"],
        }
      ],
      links: { code: "Código", live: "Live" },
      scroll: "Role para baixo para explorar a experiência imersiva."
    },
    services: {
      title: ["MINHAS", "HABILIDADES"],
      description: "Conjunto de ferramentas e linguagens focado em dados, inteligência artificial e ecossistema web moderno.",
      items: [
        {
          title: "Linguagens de Programação",
          description: "Proficiência em Python, C, SQL e JavaScript, com foco em desenvolvimento back-end e ciência de dados."
        },
        {
          title: "Dados & Business Intelligence",
          description: "Modelagem e visualização de dados utilizando Power BI, Pandas, Matplotlib e Excel Avançado."
        },
        {
          title: "Frameworks & Web",
          description: "Desenvolvimento de APIs e sistemas web robustos utilizando Node.js e PHP com Laravel."
        },
        {
          title: "Ferramentas & Cloud",
          description: "Experiência em plataformas de nuvem (AWS, Google Cloud) e ferramentas modernas (Git, GitHub, Gemini)."
        }
      ]
    },
    contact: {
      title: ["Contato", "INICIAR TRANSMISSÃO"],
      labels: { id: "Identificação", channel: "Canal de Retorno", message: "Mensagem de Dados" },
      placeholders: { name: "Seu Nome", email: "seu@email.com", message: "Detalhe o seu projeto..." },
      button: "Enviar Mensagem",
      footer: `© ${new Date().getFullYear()} Desenvolvido no Futuro. Todos os direitos reservados.`
    }
  },
  en: {
    hero: {
      nav: { services: "Skills", portfolio: "Projects" },
      title: ["Transforming", "Data into Intelligence"],
      description: "Data Science and Artificial Intelligence student. Specialist in AI, exploratory data analysis, and data modeling.",
      buttons: { viewProjects: "VIEW PROJECTS", contact: "Contact" },
      scroll: "Scroll to explore ↓"
    },
    about: {
      title: "ABOUT ME",
      intro: "Hi, I'm <strong>Ítalo Fraga Botelho</strong>. I am a Data Science and Artificial Intelligence student at PUC-Campinas, with a technical background in Systems Development.",
      body: "I have practical experience in developing AI algorithms, exploratory analysis pipelines, and data modeling. I am proficient in Python and SQL, with strong analytical skills focused on solving real-world problems and a background in statistics. I'm actively seeking R&D internship opportunities.",
      interactive: "Interactive Element"
    },
    portfolio: {
      title: "NOTABLE PROJECTS",
      projects: [
        {
          title: "SIEST",
          description: "An urban intelligence and public health platform developed for the epidemiological monitoring of arboviral diseases in Campinas. Uses ETL pipelines to integrate data from SINAN, CNES, IBGE, and Mosqlimate.",
          tags: ["Python", "PyMongo", "MongoDB", "Next.js"],
        },
        {
          title: "8-Puzzle Solver AI",
          description: "A high-performance intelligent solver for the classic block-stacking game, developed in C. Uses BFS and IDDFS search algorithms with manual dynamic data structures in memory.",
          tags: ["C Language", "Classical AI", "Search Algorithms"],
        },
        {
          title: "Casa de Maria",
          description: "A robust clinical management and automated medical scheduling system, built in PHP using the Laravel framework with an MVC architecture.",
          tags: ["PHP", "Laravel", "MySQL", "MVC"],
        },
        {
          title: "Genetic Algorithm N-Queens",
          description: "A Genetic Algorithm implemented in C to solve the classic N-Queens problem, focusing on optimization and artificial intelligence.",
          tags: ["C", "Genetic Algorithm", "AI"],
        },
        {
          title: "Cesta Básica",
          description: "Economic Analysis of the Basic Food Basket (2022–2026) using Data Science, ETL, and Forecasting techniques with Power BI.",
          tags: ["Data Analysis", "Power BI", "ETL"],
        },
        {
          title: "IMRS Educação 2020",
          description: "Statistical and exploratory analysis of three IMRS 2020 educational indicators, using the Python data stack (Pandas, Seaborn).",
          tags: ["Python", "Jupyter", "Statistics"],
        }
      ],
      links: { code: "Code", live: "Live" },
      scroll: "Scroll down to explore the immersive experience."
    },
    services: {
      title: ["MY", "SKILLS"],
      description: "Toolkit and languages focused on data, artificial intelligence, and the modern web ecosystem.",
      items: [
        {
          title: "Programming Languages",
          description: "Proficient in Python, C, SQL, and JavaScript, with a focus on back-end development and data science."
        },
        {
          title: "Data & Business Intelligence",
          description: "Data modeling and visualization using Power BI, Pandas, Matplotlib, and Advanced Excel."
        },
        {
          title: "Frameworks & Web",
          description: "Development of robust APIs and web systems using Node.js and PHP with Laravel."
        },
        {
          title: "Tools & Cloud",
          description: "Experience with cloud platforms (AWS, Google Cloud) and modern tools (Git, GitHub, Gemini)."
        }
      ]
    },
    contact: {
      title: ["Contact", "START TRANSMISSION"],
      labels: { id: "Identification", channel: "Return Channel", message: "Data Message" },
      placeholders: { name: "Your Name", email: "your@email.com", message: "Detail your project..." },
      button: "Send Message",
      footer: `© ${new Date().getFullYear()} Developed in the Future. All rights reserved.`
    }
  }
};

export type Language = "pt" | "en";
export type Dictionary = typeof dictionaries.pt;
