import ProjectCard from '@/components/ProjectCard/ProjectCard'; 
import { projects } from "./assets/projectsData";
import type { Metadata } from "next";
import ProjectsStructuredData from "@/components/seo/ProjectsStructuredData";
import { Container } from 'lucide-react';
import ContainerProjects from './ContainerProjects';
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
      <ContainerProjects />
    </>
  );
}
