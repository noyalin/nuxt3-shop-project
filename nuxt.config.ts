// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  // buildDir: 'dist',
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
  nitro: {
    devProxy: {
      '/mock': {
        target: 'http://localhost:7300',
        changeOrigin: true,
      },
    },
  },
  devServer: {
    port: 3008,
  },
})
