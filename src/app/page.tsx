"use client";

import Button from "@/components/Button/Button";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen mt-10 px-6 bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* Hero Section */}
      <section className="text-center mb-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
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
            modernes, performantes et responsive. Bienvenue sur mon portfolio !
          </motion.p>
        </div>
      </section>

      {/* Call to Action */}
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

      <section id="about" className="mt-20 px-30">
        <div className="flex flex-col items-center text-center md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <h2 className="text-6xl font-bold mb-6">À propos de moi</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Je suis un développeur web passionné par la création d'expériences
              utilisateur exceptionnelles. Mon parcours m'a permis d'acquérir
              une expertise dans divers langages et technologies, me permettant
              de concevoir des applications web modernes et performantes.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="min-w-[250px] max-w-[500px]"
          >
            <img src="hero-image.jpg" alt="" className="rounded-lg" />
          </motion.div>
        </div>
      </section>
      <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contactez-moi
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Une idée, une opportunité ou une question ? Je suis toujours ouvert
            à discuter !
          </motion.p>

          <motion.form
            action="mailto:alilouchreda328@gmail.com"
            method="POST"
            encType="text/plain"
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="Nom"
                placeholder="Votre nom"
                required
                className="w-full p-3 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white"
              />
              <input
                type="email"
                name="Email"
                placeholder="Votre email"
                required
                className="w-full p-3 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white"
              />
            </div>
            <textarea
              name="Message"
              rows={5}
              placeholder="Votre message"
              required
              className="w-full p-3 rounded-lg border dark:border-gray-800 dark:bg-gray-900 dark:text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Envoyer
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
