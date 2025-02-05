import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/google-fonts", "@nuxt/image", "@nuxt/icon"],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Options
  },
  googleFonts: {
    families: {
      Inter: true,
    },
  },
});
