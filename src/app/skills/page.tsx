"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaReact,
  FaDatabase,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      name: "HTML",
      description: "Langage de balisage utilisé pour structurer les pages web.",
      icon: <FaHtml5 className="text-orange-500 w-6 h-6" />,
    },
    {
      name: "CSS",
      description:
        "Permet de styliser les éléments HTML avec des mises en page responsive.",
      icon: <FaCss3Alt className="text-blue-500 w-6 h-6" />,
    },
    {
      name: "JavaScript",
      description:
        "Langage de programmation pour rendre les sites interactifs.",
      icon: <FaJs className="text-yellow-400 w-6 h-6" />,
    },
    {
      name: "PHP",
      description:
        "Langage côté serveur pour créer des applications web dynamiques.",
      icon: <FaPhp className="text-indigo-700 w-6 h-6" />,
    },
    {
      name: "React",
      description:
        "Bibliothèque JavaScript pour construire des interfaces utilisateur modernes.",
      icon: <FaReact className="text-cyan-400 w-6 h-6 animate-spin-slow" />,
    },
    {
      name: "MongoDB",
      description: "Base de données NoSQL flexible, orientée documents.",
      icon: <SiMongodb className="text-green-500 w-6 h-6" />,
    },
    {
      name: "SQL",
      description: "Langage pour gérer les bases de données relationnelles.",
      icon: <FaDatabase className="text-gray-500 w-6 h-6" />,
    },
    {
      name: "Tailwind CSS",
      description:
        "Framework CSS utilitaire pour créer rapidement des interfaces stylisées.",
      icon: <SiTailwindcss className="text-sky-400 w-6 h-6" />,
    },
    {
      name: "Next.js",
      description:
        "Framework React complet pour le SSR et la génération statique.",
      icon: <SiNextdotjs className="text-black dark:text-white w-6 h-6" />,
    },
    {
      name: "Figma",
      description:
        "Outil de design d'interface pour créer des maquettes interactives.",
      icon: <FaFigma className="text-pink-500 w-6 h-6" />,
    },
    {
      name: "Git/Github",
      description:
        "Outils de gestion de version et de collaboration pour le code source.",
      icon: <FaGithub className="text-gray-900 dark:text-white w-6 h-6" />,
    },
  ];
  return (
    <section id="skills">
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-3xl font-bold my-20">Mes compétences</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4 text-3xl flex items-center gap-2 justify-center">
                {item.icon}
                <span>{item.name}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {item.description}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
