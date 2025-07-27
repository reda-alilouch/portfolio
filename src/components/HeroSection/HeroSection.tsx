"use client";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import HomeStructuredData from "@/components/seo/HomeStructuredData";

const HeroSection = () => {
  return (
    <>
      <HomeStructuredData />
      <section id="Hero_Section">
        <div className="text-center mb-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
          <motion.img
            src="/hero-image.jpg"
            alt="Hero Image"
            className="w-3xs h-3xs md:w-2xs md:h-2xs lg:w-xs lg:h-xs xl:w-sm xl:h-sm rounded-full max-w-md mx-auto"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <div className="lg:col-span-2">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Salut, je suis Reda Alilouch
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Développeur Web Full Stack passionné, je conçois des interfaces
              modernes, performantes et responsive. Bienvenue sur mon
              portfolio&nbsp;!
            </motion.p>
          </div>
        </div>
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            className="bg-indigo-600 text-white m-auto md:m-0 px-6 py-3 text-center w-max rounded-lg hover:bg-indigo-700 transition"
            onClick={() => {
              window.location.href = "/projects";
            }}
          >
            Voir mes projets
          </Button>
          <Button
            className="border border-indigo-600 text-center m-auto md:m-0 w-max text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-900 transition"
            onClick={() => {
              window.location.href = "/ALILOUCH_Reda.pdf";
            }}
          >
            <a href="/ALILOUCH_Reda.pdf" download>
              Télécharger mon CV
            </a>
          </Button>
        </motion.div>
      </section>
    </>
  );
};
export default HeroSection;
