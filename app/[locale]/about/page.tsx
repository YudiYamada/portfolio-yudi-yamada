// 1. Framework & Core
import type { Metadata } from "next";

// 2. Bibliotecas de Terceiros (i18n)
import { getTranslations } from "next-intl/server";

// 3. Componentes Locais
import AboutClient from "./about-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });

  return {
    title: t("Title"),
    description: t("Description"),
    keywords: t.raw("Keywords"),
  };
}

export default function AboutPage() {
  return <AboutClient />;
}
