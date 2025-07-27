// src/app/projects/page.tsx
"use client";
import type { Metadata } from "next";
import ProjectsStructuredData from "@/components/seo/ProjectsStructuredData";
import ContainerProjects from "./ContainerProjects";
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
