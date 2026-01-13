// Framework / Bibliotecas Externas (React, Next.js, etc)
import type { Metadata } from "next";

// Bibliotecas de Terceiros
import { Layers, LoaderCircle, Palette, Server, Settings } from "lucide-react";

// Componentes
import { CardService } from "@/components/card-service";

export const metadata: Metadata = {
  title: "Services | Full Stack Engineering & Cloud Solutions",
  description:
    "Explore my professional services: Frontend & Backend Engineering, Fullstack Development, Cloud Infrastructure, and Technical Consulting. Scalable solutions for your digital product.",
  keywords: [
    "Software Development Services",
    "Frontend Specialist",
    "Backend Architecture",
    "Cloud Infrastructure",
    "Full Stack Developer for hire",
    "Technical Consulting",
  ],
};

const Services = () => {
  return (
    <section id="services" aria-label="Offered Services and Specialties">
      <div className="flex justify-center">
        <h2 className="text-5xl">
          My <span className="text-primary font-bold">Services</span>
        </h2>
      </div>
      <div className="mt-3.5 grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
        <CardService
          icon={<Palette size={50} />}
          title="Frontend Engineer"
          paragraph="Specialist in high-performance interfaces and scalable design systems. I develop applications focused on Core Web Vitals, ensuring the product is not only visually flawless but extremely fast, accessible, and optimized for search engines (SEO)."
        />

        <CardService
          icon={<Server size={50} />}
          title="Backend Engineer"
          paragraph="Development of robust ecosystems and resilient APIs. Focused on microservices architecture, complex data modeling (SQL/NoSQL), and implementing security layers, ensuring the system supports high loads while maintaining low latency."
        />

        <CardService
          icon={<Layers size={50} />}
          title="Fullstack Engineer"
          paragraph="End-to-end engineering: from database design to user interface. I have full mastery of the Software Development Life Cycle (SDLC), integrating CI/CD pipelines, automated testing, and third-party service integration to deliver market-ready digital products."
        />

        <CardService
          icon={<Settings size={50} />}
          title="Infrastructure & Cloud"
          paragraph="Environment optimization and scalable deployment. Server configuration, development environment automation, and ensuring system availability through monitoring and Infrastructure as Code (IaC) best practices."
        />

        <CardService
          icon={<Settings size={50} />}
          title="Hardware Consulting"
          paragraph="High-level diagnostics and local infrastructure optimization. I work on custom machine architecture for high performance, strategic upgrades, and operating system recovery, focusing on extracting maximum performance from available hardware."
        />

        <CardService
          icon={<LoaderCircle size={50} className="animate-spin" />}
          title="Coming Soon"
          paragraph="I am currently acquiring new skills."
        />
      </div>
    </section>
  );
};

export default Services;
