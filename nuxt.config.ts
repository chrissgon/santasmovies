// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@kevinmarrec/nuxt-pwa",
    "@nuxt/image-edge",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],

  runtimeConfig: {
    public: {
      apiKey: "d9badbd",
    },
  },

  imports: {
    dirs: ["store"],
  },

  app: {
    head: {
      title: "Santa's Movies",
      meta: [
        {
          name: "description",
          content:
            "Christmas movie recommendations website. Suggestions for classic and new Christmas films, search for titles, consult the synopsis, duration, year and language",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins&family=Yeseva+One&display=swap",
        },
      ],
    },
  },

  tailwindcss: {
    viewer: false,
  },
});
