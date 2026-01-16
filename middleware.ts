import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/navigation";

// Usando o objeto routing, você sincroniza locales, defaultLocale e localePrefix
export default createMiddleware(routing);

export const config = {
  // O matcher define quais caminhos o Next-intl deve processar
  // O seu matcher atual está ótimo, mantivemos a proteção para arquivos estáticos
  matcher: [
    // Habilita um prefixo de local para a raiz
    "/",

    // Seta o local para caminhos que começam com um dos locais suportados
    "/(en|pt|es)/:path*",

    // Aplica o middleware em todas as rotas, exceto arquivos estáticos (.png, .jpg, etc) e internos do Next
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
