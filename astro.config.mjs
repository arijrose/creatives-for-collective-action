import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://arijrose.github.io",
  base: "/creatives-for-collective-action",
  integrations: [mdx(), sitemap(), tailwind()],
});
