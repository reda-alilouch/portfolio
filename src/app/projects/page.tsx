// src/app/projects/page.tsx
"use client";

import ProjectsStructuredData from "@/components/seo/ProjectsStructuredData";
import ContainerProjects from "./ContainerProjects";
// Vos autres imports existants...

export default function ProjectsPage() {
  return (
    <>
      {/* ✅ DÉCLAREZ ICI le composant ProjectsStructuredData */}
      <ProjectsStructuredData />
      <ContainerProjects />
    </>
  );
}
