import ProjectCard from "@/components/ProjectCard/ProjectCard"
import { projects } from "./assets/projectsData";
import type { Metadata } from "next";
import ProjectsStructuredData from "@/components/seo/ProjectsStructuredData";
// Vos autres imports existants...

export const metadata: Metadata = {
  title: "Mes Projets",
  description:
    "Découvrez mes projets de développement web : applications React, sites Next.js, projets TypeScript.",
  // ... autres métadonnées
};

export default function ProjectsPage() {
  return (
    <>
      {/* ✅ DÉCLAREZ ICI le composant ProjectsStructuredData */}
      <ProjectsStructuredData />
      <main className="min-h-screen py-10 px-4 py-12 bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
        <h1 className="text-3xl font-bold mb-8 text-center">Mes Projets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </main>
    </>
  );
}
