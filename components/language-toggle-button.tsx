"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

interface Language {
  className?: string;
}


export default function LanguageToggleButton({ className }: Language) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const params = useParams();

  const languages = [
    { code: "en", label: "EN", flag: "🇺🇸" },
    { code: "pt", label: "PT", flag: "🇧🇷" },
    { code: "es", label: "ES", flag: "🇪🇸" },
  ];

  const handleLanguageChange = (newLocale: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - mantém os mesmos parâmetros da rota ao trocar de língua
    router.replace({ pathname, params }, { locale: newLocale });
  };

  return (
    <div className={className}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`rounded-md border-2 hover:cursor-pointer px-3 py-1 transition-all ${
            locale === lang.code
              ? "border-primary bg-primary text-white"
              : "hover:border-primary/50 border-transparent"
          }`}
        >
          <span className="mr-1">{lang.flag}</span>
          <span className="text-sm font-bold">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
