"use client";

// Framework & Core (React, Next.js)
import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

// Bibliotecas de Terceiros (i18n, UI, Ícones)
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Componentes Locais
import HeaderProjects from "@/components/header-projects";

// Assets & Estilos (Imagens, JSON, CSS)
import YamadaFinanceTrack from "../../../public/images/projects/yamada-finance-track.png";
import Spotify from "../../../public/images/projects/projeto-spotify.png";
import Frutas from "../../../public/images/projects/projeto-frutas-tipicas.png";
import Bewear from "../../../public/images/projects/projeto-bewear.png";
import MoviesLibrary from "../../../public/images/projects/movies-library.png";
import Blog from "../../../public/images/projects/blog.png";

const ProjectsClient = () => {
  const t = useTranslations("Projects");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Mapeamento dos projetos usando as chaves do JSON
  const projectsData = [
    {
      number: "01",
      title: t("YamadaFinanceTrackTitle"),
      description: t("YamadaFinanceTrackDescription"),
      tecnologies:
        "React.js, TypeScript, Tailwind CSS, TanStack Query, Shadcn/UI",
      online: "https://yamada-fintrack.vercel.app",
      github: "https://github.com/YudiYamada/yamada-fintrack",
      image: YamadaFinanceTrack,
    },
    {
      number: "02",
      title: t("SpotifyTitle"),
      description: t("SpotifyDescription"),
      tecnologies: "React, Vite, Node.js, Express, MongoDB, Axios",
      online: "https://projeto-spotify-vxmp.onrender.com/",
      github: "https://github.com/YudiYamada/projeto-spotify",
      image: Spotify,
    },
    {
      number: "03",
      title: t("TypicalFruitsTitle"),
      description: t("TypicalFruitsDescription"),
      tecnologies: "HTML, CSS, JavaScript",
      online: "https://yudiyamada.github.io/20-frutas-tipicas-do-para/",
      github: "https://github.com/YudiYamada/20-frutas-tipicas-do-para",
      image: Frutas,
    },
    {
      number: "04",
      title: t("BewearTitle"),
      description: t("BewearDescription"),
      tecnologies: "Next.js, TypeScript, PostgreSQL, Drizzle ORM, Stripe",
      online: "https://bewear-ecommerce-bice.vercel.app/",
      github: "https://github.com/YudiYamada/bewear-ecommerce",
      image: Bewear,
    },
    {
      number: "05",
      title: t("MoviesLibraryTitle"),
      description: t("MoviesLibraryDescription"),
      tecnologies: "React, Vite, React Router Dom, API TMDB",
      online: "https://yudiyamada.github.io/projeto-filmes-api-tmdb/",
      github: "https://github.com/YudiYamada/projeto-filmes-api-tmdb",
      image: MoviesLibrary,
    },
    {
      number: "06",
      title: t("BlogTitle"),
      description: t("BlogDescription"),
      tecnologies: "React, Vite, Axios, React Router Dom",
      online: "https://yudiyamada.github.io/blog/",
      github: "https://github.com/YudiYamada/blog",
      image: Blog,
    },
  ];

  const currentProject = projectsData[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < projectsData.length - 1)
      setCurrentIndex(currentIndex + 1);
  };

  return (
    <section className="flex flex-col items-center gap-10 py-10" id="projects">
      <div className="flex justify-center">
        <h2 className="text-5xl font-bold">
          {t("MyProjects").split(" ")[0]}{" "}
          <span className="text-primary">{t("MyProjects").split(" ")[1]}</span>
        </h2>
      </div>

      <div className="flex w-full max-w-7xl flex-col-reverse gap-10 px-4 lg:flex-row lg:items-start">
        <div className="w-full lg:w-1/2">
          <HeaderProjects
            number={currentProject.number}
            title={currentProject.title}
            description={currentProject.description}
            tecnologies={currentProject.tecnologies}
            online={currentProject.online}
            github={currentProject.github}
          />
        </div>

        <div className="w-full space-y-5 lg:w-1/2">
          <div
            className="border-desactive group relative cursor-zoom-in overflow-hidden rounded-xl border-2"
            onClick={() => setIsZoomed(true)}
          >
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              placeholder="blur"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label={t("PreviousProject")}
              className={`rounded-sm border-2 p-3 transition-all duration-300 ${
                currentIndex > 0
                  ? "border-primary text-primary bg-foreground cursor-pointer hover:scale-110"
                  : "border-desactive text-desactive cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={30} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === projectsData.length - 1}
              aria-label={t("NextProject")}
              className={`rounded-sm border-2 p-3 transition-all duration-300 ${
                currentIndex < projectsData.length - 1
                  ? "border-primary text-primary bg-foreground hover:scale-110 hover:cursor-pointer"
                  : "border-desactive text-desactive cursor-not-allowed"
              }`}
            >
              <ChevronRight size={30} />
            </button>
          </div>
        </div>
      </div>

      {/* MODAL COM PORTAL */}
      {isZoomed &&
        createPortal(
          <div
            className="fixed inset-0 z-100 flex cursor-zoom-out items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setIsZoomed(false)}
          >
            <div
              className="relative flex w-full max-w-6xl flex-col items-center"
              onClick={(e) => e.stopPropagation()} // Impede que feche ao clicar na imagem
            >
              <button
                className="absolute -top-12 right-0 text-5xl text-white hover:cursor-pointer"
                onClick={() => setIsZoomed(false)}
              >
                &times;
              </button>
              <p className="text-xl font-bold text-white">
                {currentProject.title}
              </p>
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                className="animate-in zoom-in-95 mt-4 max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl duration-300"
              />
              <span className="text-desactive mt-2">
                {t("ClickAnywhereToClose")}
              </span>
            </div>
          </div>,
          document.body,
        )}

      {/* SEO Hidden Content */}
      <div className="sr-only">
        {projectsData.map((project) => (
          <article key={project.number}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>
              {t("TechnologiesUsed")} {project.tecnologies}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsClient;
