import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  build: {
    inlineStylesheets: 'always'
  },
  devToolbar: {
    enabled: false
  },
  integrations: [icon(), react()],
  vite: {
    build: {
      cssMinify: 'lightningcss'
    },
    
  }
});