// components/Footer.tsx

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo / Nom */}
        <div className="text-gray-600 dark:text-gray-300 font-semibold text-lg">
          &copy; 2025 Reda Alilouch
        </div>

        {/* Liens de navigation */}
        <nav className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
          <a href="/" className="hover:text-indigo-600 transition">Accueil</a>
          <a href="/projects" className="hover:text-indigo-600 transition">Projets</a>
          <a href="/contact" className="hover:text-indigo-600 transition">Contact</a>
        </nav>

        {/* Icônes Réseaux */}
        <div className="flex gap-4 text-xl text-gray-500 dark:text-gray-400">
          <a href="https://github.com/reda-alilouch" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/reda-alilouch-85b002330/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">
            <FaLinkedin />
          </a>
          <a href="alilouchreda328@email.com" className="hover:text-indigo-600 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
