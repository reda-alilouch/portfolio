// components/seo/AboutStructuredData.tsx
export default function AboutStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "À propos de Reda Alilouch",
    "description": "Découvrez le parcours et l'expertise de Reda Alilouch en développement web",
    "url": "https://redaalilouch.vercel.app#about",
    "mainEntity": {
      "@type": "Person",
      "name": "Reda Alilouch",
      "jobTitle": "Développeur Web Full-Stack",
      "description": "Développeur passionné par les technologies web modernes, spécialisé en React, Next.js et TypeScript. Expert en création d'applications web performantes et accessibles.",
      "birthPlace": "Casablanca, Maroc", // Optionnel
      "nationality": "Marocaine", // Optionnel
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Votre formation" // Remplacez par votre formation
      },
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Développeur Web Full-Stack",
        "occupationalCategory": "Software Developer",
        "workLocation": {
          "@type": "Place",
          "name": "Casablanca, Maroc"
        }
      },
      "knowsLanguage": [
        {
          "@type": "Language",
          "name": "Français",
          "alternateName": "fr"
        },
        {
          "@type": "Language", 
          "name": "Arabe",
          "alternateName": "ar"
        },
        {
          "@type": "Language",
          "name": "Anglais", 
          "alternateName": "en"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}