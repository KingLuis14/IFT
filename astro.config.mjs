import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site : 'https://www.ift.pe/',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always'
  },
  devToolbar: {
    enabled: false
  },
  integrations: [icon(), react(), sitemap()],
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});