import type { Metadata } from "next";
import "./globals.css";
import Header from "@/features/Header/Header";
import Footer from "@/features/Footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://redaalilouch.vercel.app"),
  title: {
    default: "Reda Alilouch - Développeur Web Full-Stack",
    template: "%s | Reda Alilouch - Développeur Web",
  },
  description:
    "Portfolio professionnel de Reda Alilouch, développeur full-stack spécialisé en React, Next.js, TypeScript. Découvrez mes projets et compétences en développement web moderne.",
  keywords: [
    "Reda Alilouch",
    "développeur web",
    "développeur full-stack",
    "React développeur",
    "Next.js expert",
    "TypeScript développeur",
    "portfolio développeur",
    "développeur JavaScript",
    "front-end developer",
    "back-end developer",
    "HTML5",
    "CSS3",
    "PHP développeur",
    "SQL expert",
    "Tailwind CSS",
    "Node.js développeur",
    "Express.js",
    "MongoDB expert",
    "API REST développeur",
    "Git expert",
    "GitHub",
    "développement web moderne",
    "création sites web responsifs",
    "applications web performantes",
    "responsive design expert",
    "accessibilité web",
    "performance web optimisation",
    "développeur freelance",
    "développeur Casablanca",
    "développeur Maroc",
  ],
  authors: [{ name: "Reda Alilouch", url: "https://redaalilouch.vercel.app" }],
  creator: "Reda Alilouch",
  publisher: "Reda Alilouch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://redaalilouch.vercel.app/",
    siteName: "Portfolio Reda Alilouch",
    title: "Reda Alilouch - Développeur Web Full-Stack",
    description:
      "Portfolio professionnel - Développeur spécialisé en React, Next.js, TypeScript et développement web moderne. Découvrez mes projets et compétences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio de Reda Alilouch - Développeur Web Full-Stack",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reda Alilouch - Développeur Web Full-Stack",
    description:
      "Portfolio professionnel - Développeur spécialisé en React, Next.js, TypeScript",
    images: ["/twitter-image.jpg"],
    creator: "@redaalilouch", // Remplacez par votre handle Twitter si vous en avez un
  },
  verification: {
    google: "votre-code-google-search-console", // À remplacer par votre code de vérification
    // yandex: "votre-code-yandex",
    // yahoo: "votre-code-yahoo",
  },
  alternates: {
    canonical: "https://redaalilouch.vercel.app",
    languages: {
      "fr-FR": "https://redaalilouch.vercel.app",
      "en-US": "https://redaalilouch.vercel.app/en", // Si vous avez une version anglaise
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Données structurées globales pour Reda Alilouch
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Reda Alilouch",
    jobTitle: "Développeur Web Full-Stack",
    description:
      "Développeur web spécialisé en React, Next.js, TypeScript et technologies modernes",
    url: "https://redaalilouch.vercel.app",
    email: "reda.alilouch@email.com", // Remplacez par votre email
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressRegion: "Casablanca-Settat",
      addressCountry: "MA",
    },
    sameAs: [
      "https://github.com/votre-username", // Remplacez par votre GitHub
      "https://linkedin.com/in/reda-alilouch", // Remplacez par votre LinkedIn
      // "https://twitter.com/redaalilouch" // Si vous avez Twitter
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "HTML5",
      "CSS3",
      "PHP",
      "SQL",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "API REST",
      "Git",
      "GitHub",
      "Responsive Design",
      "Web Performance",
      "Web Accessibility",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Développeur Web Full-Stack",
      occupationalCategory: "15-1254.00", // Code SOC pour Software Developers
      skills:
        "React, Next.js, TypeScript, JavaScript, Node.js, PHP, MongoDB, SQL",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Votre École/Université", // Optionnel - remplacez par votre formation
    },
  };

  return (
    <html lang="fr">
      <head>
        {/* Données structurées Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Balises meta supplémentaires pour le SEO */}
        <meta name="theme-color" content="#0070f3" />
        <meta name="msapplication-TileColor" content="#0070f3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Préchargement des ressources critiques */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className="bg-white dark:bg-gray-950">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
