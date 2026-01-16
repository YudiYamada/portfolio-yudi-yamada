import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolio-yudi-yamada.vercel.app";
  const routes = ["", "/services", "/about", "/projects", "/contact"];
  const languages = ["en", "es", "pt"];

  return routes.flatMap((route) =>
    languages.map((lang) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );
}
