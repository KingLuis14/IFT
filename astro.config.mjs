import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ift.pe/',
  compressHTML: true,
  devToolbar: {
    enabled: false
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/asset.[hash][extname]'
        }
      }
    }
  },
  integrations: [icon(), react(), sitemap(), purgecss({
    safelist: {
      greedy: [/@/, /:/]
    }
  })]
});