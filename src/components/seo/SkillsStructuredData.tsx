// components/seo/SkillsStructuredData.tsx
export default function SkillsStructuredData() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "HTML5", "CSS3", "PHP", "SQL", "Tailwind CSS", "Express.js",
    "MongoDB", "API REST", "Git", "GitHub", "Responsive Design", "Figma"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Reda Alilouch",
    "knowsAbout": skills,
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Développeur Web Full-Stack",
      "occupationalCategory": "Software Developer",
      "skills": skills.join(", "),
      "experienceRequirements": "Expert en développement web moderne"
    },
    "owns": {
      "@type": "ItemList",
      "name": "Compétences techniques",
      "itemListElement": skills.map((skill, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "name": skill
        }
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}