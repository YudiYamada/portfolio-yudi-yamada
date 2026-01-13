import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yudiyamada.com.br"; // Substituir pelo domínio futuro

  const routes = [
    "", // Home
    "/services",
    "/about",
    "/projects",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8, // Home tem prioridade máxima
  }));

  return routes;
}
