// Framework & Core (React, Next.js)
import Image from "next/image";
import type { Metadata } from "next";

// Bibliotecas de Terceiros (i18n, UI, Ícones)
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

// Assets & Estilos (Imagens, JSON, CSS)
import Retrato from "../../public/images/retrato.jpg";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return {
    title: t("Title"),
    description: t("Description"),
    keywords: t.raw("Keywords"),
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return (
    <section
      className="flex min-h-fit flex-col-reverse items-center justify-center lg:flex-row lg:gap-0"
      id="home"
      aria-label={t("ProfileImageAlt")}
    >
      <div className="flex-1 p-4 text-center md:basis-1/2 md:p-8 md:text-left">
        <div className="flex flex-col justify-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold md:text-6xl">{t("Name")}</h1>
            <h2 className="text-2xl md:text-3xl">
              {t("Greeting")}{" "}
              <strong className="text-primary font-bold">{t("Role")}</strong>
            </h2>
            <p className="mx-auto max-w-2xl text-base md:mx-0 md:text-xl">
              {t("Introduction")}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5 md:justify-start">
            <div>
              <a
                href="/documents/YudiAugustoFariasYamada_FullStackEngineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="YudiAugustoFariasYamada_DevFullStack.pdf"
                className="bg-primary hover:text-primary border-primary rounded-full border-2 px-8 py-3 font-bold shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)] transition-all duration-500 hover:bg-transparent md:px-10 md:py-4"
              >
                {t("DownloadCV")}
              </a>
            </div>

            <div className="mt-3 flex gap-4 md:mt-0">
              <Link
                href="https://github.com/YudiYamada"
                target="_blank"
                aria-label={t("AccessGitHub")}
                title={t("GitHub")}
                className="border-primary text-primary hover:bg-primary hover:text-text rounded-full border-2 bg-transparent p-2 transition-all duration-500"
              >
                <Github size={24} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/yudi-yamada-0a10181b9/"
                target="_blank"
                aria-label={t("AccessLinkedIn")}
                title={t("LinkedIn")}
                className="border-primary text-primary hover:bg-primary hover:text-text rounded-full border-2 bg-transparent p-2 transition-all duration-500"
              >
                <Linkedin size={24} />
              </Link>

              <Link
                href="mailto:yudiyamada10@gmail.com"
                target="_blank"
                aria-label={t("SendEmail")}
                title={t("Email")}
                className="border-primary text-primary hover:bg-primary hover:text-text rounded-full border-2 bg-transparent p-2 transition-all duration-500"
              >
                <Mail size={24} />
              </Link>

              <Link
                href="https://wa.me/5591989573018"
                target="_blank"
                aria-label={t("SendMessage")}
                title={t("WhatsApp")}
                className="border-primary text-primary hover:bg-primary hover:text-text rounded-full border-2 bg-transparent p-2 transition-all duration-500"
              >
                <MessageCircle size={24} />
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
            alt={t("ProfileImageAlt")}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
