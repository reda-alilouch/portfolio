// components/seo/HomeStructuredData.tsx
export default function HomeStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Portfolio de Reda Alilouch",
    description: "Portfolio professionnel de développeur full-stack",
    url: "https://redaalilouch.vercel.app",
    author: {
      "@type": "Person",
      name: "Reda Alilouch",
      jobTitle: "Développeur Web Full-Stack",
      email: "reda.alilouch@email.com", // Remplacez par votre email
      sameAs: [
        "https://github.com/votre-username", // Remplacez
        "https://linkedin.com/in/reda-alilouch", // Remplacez
      ],
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://redaalilouch.vercel.app/projects?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
