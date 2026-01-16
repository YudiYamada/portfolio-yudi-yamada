// Framework & Core
import type { Metadata } from "next";

// Bibliotecas de Terceiros (i18n)
import { getTranslations } from "next-intl/server";

// Componentes Locais
import ProjectsClient from "./projects-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Projects" });

  return {
    title: t("Title"),
    description: t("Description"),
    keywords: t.raw("Keywords"),
  };
}

export default function ProjectsPage() {
  return <ProjectsClient />;
}
