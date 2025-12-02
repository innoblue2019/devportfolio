// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://innoblue2019.github.io',
  base: '/devprotfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
