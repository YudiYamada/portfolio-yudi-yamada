// Framework & Core (React, Next.js)
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { notFound } from "next/navigation";

// Bibliotecas de Terceiros (i18n, UI, Ícones)
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

// Componentes Locais
import Header from "@/components/header";
import PageTransition from "@/components/page-transition";

// Assets & Estilos (Imagens, JSON, CSS)
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: t("DefaultTitle"),
      template: t("DefaultTemplate"),
    },
    description: t("DefaultDescription"),
    keywords: t.raw("DefaultKeywords"),

    metadataBase: new URL("https://portfolio-yudi-yamada.vercel.app"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        pt: "/pt",
        es: "/es",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : locale === "es" ? "es_ES" : "en_US",
      url: `https://portfolio-yudi-yamada.vercel.app/${locale}`,
      title: t("DefaultTitle"),
      // AJUSTE: Verifique se o seu JSON usa ponto ou se são chaves aninhadas
      description: t("OpenGraph.TransformingIdeas"),
      siteName: t("OpenGraph.PortfolioSiteName"),
      images: [
        {
          url: "/images/picture-1200x630-for-social-sharing.png",
          width: 1200,
          height: 630,
          alt: "Yudi Yamada Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("DefaultTitle"),
      description: t("Twitter.ProfessionalPortfolio"),
      images: ["/images/picture-1200x630-for-social-sharing.png"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validação de segurança para locales não suportados
  if (!["en", "pt", "es"].includes(locale)) {
    notFound();
  }

  // Carregamento de mensagens e traduções para o layout
  const messages = await getMessages();
  const t = await getTranslations("Layout");

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${roboto.variable} bg-background text-text selection:bg-primary font-sans antialiased selection:text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* Skip Link para Acessibilidade */}
          <a
            href="#main-content"
            className="bg-primary sr-only absolute top-4 left-4 z-100 rounded-md p-4 text-white transition focus:not-sr-only"
          >
            {t("SkipToContent")}
          </a>

          <div className="flex min-h-screen flex-col">
            {/* Header Wrapper */}
            <header className="container mx-auto px-6 py-5">
              <Header />
            </header>

            {/* Conteúdo Principal com Animação */}
            <main
              id="main-content"
              className="container mx-auto flex flex-1 flex-col justify-center px-6 pb-10"
            >
              <PageTransition>{children}</PageTransition>
            </main>

            {/* Footer Dinâmico */}
            <footer className="mt-auto border-t border-zinc-800/50 py-8 text-center text-sm text-zinc-500">
              <div className="container mx-auto px-6">
                <p>
                  {t("Footer", {
                    year: new Date().getFullYear(),
                  })}
                </p>
              </div>
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
