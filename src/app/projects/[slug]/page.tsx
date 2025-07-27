// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/app/projects/assets/projectsData";
import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

// Fonction pour trouver un projet par son slug
function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

// Génération des métadonnées dynamiques pour le SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Projet non trouvé",
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

// Génération statique des pages au build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  // Si le projet n'existe pas, afficher la page 404
  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Contenu du projet */}
      <article>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <div className="mb-6">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-700 mb-6">{project.description}</p>
        </div>

        {/* Technologies utilisées */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Technologies utilisées
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Liens */}
        <div className="flex gap-4 mb-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white m-auto md:m-0 px-6 py-3 text-center w-max rounded-lg hover:bg-indigo-700 transition"
            >
              Voir le projet
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-indigo-600 text-center m-auto md:m-0 w-max text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-900 transition"
            >
              Code source
            </a>
          )}
        </div>
      </article>
    </main>
  );
}
