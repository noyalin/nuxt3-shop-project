import { message } from 'ant-design-vue'
import { useGlabalStore } from '~/stores'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.config.errorHandler = error => {
    const store = useGlabalStore()
    store.setFullLoading(false)

    message.error('错误：' + error)
  }
})
