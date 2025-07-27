import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/app/projects/assets/projectsData";
import Image from "next/image";

// ✅ types conformes à App Router
type Props = {
  params: {
    slug: string;
  };
};

// ✅ ne pas mettre "use client"

function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Projet non trouvé - Mon Portfolio",
      description: "Ce projet n'existe pas ou a été supprimé.",
    };
  }

  return {
    title: `${project.title} - Mon Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// ✅ composant par défaut
export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) return notFound();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="rounded-lg shadow-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-6">{project.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Technologies utilisées</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Voir le projet
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-900 transition"
          >
            Code source
          </a>
        )}
      </div>
    </main>
  );
}
