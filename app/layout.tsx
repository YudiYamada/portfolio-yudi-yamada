import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "Yudi Yamada | Full Stack Engineer",
    template: "%s | Yudi Yamada",
  },
  description:
    "Full Stack Engineer specializing in React, Next.js, and Node.js. Focused on building scalable web applications and high-performance digital solutions.",
  keywords: [
    "Full Stack Engineer",
    "Software Developer",
    "React Expert",
    "Next.js Portfolio",
    "TypeScript Developer",
    "Yudi Yamada",
  ],
  authors: [{ name: "Yudi Yamada" }],
  creator: "Yudi Yamada",
  metadataBase: new URL("https://portfolio-yudi-yamada.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-yudi-yamada.vercel.app",
    title: "Yudi Yamada | Full Stack Engineer",
    description: "Transforming ideas into scalable software solutions.",
    siteName: "Yudi Yamada Portfolio",
    images: [
      {
        url: "../public/images/picture-1200x630-for-social-sharing.png",
        width: 1200,
        height: 630,
        alt: "Yudi Yamada Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yudi Yamada | Full Stack Engineer",
    description: "Professional portfolio and software engineering projects.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} bg-background text-text font-sans antialiased`}
      >
        {/* 1. Skip Link: Essencial para acessibilidade (SEO agradece) */}
        <a
          href="#main-content"
          className="bg-primary sr-only absolute z-50 p-4 text-white focus:not-sr-only"
        >
          Skip to content
        </a>

        <div className="flex min-h-screen flex-col gap-5">
          <div className="container mx-auto px-6 py-5">
            <Header />
          </div>

          <main
            id="main-content"
            className="container mx-auto flex flex-1 flex-col justify-center gap-8 px-6 pb-10"
          >
            {children}
          </main>

          <footer className="border-t border-none py-8 text-center text-sm text-zinc-500">
            <div className="container mx-auto px-6">
              <p>
                © {new Date().getFullYear()} Yudi Yamada. Built with Next.js &
                Tailwind CSS.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
