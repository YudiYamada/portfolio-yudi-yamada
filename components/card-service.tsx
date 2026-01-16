// 1. Framework & Core
import { useTranslations } from "next-intl";

// 2. Bibliotecas de Terceiros
import { Mail } from "lucide-react";
import { Link } from "@/i18n/navigation"; // Usando o Link traduzido

interface CardServiceProps {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
}

export const CardService = ({ icon, title, paragraph }: CardServiceProps) => {
  // Acessa o namespace CardService do JSON
  const t = useTranslations("CardService");

  return (
    <article className="group bg-foreground border-desactive hover:border-primary space-y-4 rounded-2xl border-2 px-6.25 py-7.5 transition-all duration-700 hover:scale-105">
      <div className="flex justify-between">
        <span
          className="group-hover:text-primary transition-all duration-700"
          aria-hidden="true"
        >
          {icon}
        </span>

        <Link
          href="/contact"
          // O next-intl substitui automaticamente o {title} pelo valor da prop
          aria-label={t("Inquire", { title })}
          title={t("ContactMe", { title })}
          className="group-hover:text-primary inline-flex rounded-full transition-all duration-700 hover:animate-spin hover:cursor-pointer"
        >
          <Mail size={50} />
        </Link>
      </div>

      <h3 className="group-hover:text-primary text-2xl font-bold transition-all duration-700 sm:text-4xl">
        {title}
      </h3>

      <p className="text-text/80">{paragraph}</p>
    </article>
  );
};
