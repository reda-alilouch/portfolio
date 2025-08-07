"use client";

import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import HeroSection from "@/components/HeroSection/HeroSection";
export default function Home() {
  return (
    <main className="min-h-screen mt-10 px-6 bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
