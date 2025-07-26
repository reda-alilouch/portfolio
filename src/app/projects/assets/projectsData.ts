export interface Project {
  name: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    image: "/globe.svg",
  },
  {
    name: "E-commerce App",
    description:
      "A modern e-commerce platform with shopping cart and payment integration.",
    image: "/vercel.svg",
  },
  {
    name: "Blog Platform",
    description: "A full-featured blog platform with markdown support.",
    image: "/next.svg",
  },
];
