export default function ProjectsStructuredData() {
  // Remplacez par vos vrais projets
  const projects = [
    {
      title: "Projet E-commerce",
      slug: "projet-ecommerce",
      description: "Application e-commerce complète avec React et Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/projects/ecommerce.jpg",
      createdAt: "2024-01-15"
    },
    // Ajoutez vos autres projets
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projets de Reda Alilouch",
    "description": "Collection de projets de développement web réalisés par Reda Alilouch",
    "url": "https://redaalilouch.vercel.app/projects",
    "author": {
      "@type": "Person",
      "name": "Reda Alilouch"
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": projects.length,
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": project.title,
          "description": project.description,
          "url": `https://redaalilouch.vercel.app/projects/${project.slug}`,
          "image": project.image,
          "author": {
            "@type": "Person",
            "name": "Reda Alilouch"
          },
          "dateCreated": project.createdAt,
          "keywords": project.technologies.join(", "),
          "genre": "Web Development Project"
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