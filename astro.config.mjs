import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://mansfieldturner.com",

  // GitHub Pages serves the apex with directory-style, trailing-slash URLs;
  // keep canonical, OG and sitemap URLs in the same form.
  trailingSlash: "always",

  integrations: [sitemap()],
});