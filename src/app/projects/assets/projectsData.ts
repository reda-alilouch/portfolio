// projectsData.ts
export interface Project {
  // Données de base pour les cartes
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string; // Pour les cartes (texte court)
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  
  // Données supplémentaires pour le SEO
  category: string; // Ex: "E-commerce", "Landing Page", "SaaS"
  createdAt: string; // Date de création ISO
  updatedAt?: string; // Date de mise à jour ISO
  status: "completed" | "in-progress" | "concept"; // Statut du projet
  featured: boolean; // Projet mis en avant
  
  // SEO spécifique
  seoTitle?: string; // Titre SEO personnalisé
  seoDescription?: string; // Description SEO personnalisée
  keywords: string[]; // Mots-clés spécifiques au projet
  
  // Données détaillées pour la page individuelle
  longDescription?: string; // Description longue pour la page projet
  challenges?: string[]; // Défis relevés
  features?: string[]; // Fonctionnalités principales
  testimonial?: {
    text: string;
    author: string;
    company?: string;
  };
  
  // Métriques (si disponibles)
  metrics?: {
    performance?: string; // Ex: "95% Lighthouse Score"
    users?: string; // Ex: "1000+ utilisateurs"
    conversion?: string; // Ex: "15% d'augmentation"
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Modern Store",
    slug: "ecommerce-modern-store",
    category: "E-commerce",
    description: "Plateforme e-commerce complète avec gestion des produits, panier intelligent et paiement sécurisé. Interface moderne et responsive optimisée pour les conversions.",
    shortDescription: "Plateforme e-commerce moderne avec React et Node.js",
    longDescription: "Application e-commerce full-stack développée avec les dernières technologies. Intègre un système de gestion des stocks en temps réel, des recommandations personnalisées basées sur l'IA, et une interface utilisateur intuitive optimisée pour maximiser les conversions. Le backend Node.js assure des performances élevées avec une architecture scalable.",
    image: "/projects/ecommerce-store.jpg",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/reda-alilouch/ecommerce-store",
    liveUrl: "https://ecommerce-store-reda.vercel.app",
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-02-20T00:00:00Z",
    status: "completed",
    featured: true,
    seoTitle: "E-Commerce Modern Store - Application React Next.js",
    seoDescription: "Découvrez cette application e-commerce moderne développée avec React, Next.js et Node.js. Système de paiement Stripe, gestion temps réel et design responsive.",
    keywords: [
      "e-commerce React",
      "boutique en ligne Next.js",
      "application web TypeScript",
      "paiement Stripe",
      "MongoDB e-commerce",
      "panier intelligent",
      "responsive design",
      "Reda Alilouch portfolio"
    ],
    challenges: [
      "Optimisation des performances pour 10000+ produits",
      "Gestion des stocks en temps réel",
      "Intégration sécurisée avec Stripe",
      "Interface responsive sur tous devices"
    ],
    features: [
      "Catalogue produits dynamique avec filtres avancés",
      "Panier persistant et recommandations IA",
      "Système de paiement Stripe sécurisé",
      "Dashboard admin complet",
      "Notifications temps réel",
      "SEO optimisé pour chaque produit"
    ],
    metrics: {
      performance: "98% Lighthouse Score",
      users: "500+ utilisateurs actifs",
      conversion: "23% taux de conversion"
    },
    testimonial: {
      text: "Une solution e-commerce exceptionnelle qui a transformé notre business en ligne.",
      author: "Marie Dubois",
      company: "Boutique Mode Paris"
    }
  },
  {
    id: 2,
    title: "Portfolio Créatif - Designer UI/UX",
    slug: "portfolio-designer-creative",
    category: "Portfolio",
    description: "Portfolio interactif pour designer UI/UX avec animations fluides, galerie immersive et interface intuitive. Optimisé pour showcaser le travail créatif.",
    shortDescription: "Portfolio créatif avec animations Three.js et design moderne",
    longDescription: "Portfolio sur mesure développé pour un designer UI/UX renommé. Intègre des animations Three.js pour une expérience immersive, un système de filtrage intelligent des projets, et une interface adaptative qui s'ajuste au contenu. Chaque projet dispose de son propre mini-site avec études de cas détaillées.",
    image: "/projects/portfolio-designer.jpg",
    technologies: ["Next.js", "TypeScript", "Three.js", "Framer Motion", "Sanity CMS", "Tailwind CSS", "GSAP"],
    githubUrl: "https://github.com/reda-alilouch/portfolio-designer",
    liveUrl: "https://portfolio-designer-reda.vercel.app",
    createdAt: "2024-03-10T00:00:00Z",
    updatedAt: "2024-04-05T00:00:00Z",
    status: "completed",
    featured: true,
    seoTitle: "Portfolio Créatif Designer - Next.js Three.js Animation",
    seoDescription: "Portfolio interactif avec animations Three.js, galerie immersive et CMS Sanity. Découvrez cette création unique développée par Reda Alilouch.",
    keywords: [
      "portfolio créatif",
      "Three.js portfolio",
      "animations web",
      "Next.js portfolio",
      "designer UI UX",
      "Framer Motion",
      "galerie interactive",
      "développeur créatif Maroc"
    ],
    challenges: [
      "Optimisation des animations Three.js pour mobile",
      "Gestion fluide de 50+ projets créatifs",
      "Interface adaptative selon le contenu",
      "Performance 60fps sur tous devices"
    ],
    features: [
      "Animations Three.js immersives",
      "Galerie avec filtres intelligents",
      "CMS Sanity pour gestion facile",
      "Mode sombre/clair automatique",
      "Études de cas détaillées",
      "Optimisation SEO avancée"
    ],
    metrics: {
      performance: "94% Lighthouse Score",
      users: "2000+ visiteurs/mois",
      conversion: "40% d'engagement moyen"
    }
  },
  {
    id: 3,
    title: "SaaS Dashboard Analytics",
    slug: "saas-dashboard-analytics",
    category: "SaaS",
    description: "Dashboard analytics complet pour SaaS avec visualisations de données en temps réel, rapports personnalisés et interface collaborative multi-utilisateurs.",
    shortDescription: "Dashboard SaaS avec analytics temps réel et visualisations",
    longDescription: "Solution SaaS complète pour l'analyse de données business. Développée avec une architecture microservices, elle offre des visualisations interactives, des rapports automatisés et un système de collaboration en équipe. L'API REST permet l'intégration avec plus de 20 sources de données externes.",
    image: "/projects/saas-dashboard.jpg",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    githubUrl: "https://github.com/reda-alilouch/saas-dashboard",
    liveUrl: "https://analytics-dashboard-reda.vercel.app",
    createdAt: "2023-11-20T00:00:00Z",
    updatedAt: "2024-01-30T00:00:00Z",
    status: "completed",
    featured: false,
    seoTitle: "SaaS Dashboard Analytics - React D3.js PostgreSQL",
    seoDescription: "Dashboard SaaS professionnel avec visualisations D3.js, analytics temps réel et architecture microservices. Projet développé par Reda Alilouch.",
    keywords: [
      "SaaS dashboard",
      "analytics React",
      "visualisation D3.js",
      "dashboard temps réel",
      "PostgreSQL analytics",
      "microservices architecture",
      "business intelligence",
      "développeur SaaS Maroc"
    ],
    challenges: [
      "Gestion de millions de data points",
      "Visualisations temps réel performantes",
      "Architecture scalable multi-tenant",
      "Sécurité niveau entreprise"
    ],
    features: [
      "Visualisations D3.js interactives",
      "Rapports automatisés PDF/Excel",
      "Collaboration multi-utilisateurs",
      "API REST complète",
      "Notifications intelligentes",
      "Sauvegarde automatique cloud"
    ],
    metrics: {
      performance: "96% Lighthouse Score",
      users: "150+ entreprises utilisatrices"
    }
  },
  {
    id: 4,
    title: "Application Mobile React Native",
    slug: "mobile-app-react-native",
    category: "Mobile",
    description: "Application mobile cross-platform pour la gestion de tâches collaboratives avec synchronisation cloud, notifications push et mode offline.",
    shortDescription: "App mobile React Native avec sync cloud et mode offline",
    longDescription: "Application mobile complète développée en React Native pour iOS et Android. Intègre la géolocalisation, la synchronisation en temps réel avec Firebase, un mode offline robuste et des notifications push intelligentes. L'interface suit les guidelines Material Design et Human Interface.",
    image: "/projects/mobile-app.jpg",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux Toolkit", "Expo", "AsyncStorage"],
    githubUrl: "https://github.com/reda-alilouch/mobile-task-app",
    liveUrl: "https://expo.dev/@reda-alilouch/task-app",
    createdAt: "2024-02-01T00:00:00Z",
    updatedAt: "2024-03-15T00:00:00Z",
    status: "completed",
    featured: false,
    seoTitle: "Application Mobile React Native - iOS Android Firebase",
    seoDescription: "App mobile cross-platform avec React Native, synchronisation Firebase et mode offline. Découvrez ce projet mobile de Reda Alilouch.",
    keywords: [
      "React Native app",
      "application mobile",
      "Firebase React Native",
      "app iOS Android",
      "mode offline mobile",
      "notifications push",
      "développeur mobile Maroc",
      "cross-platform app"
    ],
    challenges: [
      "Synchronisation offline/online fluide",
      "Performance native sur iOS/Android",
      "Gestion état complexe Redux",
      "UX cohérente multi-platform"
    ],
    features: [
      "Synchronisation temps réel Firebase",
      "Mode offline complet",
      "Notifications push ciblées",
      "Géolocalisation intégrée",
      "Interface native iOS/Android",
      "Backup automatique cloud"
    ],
    metrics: {
      performance: "4.8/5 étoiles App Store",
      users: "1000+ téléchargements"
    }
  },
  {
    id: 5,
    title: "API REST Microservices",
    slug: "api-rest-microservices",
    category: "Backend",
    description: "Architecture microservices complète avec API REST, authentification JWT, documentation Swagger et monitoring avancé pour applications enterprise.",
    shortDescription: "API REST microservices avec JWT et monitoring",
    longDescription: "Solution backend enterprise avec architecture microservices. Implémente l'authentification JWT, la validation avancée, le cache Redis, et un système de monitoring complet. Dockerisée et déployée sur AWS avec CI/CD automatisé. Documentation interactive Swagger incluse.",
    image: "/projects/api-microservices.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "JWT", "Docker", "AWS", "Swagger"],
    githubUrl: "https://github.com/reda-alilouch/api-microservices",
    liveUrl: "https://api-microservices-reda.herokuapp.com/docs",
    createdAt: "2023-12-05T00:00:00Z",
    updatedAt: "2024-02-10T00:00:00Z",
    status: "completed",
    featured: false,
    seoTitle: "API REST Microservices - Node.js MongoDB Docker AWS",
    seoDescription: "Architecture microservices professionnelle avec Node.js, authentification JWT et monitoring. API développée par Reda Alilouch.",
    keywords: [
      "API REST Node.js",
      "microservices architecture",
      "JWT authentification",
      "MongoDB API",
      "Docker microservices",
      "AWS deployment",
      "backend développeur",
      "Swagger documentation"
    ],
    challenges: [
      "Architecture scalable microservices",
      "Sécurité niveau enterprise",
      "Performance haute charge",
      "Monitoring temps réel"
    ],
    features: [
      "Architecture microservices complète",
      "Authentification JWT sécurisée",
      "Documentation Swagger interactive",
      "Cache Redis optimisé",
      "Monitoring et logs centralisés",
      "CI/CD automatisé AWS"
    ],
    metrics: {
      performance: "99.9% uptime",
      users: "10000+ requêtes/jour"
    }
  }
];

// Fonctions utilitaires pour le SEO et les cartes
export const getFeaturedProjects = () => projects.filter(project => project.featured);

export const getProjectsByCategory = (category: string) => 
  projects.filter(project => project.category === category);

export const getProjectBySlug = (slug: string) => 
  projects.find(project => project.slug === slug);

export const getProjectSEOData = (slug: string) => {
  const project = getProjectBySlug(slug);
  if (!project) return null;
  
  return {
    title: project.seoTitle || `${project.title} - Portfolio Reda Alilouch`,
    description: project.seoDescription || project.description,
    keywords: project.keywords,
    image: project.image,
    url: `https://redaalilouch.vercel.app/projects/${project.slug}`,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt
  };
};

export const getAllProjectsForSitemap = () => 
  projects.map(project => ({
    slug: project.slug,
    lastModified: project.updatedAt || project.createdAt,
    priority: project.featured ? 0.8 : 0.6
  }));

// Données pour les rich snippets
export const getProjectStructuredData = (slug: string) => {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "author": {
      "@type": "Person",
      "name": "Reda Alilouch",
      "url": "https://redaalilouch.vercel.app"
    },
    "dateCreated": project.createdAt,
    "dateModified": project.updatedAt || project.createdAt,
    "keywords": project.keywords.join(", "),
    "image": project.image,
    "url": `https://redaalilouch.vercel.app/projects/${project.slug}`,
    "genre": project.category,
    "programmingLanguage": project.technologies,
    "codeRepository": project.githubUrl,
    "applicationCategory": "WebApplication",
    "operatingSystem": "Cross-platform"
  };
};