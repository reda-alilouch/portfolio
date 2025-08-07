"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import AboutStructuredData from "@/components/seo/AboutStructuredData";
const AboutSection = () => {
  return (
    <>
      <AboutStructuredData />
      <section id="About_Section" className="mt-20 px-30">
        <div className="flex flex-col items-center text-center md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <h2 className="text-6xl font-bold mb-6">À propos de moi</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Je suis un développeur web passionné par la création
              d&#39;expériences utilisateur exceptionnelles. Mon parcours
              m&#39;a permis d&#39;acquérir une expertise dans divers langages
              et technologies, me permettant de concevoir des applications web
              modernes et performantes.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="min-w-[250px] max-w-[500px]"
          >
            <Image
              src="/hero-image.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default AboutSection;
