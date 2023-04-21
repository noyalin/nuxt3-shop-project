// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/tailwindcss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/default.scss" as *;',
        },
      },
    },
  },
  app: {
    baseURL: '/noya/nuxt3/',
  },
})
