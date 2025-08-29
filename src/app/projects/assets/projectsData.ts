// projectsData.ts
export interface Project {
  // Données de base pour les cartes
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string; // Pour les cartes (texte court)
  images: {
    url: string; // Chemin de l'image
    alt: string;
  }[];

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
    title: "Portfolio Infographiste",
    slug: "portfolio-infographiste",
    category: "Portfolio",
    description:
      "Portfolio professionnel moderne d’une infographiste. Présente ses projets, compétences et services avec une interface élégante et responsive.",
    shortDescription: "Portfolio personnel moderne en Next.js et TypeScript",
    longDescription:
      "Ce portfolio met en avant le parcours, les compétences et les projets d'une infographiste. Conçu avec Next.js et Tailwind CSS, il offre une navigation fluide, un mode clair/sombre, une section blog, une page contact avec formulaire dynamique et une optimisation SEO poussée. Chaque projet est présenté avec détails techniques, défis et résultats obtenus.",
    images: [
      {
        url: "portfolio/photo1.jpeg",
        alt: "Portfolio Infographiste - Photo 1",
      },
      {
        url: "portfolio/photo2.png",
        alt: "Portfolio Infographiste - Photo 2",
      },
      {
        url: "portfolio/photo3.png",
        alt: "Portfolio Infographiste - Photo 3",
      },
      {
        url: "portfolio/photo4.png",
        alt: "Portfolio Infographiste - Photo 4",
      },
      {
        url: "portfolio/photo5.png",
        alt: "Portfolio Infographiste - Photo 5",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    githubUrl: "https://github.com/reda-alilouch/portfolioNisserine",
    liveUrl: "https://portfolio-nisserine.vercel.app/",
    createdAt: "2024-06-10T00:00:00Z",
    updatedAt: "2024-07-05T00:00:00Z",
    status: "completed",
    featured: true,
    seoTitle: "Portfolio Infographiste - Next.js & React",
    seoDescription:
      "Découvrez le portfolio élégant et moderne d'une infographiste freelance. Créé avec Next.js, Tailwind CSS, TypeScript et React. Responsive, rapide, optimisé SEO.",
    keywords: [
      "portfolio infographiste",
      "site personnel React",
      "Next.js Tailwind portfolio",
      "infographiste freelance",
      "portfolio féminin",
      "responsive design portfolio",
      "SEO graphiste web",
      "portfolio fille",
    ],
    challenges: [
      "Créer une identité visuelle forte et élégante",
      "Rendre le contenu entièrement administrable via Markdown",
      "Optimiser le SEO pour la recherche freelance",
      "Assurer la compatibilité mobile et performance web",
    ],
    features: [
      "Page d’accueil avec animation et présentation",
      "Section projets avec filtres et détails complets",
      "Blog personnel intégré avec Markdown",
      "Mode clair / sombre",
      "SEO optimisé avec balises dynamiques",
    ],
    metrics: {
      performance: "100% Lighthouse Score",
      users: "300+ visites mensuelles",
      conversion: "15% de prises de contact via le formulaire",
    },
    testimonial: {
      text: "Un portfolio inspirant, clair et professionnel. Il reflète parfaitement son talent et son univers.",
      author: "Nissrine Fathi",
      company: "Freelance",
    },
  },
  {
    id: 2,
    title: "Ripple",
    slug: "ripple",
    category: "musique",
    description:
      "Ripple est une plateforme de streaming de musique qui permet aux utilisateurs de découvrir et de jouer des chansons en direct.",
    shortDescription: "Plateforme de streaming de musique",
    longDescription:
      "Ripple est une plateforme de streaming de musique qui permet aux utilisateurs de découvrir et de jouer des chansons en direct.",
    images: [
      {
        url: "ripple/photo1.jpeg",
        alt: "Ripple - Photo 1",
      },
      {
        url: "ripple/photo2.png",
        alt: "Ripple - Photo 2",
      },
      {
        url: "ripple/photo3.png",
        alt: "Ripple - Photo 3",
      },
      {
        url: "ripple/photo4.png",
        alt: "Ripple - Photo 4",
      },
      {
        url: "ripple/photo5.png",
        alt: "Ripple - Photo 5",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "i18n",
      "axios",
      "spotify API",
      "bcrypt",
      "jsonwebtoken",
      "next-auth",
      "swiper",
      "splide.js",
    ],
    githubUrl: "https://github.com/reda-alilouch/Ripple",
    liveUrl: "https://ripple.vercel.app/",
    createdAt: "2024-06-10T00:00:00Z",
    updatedAt: "2024-07-05T00:00:00Z",
    status: "in-progress",
    featured: true,
    seoTitle: "Ripple - Next.js & React",
    seoDescription:
      "Découvrez le Ripple, une plateforme de streaming de musique qui permet aux utilisateurs de découvrir et de jouer des chansons en direct. Créé avec Next.js, Tailwind CSS, Javascript et React. Responsive, rapide, optimisé SEO.",
    keywords: [
      "plateforme de streaming de musique",
      "site personnel React",
      "Next.js Tailwind portfolio",
      "musique",
      "responsive design portfolio",
      "SEO graphiste web",
    ],
    challenges: [
      "Créer une identité visuelle forte et élégante",
      "Rendre le contenu entièrement administrable via le dashboard",
      "Optimiser le SEO pour la recherche freelance",
      "Assurer la compatibilité mobile et performance web",
    ],
    features: [
      "Dashboard administrable",
      "Streaming de musique",
      "Interface utilisateur moderne",
      "Responsive design",
      "Optimisation SEO",
    ],
    metrics: {
      performance: "100% Lighthouse Score",
      users: "300+ utilisateurs",
      conversion: "15% de prises de contact via le formulaire",
    },
  },
  {
    id: 3,
    title: "Boutiqua",
    slug: "boutiqua",
    category: "e-commerce",
    description:
      "Boutiqua est une boutique en ligne spécialisée dans la vente de vêtements et d’accessoires de mode. Elle propose une sélection variée d’articles alliant style et qualité pour répondre aux besoins de ses clients.",
    shortDescription: "Boutique en ligne de vêtements et d'accessoires",
    longDescription:
      "Boutiqua est une boutique en ligne spécialisée dans la vente de vêtements et d’accessoires de mode. Elle propose une sélection variée d’articles alliant style et qualité pour répondre aux besoins de ses clients.",
    images: [
      {
        url: "boutiqua/photo1.jpeg",
        alt: "boutiqua - Photo 1",
      },
      {
        url: "boutiqua/photo2.png",
        alt: "boutiqua - Photo 2",
      },
      {
        url: "boutiqua/photo3.png",
        alt: "boutiqua - Photo 3",
      },
      {
        url: "boutiqua/photo4.png",
        alt: "boutiqua - Photo 4",
      },
      {
        url: "boutiqua/photo5.png",
        alt: "boutiqua - Photo 5",
      },
    ],
    technologies: [
      "php",
      "mysql",
      "javascript",
      "html",
      "css",
      "tailwind css",
      "splide.js",
    ],
    githubUrl: "https://github.com/reda-alilouch/boutiqua",
    liveUrl: "",
    createdAt: "2024-06-10T00:00:00Z",
    updatedAt: "2024-07-05T00:00:00Z",
    status: "in-progress",
    featured: true,
    seoTitle: "boutiqua - php & mysql",
    seoDescription:
      "Découvrez le boutiqua, une boutique en ligne spécialisée dans la vente de vêtements et d’accessoires de mode. Elle propose une sélection variée d’articles alliant style et qualité pour répondre aux besoins de ses clients.",
    keywords: [
      "boutique en ligne",
      "boutique en ligne de vêtements et d'accessoires",
      "php & mysql",
      "responsive design portfolio",
      "SEO graphiste web",
    ],
    challenges: [
      "Créer une identité visuelle forte et élégante",
      "Rendre le contenu entièrement administrable via le dashboard",
      "Optimiser le SEO pour la recherche freelance",
      "Assurer la compatibilité mobile et performance web",
    ],
    features: [
      "Dashboard administrable",
      "Gestion des produits",
      "Gestion des commandes",
      "Gestion des utilisateurs",
      "Gestion des catégories",
      "Filtrage des produits",
    ],
  },
];

// Fonctions utilitaires pour le SEO et les cartes
export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

export const getProjectsByCategory = (category: string) =>
  projects.filter((project) => project.category === category);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getProjectSEOData = (slug: string) => {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  return {
    title: project.seoTitle || `${project.title} - Portfolio Reda Alilouch`,
    description: project.seoDescription || project.description,
    keywords: project.keywords,
    image: project.images.map((image) => ({
      url: image.url,
      alt: image.alt,
    })),
    url: `https://redaalilouch.vercel.app/projects/${project.slug}`,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt,
  };
};

export const getAllProjectsForSitemap = () =>
  projects.map((project) => ({
    slug: project.slug,
    lastModified: project.updatedAt || project.createdAt,
    priority: project.featured ? 0.8 : 0.6,
  }));

// Données pour les rich snippets
export const getProjectStructuredData = (slug: string) => {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    author: {
      "@type": "Person",
      name: "Reda Alilouch",
      url: "https://redaalilouch.vercel.app",
    },
    dateCreated: project.createdAt,
    dateModified: project.updatedAt || project.createdAt,
    keywords: project.keywords.join(", "),
    image: project.images,
    url: `https://redaalilouch.vercel.app/projects/${project.slug}`,
    genre: project.category,
    programmingLanguage: project.technologies,
    codeRepository: project.githubUrl,
    applicationCategory: "WebApplication",
    operatingSystem: "Cross-platform",
  };
};
