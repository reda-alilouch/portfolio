"use client";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "./assets/projectsData";
const ContainerProjects = () => {
  return (
    <main className="min-h-screen py-10 px-4 py-12 bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Mes Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </main>
  );
};
export default ContainerProjects;
