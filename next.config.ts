import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* suas opções de configuração do Next aqui (ex: imagens, redirects, etc) */
};

export default withNextIntl(nextConfig);
