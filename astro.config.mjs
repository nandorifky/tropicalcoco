// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // TAMBAHKAN BARIS INI (Ganti dengan domain asli nanti saat deploy)
  site: 'https://tropicalcocoindonesia.com', 
  
  integrations: [tailwind()]
});