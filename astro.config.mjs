import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const siteUrl = process.env.SITE_URL ?? "https://hikelly.cl";

export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
