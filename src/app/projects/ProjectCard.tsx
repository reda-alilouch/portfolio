import Image from "next/image";
import Button from "@/components/Button/Button";
import { Project } from "./assets/projectsData";
import { motion } from "framer-motion";
interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div 
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}  >
      <Image
        src={project.image}
        alt={project.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 rounded-t-2xl h-full bg-gray-50 dark:bg-gray-900">
        <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <Button className="bg-blue-500 py-2 px-4 rounded-md text-white hover:bg-blue-600">
          View Project
        </Button>
      </div>
    </motion.div>
  );
}
