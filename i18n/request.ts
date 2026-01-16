import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Defina os idiomas suportados para validação
const locales = ["en", "pt", "es"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  // Validação de segurança: se o locale não existir ou não for suportado
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale: locale, // Agora o TS sabe que é uma string válida
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
