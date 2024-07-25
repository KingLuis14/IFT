import { defineConfig } from 'astro/config';
import icon from "astro-icon";
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
  integrations: [icon(), sitemap(), purgecss({
    defaultExtractor: content => {
      // Extrae clases que contienen ':', '@' y otras clases válidas de CSS
      return (content.match(/[\w-/:@]+(?<!:)/g) || []);
    }
    
   
  })]
});