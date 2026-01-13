"use client";

import { useState } from "react";
import HeaderProjects from "@/components/header-projects";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Imports de Imagens
import YamadaFinanceTrack from "../../public/images/projects/yamada-finance-track.png";
import Spotify from "../../public/images/projects/projeto-spotify.png";
import Frutas from "../../public/images/projects/projeto-frutas-tipicas.png";
import Bewear from "../../public/images/projects/projeto-bewear.png";
import MoviesLibrary from "../../public/images/projects/movies-library.png";
import Blog from "../../public/images/projects/blog.png";

const projectsData = [
  {
    number: "01",
    title: "Yamada Finance Track",
    description:
      "Developed Yamada Finance Track, a modern financial management system focused on real-time data accuracy and intuitive user experience. The application provides a comprehensive dashboard for tracking income, expenses, and overall balance with advanced filtering capabilities.",
    tecnologies:
      "React.js, TypeScript, Tailwind CSS, TanStack Query, Shadcn/UI",
    online: "https://yamada-fintrack.vercel.app",
    github: "https://github.com/YudiYamada/yamada-fintrack",
    image: YamadaFinanceTrack,
  },
  {
    number: "02",
    title: "Spotify",
    description:
      "Developed a high-fidelity Spotify Clone, a full-stack music streaming SPA designed to handle real-time audio playback, complex navigation, and high-performance data delivery.",
    tecnologies: "React, Vite, Node.js, Express, MongoDB, Axios",
    online: "https://projeto-spotify-vxmp.onrender.com/",
    github: "https://github.com/YudiYamada/projeto-spotify",
    image: Spotify,
  },
  {
    number: "03",
    title: "Frutas Típicas",
    description:
      "I present my personal project about fruits from my state, in the form of little cards.",
    tecnologies: "HTML, CSS, JavaScript",
    online: "https://yudiyamada.github.io/20-frutas-tipicas-do-para/",
    github: "https://github.com/YudiYamada/20-frutas-tipicas-do-para",
    image: Frutas,
  },
  {
    number: "04",
    title: "Bewear - E-commerce",
    description:
      "Developed a high-performance, full-featured e-commerce platform using the latest React/Next.js ecosystem. The project focuses on scalability, type safety, and seamless user experience, from product discovery to secure checkout.",
    tecnologies: "Next.js, TypeScript, PostgreSQL, Drizzle ORM, Stripe",
    online: "https://bewear-ecommerce-bice.vercel.app/",
    github: "https://github.com/YudiYamada/bewear-ecommerce",
    image: Bewear,
  },
  {
    number: "05",
    title: "Movies Library",
    description:
      "Developed Movies Library, a dynamic Single Page Application (SPA) that consumes the TMDB API to provide a real-time cinematic database exploration experience. The project focuses on high-performance search, efficient data fetching, and scalable routing.",
    tecnologies: "React, Vite, React Router Dom, API TMDB",
    online: "https://yudiyamada.github.io/projeto-filmes-api-tmdb/",
    github: "https://github.com/YudiYamada/projeto-filmes-api-tmdb",
    image: MoviesLibrary,
  },
  {
    number: "06",
    title: "Blog",
    description:
      "Blog developed with React and JSONPlaceholder to simulate blog posts.",
    tecnologies: "React, Vite, Axios, React Router Dom",
    online: "https://yudiyamada.github.io/blog/",
    github: "https://github.com/YudiYamada/blog",
    image: Blog,
  },
];

const ProjectsClient = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentProject = projectsData[currentIndex];

  // Lógica de navegação
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
          My <span className="text-primary">Projects</span>
        </h2>
      </div>

      <div className="flex w-full max-w-7xl flex-col-reverse gap-10 px-4 lg:flex-row lg:items-start">
        {/* LADO ESQUERDO: INFORMAÇÕES (HEADER) */}
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

        {/* LADO DIREITO: IMAGEM E NAVEGAÇÃO */}
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

          {/* BOTÕES DE NAVEGAÇÃO */}
          <div className="flex justify-end gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous project"
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
              aria-label="Next project"
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

      {/* MODAL DE ZOOM (LIGHTBOX) */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-100 flex cursor-zoom-out items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative flex w-full max-w-6xl flex-col items-center">
            <button className="absolute -top-12 right-0 text-5xl text-white">
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
            <span className="text-desactive">click anywere to close</span>
          </div>
        </div>
      )}
      
      {/* SEO Hidden Content: Garante que todos os projetos sejam indexados pelo Google */}
      <div className="sr-only">
        {projectsData.map((project) => (
          <article key={project.number}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Technologies used: {project.tecnologies}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsClient;
