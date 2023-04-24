// https://nuxt.com/docs/api/configuration/nuxt-config

// 环境变量配置
import { loadEnv } from 'vite'
interface VITE_ENV_CONFIG {
  VITE_BASE_URL: string
}
const envScript = process.env.npm_lifecycle_script?.split(' ') || []
const envName = envScript[envScript.length - 1] // 通过启动命令区分环境
const envData = loadEnv(envName, 'env') as unknown as VITE_ENV_CONFIG //获取.env文件中的配置
Object.assign(process.env, envData) // 将环境配置信息，添加到process.env
console.log('当前环境：', envData)

export default defineNuxtConfig({
  srcDir: 'src/',
  // buildDir: 'dist',
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    pubilc: envData, // 环境变量内容
  },
  vite: {
    envDir: '~/env', // 指定env文件夹
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/default.scss" as *;',
        },
      },
    },
  },
  app: {
    // baseURL: '/noya/nuxt3/',
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
