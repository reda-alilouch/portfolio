// components/seo/ContactStructuredData.tsx
export default function ContactStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact - Reda Alilouch",
    "description": "Contactez Reda Alilouch pour vos projets de développement web",
    "url": "https://redaalilouch.vercel.app#contact",
    "mainEntity": {
      "@type": "Person",
      "name": "Reda Alilouch",
      "jobTitle": "Développeur Web Full-Stack",
      "email": "reda.alilouch@email.com", // Remplacez par votre email
      "sameAs": [
        "https://github.com/votre-username", // Remplacez
        "https://linkedin.com/in/reda-alilouch" // Remplacez
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "professional",
        "email": "reda.alilouch@email.com", // Remplacez
        "availableLanguage": ["French", "Arabic", "English"],
        "areaServed": "Worldwide",
        "serviceType": "Développement Web"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Casablanca",
        "addressRegion": "Casablanca-Settat", 
        "addressCountry": "MA"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}