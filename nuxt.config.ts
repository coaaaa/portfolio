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
  app:{
    head:{
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Portfolio",
      meta: [
        {
          name: "description",
          content: "Simple portfolio to showcase my projects and skills",
        },
      ],
  },
});
