export interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
}

// data/projects.js (ou directement dans ton composant)
export const projects = [
  {
    id: 1,
    name: "Mon Portfolio",
    description:
      "Un portfolio personnel construit avec Next.js et Tailwind CSS.",
    image: "/images/portfolio.png",
    url: "https://tonportfolio.com",
  },
  {
    id: 2,
    name: "App météo",
    description: "Application météo en React avec API OpenWeather.",
    image: "/images/meteo.png",
    url: "https://appmeteo.vercel.app",
  },
  {
    id: 3,
    name: "Clone Spotify",
    description: "Clone de Spotify avec Next.js, Spotify API et MongoDB.",
    image: "/images/spotify.png",
    url: "https://spotifyclone.vercel.app",
  },
];
