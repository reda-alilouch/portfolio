// app/sitemap.ts - Sitemap pour Reda Alilouch
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://redaalilouch.vercel.app';
  
  // Pages statiques
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Ajoutez vos pages de projets dynamiques ici
  // const projectPages = projects.map((project) => ({
  //   url: `${baseUrl}/projects/${project.slug}`,
  //   lastModified: new Date(project.updatedAt || project.createdAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }));

  return staticPages; // + projectPages quand vous les ajouterez
}
