"use client";
import { motion } from "framer-motion";
import ContactStructuredData from "@/components/seo/ContactStructuredData";
const ContactSection = () => {
  return (
    <>
      <ContactStructuredData />
      <section
        id="Contact_Section"
        className="py-16 px-4 bg-white dark:bg-gray-950"
      >
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
    </>
  );
};
export default ContactSection;
