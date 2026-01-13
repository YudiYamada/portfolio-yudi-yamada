// Framework / Bibliotecas Externas (React, Next.js, etc)
import Link from "next/link";
import Image from "next/image";

// Bibliotecas de Terceiros (Ícones, UI components, etc)
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

// Assets e Estilos (Imagens, CSS, JSON)
import Retrato from "../public/images/retrato.jpg";

export const metadata = {
  title: "Yudi Yamada | Full Stack Engineer",
  description:
    "Portfólio profissional de Yudi Yamada, Full Stack Engineer especializado em React, Next.js e Node.js. Transformando ideias em realidade através de código.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Desenvolvedor de Software",
    "Yudi Yamada",
  ],
  openGraph: {
    images: ["../public/images/retrato.jpg"],
  },
};

export default function Home() {
  return (
    <section
      className="flex min-h-fit flex-col-reverse items-center justify-center lg:flex-row lg:gap-0"
      id="home"
      aria-label="Introdução profissional de Yudi Yamada, Engenheiro de Software"
    >
      <div className="flex-1 p-4 text-center md:basis-1/2 md:p-8 md:text-left">
        <div className="flex flex-col justify-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold md:text-6xl">Yudi Yamada</h1>
            <h2 className="text-2xl md:text-3xl">
              Hi! I am a{" "}
              <strong className="text-primary font-bold">
                Full Stack Engineer
              </strong>
            </h2>
            <p className="mx-auto max-w-2xl text-base md:mx-0 md:text-xl">
              Professional with a degree in Systems Analysis and Development,
              passionate about technology and innovation. I am a dedicated
              individual with a strong ability to solve problems and work
              effectively in teams. I am eager to contribute my expertise and
              enthusiasm to challenging projects, helping transform ideas into
              reality.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5 md:justify-start">
            <div>
              <Link
                href="/documents/YudiAugustoFariasYamada_FullStackEngineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="YudiAugustoFariasYamada_DevFullStack.pdf"
                className="bg-primary hover:text-primary border-primary rounded-full border-2 px-8 py-3 font-bold shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)] transition-all duration-500 hover:bg-transparent md:px-10 md:py-4"
              >
                Download CV
              </Link>
            </div>
            <div className="mt-3 flex gap-4 md:mt-0">
              <Link
                href="https://github.com/YudiYamada"
                target="_blank"
                aria-label="Access my GitHub profile"
                title="GitHub"
                className="border-primary text-primary hover:bg-primary hover:text-text rounded-full border-2 bg-transparent p-2 transition-all duration-500"
              >
                <Github />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yudi-yamada-0a10181b9/"
                target="_blank"
                aria-label="Access my LinkedIn profile"
                title="LinkedIn"
                className="border-primary text-primary hover:bg-primary hover:text-text rounded-full border-2 bg-transparent p-2 transition-all duration-500"
              >
                <Linkedin />
              </Link>
              <Link
                href="mailto:yudiyamada10@gmail.com"
                target="_blank"
                aria-label="Send me an email"
                title="Email"
                className="border-primary text-primary hover:bg-primary hover:text-text rounded-full border-2 bg-transparent p-2 transition-all duration-500"
              >
                <Mail />
              </Link>
              <Link
                href="https://wa.me/5591989573018"
                target="_blank"
                aria-label="Send me a WhatsApp message"
                title="WhatsApp"
                className="border-primary text-primary hover:bg-primary hover:text-text rounded-full border-2 bg-transparent p-2 transition-all duration-500"
              >
                <MessageCircle />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center p-4 md:basis-1/2">
        <div className="border-primary relative aspect-square w-full max-w-70 overflow-hidden rounded-full border-2 shadow-2xl shadow-fuchsia-300 lg:max-w-md">
          <Image
            src={Retrato}
            priority
            placeholder="blur"
            alt="Yudi Yamada - Full Stack Engineer e Desenvolvedor Web"
          />
        </div>
      </div>
    </section>
  );
}
