import { message } from 'ant-design-vue'
import { BASE_URL, IS_MOCK, MOCK_BASE_URL } from '~/constants'
import { useGlabalStore } from '~/stores'

const fetch = $fetch.create({
  // 请求拦截器
  async onRequest({ options }) {
    const store = useGlabalStore()
    store.setFullLoading(true)

    options.baseURL = IS_MOCK ? MOCK_BASE_URL : BASE_URL

    //用户权限
    // if (!userInfo) return

    console.log(options)
  },

  // 响应拦截
  onResponse({ response }) {
    const store = useGlabalStore()
    store.setFullLoading(false)

    const data = response._data

    if (data.code !== '0') {
      return Promise.resolve(data)
    }

    //成功返回
    return data
  },

  onResponseError(error) {
    const err = (text: string) => {
      message.error(error?.response?._data.message ?? text)
    }

    if (error?.response?._data) {
      switch (error.response.status) {
        case 404:
          err('服务器资源不存在')
          break
        case 403:
          err('没有权限访问该资源')
          break
        case 500:
          err('内部服务器错误')
          break
        default:
          err('未知错误')
      }
    } else {
      err('请求超时，服务器无响应')
    }

    return Promise.reject(error?.response?._data ?? null)
  },
})

export const useHttp = {
  get: (url: string, params?: any, option?: { [propName: string]: any }) => {
    return fetch(url, { method: 'get', params, ...option })
  },
  post: (url: string, params?: any, option?: { [propName: string]: any }) => {
    return fetch(url, { method: 'post', body: params, ...option })
  },
}
