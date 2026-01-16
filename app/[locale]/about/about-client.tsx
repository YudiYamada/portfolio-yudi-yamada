"use client";

// Framework & Core (React, Next.js)
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

// Bibliotecas de Terceiros (i18n, UI, Ícones)
import { useTranslations } from "next-intl";
import {
  CodeXml,
  Database,
  Monitor,
  Server,
  Settings,
  Zap,
} from "lucide-react";

// Componentes Locais
import CardAbout from "@/components/card-about";
import { TabButton } from "@/components/tab-button";
import { HeaderSection } from "@/components/header-section";
import { SkillCategory } from "@/components/skill-category";

// Assets & Estilos (Imagens, JSON, CSS)
import Tecnologo from "../../../public/images/degrees-and-certificates/tecnologo-em-analise-e-desenvolvimento-de-sistemas.png";
import Tecnico from "../../../public/images/degrees-and-certificates/certificado-curso-tecnico-ifpa.jpeg";
import CertificadoDevQuestFront from "../../../public/images/degrees-and-certificates/devquest_frontend.jpg";
import CertificadoDevQuestBack from "../../../public/images/degrees-and-certificates/devquest_backend.jpg";

const AboutClient = () => {
  const t = useTranslations("About");
  const [activeTab, setActiveTab] = useState("habilidades");
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null,
  );

  // Mapeamento de certificados com as chaves do JSON
  const certificates = [
    {
      id: 1,
      image: Tecnologo,
      title: t("AssociateDegree"),
      institution: t("UNAMA"),
    },
    {
      id: 2,
      image: CertificadoDevQuestFront,
      title: t("FrontendDevelopment"),
      institution: t("DevQuest"),
    },
    {
      id: 3,
      image: CertificadoDevQuestBack,
      title: t("BackendDevelopment"),
      institution: t("DevQuest"),
    },
    {
      id: 4,
      image: Tecnico,
      title: t("VocationalDegree"),
      institution: t("IFPA"),
    },
  ];

  return (
    <section className="flex flex-col gap-10 md:flex-row" id="about">
      {/* SIDEBAR DE NAVEGAÇÃO */}
      <div className="flex w-full flex-col md:w-1/3">
        <HeaderSection
          title={t("WhyHireMe")}
          highlight={t("HireMe")}
          description={t("HireMeDescription")}
        />
        <div className="mt-2.5 space-y-3">
          <TabButton
            label={t("Skills")}
            isActive={activeTab === "habilidades"}
            onClick={() => setActiveTab("habilidades")}
          />
          <TabButton
            label={t("Experiences")}
            isActive={activeTab === "experiencias"}
            onClick={() => setActiveTab("experiencias")}
          />
          <TabButton
            label={t("Certificates")}
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
            title={t("MyExperience")}
            highlight={t("Experiences")}
            description={t("MyExperiencesDescription")}
          />
          <div className="flex flex-col gap-5">
            <CardAbout
              title={t("YamadaFinanceTrackTitle")}
              institution={t("PersonalProject")}
              date={t("YamadaFinanceTrackDate")}
              paragraph={t("YamadaFinanceTrackDescription")}
            />
            <CardAbout
              title={t("BewearTitle")}
              institution={t("PersonalProject")}
              date={t("BewearDate")}
              paragraph={t("BewearDescription")}
            />
            <CardAbout
              title={t("MoviesLibraryTitle")}
              institution={t("PersonalProject")}
              date={t("MoviesLibraryDate")}
              paragraph={t("MoviesLibraryDescription")}
            />
            <CardAbout
              title={t("SpotifyCloneTitle")}
              institution={t("PersonalProject")}
              date={t("SpotifyCloneDate")}
              paragraph={t("SpotifyCloneDescription")}
            />
            <CardAbout
              title={t("ITInternshipTitle")}
              institution={t("ITInternshipInstitution")}
              date={t("ITInternshipDate")}
              paragraph={t("ITInternshipDescription")}
            />
          </div>
        </div>

        {/* TAB: CERTIFICADOS */}
        {activeTab === "certificados" && (
          <div>
            <HeaderSection
              title={t("MyDegree")}
              highlight={t("MyDegrees")}
              description={t("MyDegreesDescription")}
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
              title={t("MySkill")}
              highlight={t("MySkills")}
              description={t("MySkillsDescription")}
            />
            <SkillCategory
              title={t("Frontend")}
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
              title={t("BackendAndDatabase")}
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
              title={t("ToolsAndDevOps")}
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
              alt={t("FullSizeView")}
              placeholder="blur"
              className="max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl"
            />
            <p className="mt-4 text-sm text-zinc-400">{t("ClickToClose")}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutClient;
