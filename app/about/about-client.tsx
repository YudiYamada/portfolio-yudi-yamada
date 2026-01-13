"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  CodeXml,
  Database,
  Monitor,
  Server,
  Settings,
  Zap,
} from "lucide-react";

// Componentes extraídos
import CardAbout from "@/components/card-about";
import { TabButton } from "../../components/tab-button";
import { HeaderSection } from "../../components/header-section";
import { SkillCategory } from "../../components/skill-category";

// Imports de Imagens
import Tecnologo from "../../public/images/degrees-and-certificates/tecnologo-em-analise-e-desenvolvimento-de-sistemas.png";
import Tecnico from "../../public/images/degrees-and-certificates/certificado-curso-tecnico-ifpa.jpeg";
import CertificadoDevQuestFront from "../../public/images/degrees-and-certificates/devquest_frontend.jpg";
import CertificadoDevQuestBack from "../../public/images/degrees-and-certificates/devquest_backend.jpg";

const certificates = [
  {
    id: 1,
    image: Tecnologo,
    title: "Associate Degree in Systems Analysis and Development",
    institution: "UNAMA",
  },
  {
    id: 2,
    image: CertificadoDevQuestFront,
    title: "Front-End Development",
    institution: "DevQuest",
  },
  {
    id: 3,
    image: CertificadoDevQuestBack,
    title: "Back-end Development",
    institution: "DevQuest",
  },
  { id: 4, image: Tecnico, title: "Vocational Degree", institution: "IFPA" },
];

const AboutClient = () => {
  const [activeTab, setActiveTab] = useState("habilidades");
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null,
  );

  return (
    <section className="flex flex-col gap-10 md:flex-row" id="about">
      {/* SIDEBAR DE NAVEGAÇÃO */}
      <div className="flex w-full flex-col md:w-1/3">
        <HeaderSection
          title="Why"
          highlight="hire me?"
          description="I work as a Full Stack Engineer, applying my expertise in React.js,
            Next.js, Node.js, TypeScript, and PostgreSQL to build modern and
            scalable solutions. I have experience with agile methodologies, REST
            API integration, testing with Jest, and tools such as Docker and
            Git."
        />
        <div className="mt-2.5 space-y-3">
          <TabButton
            label="Skills"
            isActive={activeTab === "habilidades"}
            onClick={() => setActiveTab("habilidades")}
          />
          <TabButton
            label="Experiences"
            isActive={activeTab === "experiencias"}
            onClick={() => setActiveTab("experiencias")}
          />
          <TabButton
            label="Certificates"
            isActive={activeTab === "certificados"}
            onClick={() => setActiveTab("certificados")}
          />
        </div>
      </div>

      {/* ÁREA DE CONTEÚDO DINÂMICO */}
      <div className="w-full md:w-2/3">
        {/* TAB: EXPERIÊNCIAS */}
        <div
          className={
            activeTab === "experiencias" ? "block space-y-5" : "hidden"
          }
        >
          <HeaderSection
            title="My"
            highlight="Experiences"
            description="Below is a summary of the experience I have acquired
              during my career."
          />
          <div className="flex flex-col gap-5">
            <CardAbout
              title="Frontend Engineer | Financial Dashboards & Data Visualization"
              institution="Personal Project"
              date="Oct 2025 - Nov 2025"
              paragraph="Developed Yamada Finance Track, a modern financial management system focused on real-time data accuracy and intuitive user experience. The application provides a comprehensive dashboard for tracking income, expenses, and overall balance with advanced filtering capabilities."
            />

            <CardAbout
              title="Full Stack Engineer | Bewear (Modern E-commerce Platform)"
              institution="Personal Project"
              date="Aug 2025 - Oct 2025"
              paragraph="Developed a high-performance, full-featured e-commerce platform using the latest React/Next.js ecosystem. The project focuses on scalability, type safety, and seamless user experience, from product discovery to secure checkout."
            />

            <CardAbout
              title="Frontend Engineer | API Integration & Interactive Web Applications"
              institution="Personal Project"
              date="May 2025 - May 2025"
              paragraph="Developed Movies Library, a dynamic Single Page Application (SPA) that consumes the TMDB API to provide a real-time cinematic database exploration experience. The project focuses on high-performance search, efficient data fetching, and scalable routing."
            />

            <CardAbout
              title="Full Stack Engineer | Media Streaming & API Architecture"
              institution="Personal Project"
              date="Feb 2025 - Feb 2025"
              paragraph="Developed a high-fidelity Spotify Clone, a full-stack music streaming SPA designed to handle real-time audio playback, complex navigation, and high-performance data delivery."
            />

            <CardAbout
              title="IT Internship"
              institution="Federal Institute of Pará - IFPA"
              date="2018 - 2019"
              paragraph="Technical Support: Troubleshooting hardware, software, systems, and network issues."
            />
          </div>
        </div>

        {/* TAB: CERTIFICADOS */}
        {activeTab === "certificados" && (
          <div>
            <HeaderSection
              title="My"
              highlight="Degrees"
              description="Below, I present my course certifications and academic degrees."
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedImage(cert.image)}
                  className="group hover:border-primary cursor-pointer overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 transition-all"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-3">
                    <p className="text-sm font-semibold">{cert.title}</p>
                    <p className="text-xs text-zinc-400">{cert.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: HABILIDADES */}
        {activeTab === "habilidades" && (
          <div className="space-y-8">
            <HeaderSection
              title="My"
              highlight="Skills"
              description="Below are my core skills and technologies."
            />
            <SkillCategory
              title="Frontend"
              icon={Monitor}
              subIcon={CodeXml}
              skills={[
                "HTML5",
                "CSS3",
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "Redux",
                "Tailwind CSS",
                "Styled Components",
                "Bootstrap",
                "TanStack Query",
                "React Hook Form",
              ]}
            />
            <SkillCategory
              title="Backend & Database"
              icon={Server}
              subIcon={Database}
              skills={[
                "Node.js",
                "Express.js",
                "APIs REST",
                "PostgreSQL",
                "MongoDB",
                "Prisma",
                "Drizzle",
                "SQL",
              ]}
            />
            <SkillCategory
              title="Tools & DevOps"
              icon={Settings}
              subIcon={Zap}
              skills={[
                "Git",
                "GitHub",
                "Docker",
                "Vite",
                "Jest",
                "Figma",
                "SEO",
                "Scrum",
                "Kanban",
              ]}
            />
          </div>
        )}
      </div>

      {/* Modal de Visualização (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative flex w-full max-w-5xl flex-col items-center">
            <button
              className="hover:text-primary absolute -top-12 right-0 text-4xl text-white transition-colors hover:cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Full size view"
              placeholder="blur"
              className="max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl"
            />
            <p className="mt-4 text-sm text-zinc-400">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutClient;
