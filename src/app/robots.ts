// app/robots.ts - Robots.txt pour Reda Alilouch
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"], // Ajustez selon vos besoins
    },
    sitemap: "https://redaalilouch.vercel.app/sitemap.xml",
  };
}
