import Image from "next/image";
import Button from "@/components/Button/Button";
import { Project } from "@/app/projects/assets/projectsData";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 rounded-t-2xl h-full bg-gray-50 dark:bg-gray-900">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex justify-between items-center">
          <Button
          className="bg-indigo-600 text-white m-auto md:m-0 px-6 py-3 text-center w-max rounded-lg hover:bg-indigo-700 transition"
            onClick={() => window.open(project.liveUrl, "_blank")}
          >
            View Project
          </Button>
          <Button
          className="border border-indigo-600 text-center m-auto md:m-0 w-max text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-900 transition"
            onClick={() => window.open(`/projects/${project.slug}`, "_self")} // '_self' = dans le même onglet
          >
            Read More
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
