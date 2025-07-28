"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "@/components/Button/Button";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Projets", href: "/projects" },
    { name: "Compétences", href: "/skills" },
    { name: "About", href: "/#About_Section" },
    { name: "Contact", href: "/#Contact_Section" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className="py-6 px-24 flex items-center justify-between bg-white text-gray-900 border-b border-gray-200 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logoenlight.png"}
            alt="Logo"
            width={40}
            height={40}
            className="block dark:hidden"
          />
          <Image
            src={"/logoendark.png"}
            alt="Logo"
            width={40}
            height={40}
            className="hidden dark:block"
          />
        </Link>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 dark:text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>

        <nav className="hidden md:block" id="navDesktop">
          <ul className="flex md:flex-row gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`hover:underline transition ${
                    pathname === item.href
                      ? "text-indigo-600 dark:text-indigo-400 underline"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden "
          >
            <ul className="flex flex-col items-center">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className="border-b border-gray-200 dark:border-gray-800 w-full text-center hover:bg-gray-100 dark:hover:bg-gray-800 py-2"
                >
                  <Link
                    href={item.href}
                    className={`hover:underline transition ${
                      pathname === item.href
                        ? "text-indigo-600 dark:text-indigo-400 underline"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
