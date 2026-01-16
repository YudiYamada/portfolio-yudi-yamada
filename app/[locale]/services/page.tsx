// Framework & Core
import type { Metadata } from "next";

// Bibliotecas de Terceiros (i18n, Ícones)
import { getTranslations } from "next-intl/server";
import { Layers, LoaderCircle, Palette, Server, Settings } from "lucide-react";

// Componentes Locais
import { CardService } from "@/components/card-service";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Services" });

  return {
    title: t("Title"),
    description: t("Description"),
    keywords: t.raw("Keywords"),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Services" });

  return (
    <section id="services" aria-label={t("Title")} className="py-10">
      <div className="flex justify-center">
        <h2 className="text-5xl">
          My{" "}
          <span className="text-primary font-bold">
            {t("MyServices").replace("My ", "")}
          </span>
        </h2>
      </div>

      <div className="mt-3.5 grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
        <CardService
          icon={<Palette size={50} />}
          title={t("FrontendEngineer")}
          paragraph={t("FrontendEngineerDescription")}
        />

        <CardService
          icon={<Server size={50} />}
          title={t("BackendEngineer")}
          paragraph={t("BackendEngineerDescription")}
        />

        <CardService
          icon={<Layers size={50} />}
          title={t("FullstackEngineer")}
          paragraph={t("FullstackEngineerDescription")}
        />

        <CardService
          icon={<Settings size={50} />}
          title={t("InfrastructureAndCloud")}
          paragraph={t("InfrastructureAndCloudDescription")}
        />

        <CardService
          icon={<Settings size={50} />}
          title={t("HardwareConsulting")}
          paragraph={t("HardwareConsultingDescription")}
        />

        <CardService
          icon={<LoaderCircle size={50} className="animate-spin" />}
          title={t("ComingSoon")}
          paragraph={t("ComingSoonDescription")}
        />
      </div>
    </section>
  );
}
